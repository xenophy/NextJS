/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Template.fetch

module.exports = function(s, bind, next) {

    bind = bind || {};

    var TextNode = NX.util.tpl.TextNode,
        opIf = NX.util.tpl.If,
        opForeach = NX.util.tpl.Foreach;
        opInclude = NX.util.tpl.Include;

    var me = this,
        ldelim = me.ldelim,
        rdelim = me.rdelim,
        modeId,
        mode = false,
        collect = '';
        foreachElse = '';
        skip = {};
        node = [];

    // テキスト内カーソル位置
    var cs = 0, ce = 0;

    // コメントオペレーター削除
    s = s.replace(me.commentRe, '');

    // オペレーター解析
    operators = s.match(me.operatorsRe);

    NX.iterate(operators, function(op) {

        // カーソル終了位置設定
        ce = s.indexOf(op, cs);

        if(mode !== 'collect') {

            // オペレータより前のテキストノードを設定
            node.push(new TextNode({v: s.substring(cs, ce)}));

        } else {

            collect += s.substring(cs, ce + op.length);

        }

        // {{{ HTMLコメント格納

        if(NX.Template.isHtmlComment(op, ldelim, rdelim)) {
            node.push(new TextNode({v: op}));
        }

        // }}}
        // {{{ オペレーターID取得

        var ppp = op.match(me.operatorIdRe);
        var opId = RegExp.$1;

        // }}}
        // {{{ オペレータ別処理

        switch(opId) {

            // {{{ include

            case 'include':

                if(!NX.Template.isHtmlComment(op, ldelim, rdelim)) {

                    node.push(new opInclude({
                        type: 'include',
                        op : op,
                        bind: bind,
                        parent: me
                    }));

                }

            break;

            // }}}
            // {{{ /literal

            case '/literal':

                if(!NX.Template.isHtmlComment(op, ldelim, rdelim)) {

                    skip['literal']--;

                    if(skip['literal'] === 0) {

                        collect = collect.substring(0, collect.length - op.length)
                        mode = false;
                        node.push(new TextNode({v : collect}));

                    }
                }

            break;

            // }}}
            // {{{ literal

            case 'literal':

                if(mode === 'collect') {

                    skip['literal']++;

                } else {

                    mode = 'collect';
                    collect = '';
                    skip['literal'] = 1;
                    modeId = op;

                }

            break;

            // }}}
            // {{{ /if

            case '/if':

                if(!NX.Template.isHtmlComment(op, ldelim, rdelim)) {

                    skip['if']--;

                    if(skip['if'] === 0) {

                        collect = collect.substring(0, collect.length - op.length)
                        mode = false;
                        node.push(new opIf({
                            op: modeId,
                            v: collect,
                            bind: bind,
                            parent: me
                        }));

                    }

                }

            break;

            // }}}
            // {{{ if

            case 'if':

                if(mode === 'collect') {

                    skip['if']++;

                } else {

                    mode = 'collect';
                    collect = '';
                    skip['if'] = 1;
                    modeId = op;

                }

            break;

            // }}}
            // {{{ /foreach

            case '/foreach':

                skip.foreach--;

                if(skip.foreach === 0) {

                    collect = collect.substring(0, collect.length - op.length)
                    mode = false;

                    node.push(new opForeach({
                        op: modeId,
                        v: collect,
                        bind: bind,
                        parent: me
                    }));
                }

            break;

            // }}}
            // {{{ foreach

            case 'foreach':

                if(mode === 'collect') {

                    skip.foreach++;

                } else {
                    mode = 'collect';
                    collect = '';
                    skip.foreach = 1;
                    modeId = op;
                }

            break;

            // }}}
            // {{{ default

            default:

                if(mode === false) {

                    if(NX.Template.isHtmlComment(op, ldelim, rdelim)) {
                        break;
                    }

                    var vn = NX.Template.getVarName(op, ldelim, rdelim);

                    // 修飾子処理
                    var modifier = NX.Template.getModifier(op, ldelim, rdelim);

                    // キーが存在しない場合に備えて、存在しない場合は空オブジェクトを生成
                    var bnf = false;

                    while(bnf === false) {

                        var bn = 'bind.' + vn;
                        var fvn = '';
                        var po = '';

                        bn.split('.').forEach(function(w, i) {

                            if(i > 0) {
                                fvn += '.';
                            }
                            fvn += w;

                            bnf = true;

                            eval('var tv = ' + fvn);

                            if(i > 0) {
                                po += '.';
                            }

                            po += w;

                        });

                    }

                    eval('var v = bind.' + vn);

                    if(modifier.length > 0) {

                        modifier.forEach(function(o) {

                            o.param.forEach(function(value, i) {

                                if(value.toLowerCase() === 'true') {

                                    value = true;

                                } else if(value.toLowerCase() === 'false') {

                                    value = false;

                                } else {

                                    try{

                                        eval('value = me.bind.' + value);

                                    }catch(e) {

                                        try{

                                            eval('value = ' + value + ';');

                                        }catch(e) {
                                        }
                                    }
                                }

                                o.param[i] = value;

                            });

                            o.param.unshift(v);

//                            try {
                                v = NX.util.Format[o.name].apply(NX.util.Format, o.param);
//                            } catch(e) {
//                                console.log(e.message);
//                                throw new Error(e);
//                            }

                        });

                        node.push(new TextNode({v : v}));

                    } else {

                        node.push(new TextNode({v : v}));

                    }

                }

                // }}}

        }

        // }}}
        // {{{ カーソル開始位置設定

        cs = ce + op.length;

        // }}}

    }, me);

    // 最終オペレータ以降のテキストノードを設定
    if(s.length > cs) {
        node.push(new TextNode({v: s.substr(cs)}));
    }

    var html = '';

    var tmp = [];
    NX.iterate(node, function(n) {
        tmp.push(n);
    });

    var idx = 0;

    function nodechain(err) {

        var node = tmp[idx++];

        if(node) {

//            try {

                node.get(nodechain);

//            } catch(e) {

                // 次へ
//                next(nodechain.html);

//            }

        } else {

            // 次へ
            next(nodechain.html);

        }
   }
   nodechain.html = html;
   nodechain();

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
