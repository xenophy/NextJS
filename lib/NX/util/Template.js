/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Template

/**
 * @class NX.Template
 */
NX.Template = function() {

    var me = this;

    NX.apply(me, {

        isHtmlComment : function(s) {

            leftOp = '<!--';
            rightOp = '-->';

            if(
                s.substring(0, leftOp.length) === leftOp &&
                s.substring(s.length - rightOp.length) === rightOp
            ){
                return true;
            }

            return false;
        },

        getVarName : function(s, ldelim, rdelim) {

            var me = this;

            if(s.charAt(0) !== ldelim || s.substr(-1) !== rdelim) {
                return null;
            }

            s = s.substring(ldelim.length);
            s = s.substring(0, s.length - rdelim.length);

            var pos = s.indexOf('|');

            if(pos === -1) {
                return s;
            }

            return s.substr(0, pos);
        },

        getModifier : function(s, ldelim, rdelim) {

            var me = this;

            if(s.charAt(0) !== ldelim || s.substr(-1) !== rdelim) {
                return null;
            }

            s = s.substring(ldelim.length);
            s = s.substring(0, s.length - rdelim.length);

            var tmp = s.split('|');

            tmp.shift();

            var ret = [];
            // パラメータ解析
            tmp.forEach(function(mod) {

                mod = mod.split(':');

                var name = mod[0];
                mod.shift();
                param = mod;

                ret.push({
                    name: name,
                    param: param
                });

            });

            return ret;
        }

    });

    // }}}
    // {{{ return

    return NX.extend(Object, {

        // {{{ constructor

        constructor : function(config) {

            config = config || {};

            var me = this;

            NX.apply(me, config);
            NX.applyIf(me, {
                initialConfig: config,
                ldelim : '{',
                rdelim : '}'
            });

            var reLdelim = NX.escapeRe(me.ldelim);
            var reRdelim = NX.escapeRe(me.rdelim);

            // 正規表現初期化
            NX.apply(me, {

                // {{{ コメントオペレータ用正規表現

                commentRe : new RegExp(reLdelim + '\\*(.|\r\n|\n|\r)*?\\*' + reRdelim, 'g'),

                // }}}
                // {{{ オペレーターマッチ用正規表現

                operatorsRe : new RegExp(reLdelim + '.*?' + reRdelim + '|<!--(.|\r\n|\n|\r)+?-->', 'g'),

                // }}}
                // {{{ オペレーター識別子用正規表現

                operatorIdRe : new RegExp(reLdelim + '([\\w\\/]+).*?' + reRdelim, 'g')

                // }}}

            });

        },

        // }}}
        // {{{ assign

        /**
         * @method assign
         */
        assign : function(key, v) {



        },

        // }}}
        // {{{ fetch

        /**
         * @method fetch
         */
        fetch : function(s, bind) {

            bind = bind || {};

            var TextNode = NX.util.template.TextNode,
                opIf = NX.util.template.If,
                opForeach = NX.util.template.Foreach;
                opInclude = NX.util.template.Include;

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
            NX.each(operators, function(op) {

                // カーソル終了位置設定
                ce = s.indexOf(op, cs);

                if(mode !== 'collect') {

                    // オペレータより前のテキストノードを設定
                    node.push(new TextNode({v: s.substring(cs, ce)}));

                } else {

                    collect += s.substring(cs, ce + op.length);

                }

                // {{{ HTMLコメント格納

                if(isHtmlComment(op)) {
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

                            if(isHtmlComment(op)) {
                                break;
                            }

                            var vn = getVarName(op, me.ldelim, me.rdelim);

                            if(NX.isNull(vn)) {
                                break;
                            }

                            // 修飾子処理
                            var modifier = getModifier(op, me.ldelim, me.rdelim);

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

                                    v = NX.util.template.modifier[o.name].apply(NX.util.template.modifier, o.param);

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

            NX.each(node, function(n) {
                html += n.get();
            });

            return html;
        }

        // }}}

    });

    // }}}

}();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
