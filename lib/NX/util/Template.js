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

        // {{{ node

        node : [],

        // }}}
        // {{{ initTpl

        initTpl : function(s) {

            s = s || '';

            // 改行コード削除
//            s = s.replace(/[\n\r]/g, '');

            // コメント削除
            s = s.replace(/\{\*.*?\*\}/g, '');

            return s;
        },

        // }}}
        // {{{ parseOperator

        parseOperator : function(s) {

            return s.match(/\{.*?\}/g);
        },

        // }}}
        // {{{ TextNode

        TextNode : function(v, literal, tpl) {

            var me = this;

            NX.apply(me, {
                v : v,
                literal: literal,
                tpl: tpl
            });

        }

        // }}}

    });

    // }}}
    // {{{ return

    return {

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

            var ss = 0,
                se = 0,
                skip = false;
                literalMode = false;

            // テンプレート文字列初期化
            s = initTpl(s);

            // オペレーター解析
            NX.each(parseOperator(s), function(op) {

                // TODO:改行コードを削除するときはチェックする？
                if(skip == true) {
                    skip = false;
                    return;
                }

                if(literalMode === true) {

                    se = s.indexOf('{/literal}');

                    if(se === -1) {
                        throw new Error("No end of literal.");
                    }

                    if(se > ss) {
                        node.push(new TextNode(s.substring(ss, se), 1, this));
                    }

                    ss = se + '{/literal}'.length;

                    literalMode = false;
                    // TODO:改行コードを削除するときはチェックする？
                    //skip = true;


                    return;
                }

                se = s.indexOf(op, ss);

                if(se > ss) {
                    node.push(new TextNode(s.substring(ss, se), literalMode, this));
                }

                var ppp = op.match(/\{([\w\/]+).*?\}/);
                var op_in = RegExp.$1;

                switch(op_in) {

                    case 'literal':
                        literalMode = true;
                    break;

                    case '/literal':
                        throw new Error("Missing begin of literal.");
                    break;

                    default:
                        if(bind[op_in]) {
                            node.push(new TextNode(bind[op_in], literalMode, this));
                        }

                }

                ss = se + op.length;
            });

            if(s.length > ss) {
                node.push(new TextNode(s.substr(ss), literalMode, this));
            }


            var html = '';

            NX.each(node, function(n) {
                html += n.v;
            });

            return html;
        }

        // }}}

    };

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
