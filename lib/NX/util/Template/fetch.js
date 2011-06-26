/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Template.fetch

module.exports = function(s, bind) {

    bind = bind || {};

    var TextNode = NX.util.tpl.TextNode,
        opIf = NX.util.tpl.If,
        opForeach = NX.util.tpl.Foreach;
        opInclude = NX.util.tpl.Include;

    var me = this,
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

        if(NX.Template.isHtmlComment(op)) {
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

                if(!isHtmlComment(op)) {

                node.push(new opInclude({
                    op : op,
                    bind: bind,
                    parent: me
                }));

            }

            break;

            // }}}
            // {{{ /literal

            case '/literal':

                if(!isHtmlComment(op)) {

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

                    if(!isHtmlComment(op)) {

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

                if(NX.Template.isHtmlComment(op)) {
                    break;
                }

                var vn = NX.Template.getVarName(op, me.ldelim, me.rdelim);

                // 修飾子処理
                var modifier = getModifier(op, me.ldelim, me.rdelim);

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
                        try {
                            eval('var tv = ' + fvn);
                        } catch(e) {
                            eval(po + '= {};');
                            bnf = false;
                        }

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
                                } catch(e) {
                                    try{
                                        eval('value = ' + value + ';');
                                    } catch(e) {
                                    }
                                }
                            }

                            o.param[i] = value;

                        });

                        o.param.unshift(v);

                        v = NX.util.String[o.name].apply(NX.util.String, o.param);

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

    NX.iterate(node, function(n) {
        html += n.get();
    });

    return html;
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
