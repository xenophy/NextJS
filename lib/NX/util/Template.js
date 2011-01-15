/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Template

/**
 * @class NX.util.Template
 */
NX.util.Template = function() {

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

            s = s.substring(ldelim.length);
            s = s.substring(0, s.length - rdelim.length);

            var pos = s.indexOf('|');

            if(pos === -1) {
                return s;
            }

            return s.substr(0, pos);
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
                opForeach = NX.util.template.Foreach;

            var me = this,
                modeId,
                mode = false,
                collect = '';
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

                    default:

                        if(mode === false) {

                            var vn = getVarName(op, me.ldelim, me.rdelim);

                            eval('var v = bind.' + vn);

                            node.push(new TextNode({v : v}));
                        }

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




            /*
            var pre;

            NX.each(operators, function(op) {

                curEnd = s.indexOf(op, curStart);
                if(curEnd > curStart) {
                    if(mode === false) {
                        node.push(new TextNode({
                            bind: bind,
                            v: s.substring(curStart, curEnd),
                            mode: mode,
                            tpl: me
                        }));
                    }
                }

                var ppp = op.match(me.operatorIdRe);
                var opId = RegExp.$1;

                switch(opId) {

                    case '/foreach':

                        if(skip === 0) {
                            curEnd = s.indexOf(op, curEnd);

                            mode = false;
                            node.push(new opForeach({
                                op: modeId,
                                v: s.substring(curStart, curEnd),
                                bind: bind,
                                tpl: me
                            }));
                        }

                        skip--;
                    break;


                    case 'foreach':
                        if(mode !== false) {
                            skip++;
                        } else {
                            mode = 'foreach';
                            modeId = op;
                            curStart = curEnd + op.length;
                        }
                    break;

                    default:

                        if(mode === false) {

                            var vn = getVarName(opId);
                            if(op.indexOf('.') !== -1) {

                                var oop = op.substring(me.ldelim.length);
                                oop = oop.substring(0, oop.length - me.rdelim.length);

                                vn = getVarName(oop);
                                eval('var v = bind.' + vn);

                                node.push(new TextNode({
                                    v : v
                                }));

                            } else {

                                if(NX.isDefined(bind[vn])) {
                                    node.push(new TextNode({
                                        op: opId,
                                        vn: vn,
                                        bind: bind,
                                        v : bind[vn],
                                        mode: mode,
                                        tpl: me
                                    }));
                                }
                            }
                        }

                    break;
                }

                if(mode === false) {
                    curStart = curEnd + op.length;
                }

                pre = op;
            });

                /*
            if(s.length > curStart) {
                node.push(new TextNode({
                    bind: bind,
                    v: s.substr(curStart),
                    mode: mode,
                    tpl: me
                }));
            }
            */

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
