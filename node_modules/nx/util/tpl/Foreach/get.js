/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.tpl.Foreach.get

module.exports = function(next) {

    var me = this,
        config = {},
        html = '',
        elseText = '',
        trim = NX.util.Format.trim,
        parent = me.parent,
        ldelim = parent.ldelim,
        rdelim = parent.rdelim,
        op = me.op.substring(ldelim.length);

    op = op.substring(0, op.length - rdelim.length);
    op = op.split(' ');

    NX.iterate(op, function(item, i) {

        if(i == 0) {
            return;
        }

        var t = item.split('=');

        config[t[0]] = trim(t[1]);

    });

    eval('var loop = me.bind.' + config.from);

    // ネストしたforeachを持たないテンプレートの場合
    if(me.v.indexOf(ldelim + 'foreach ') === -1) {

        // foreachelseがある場合分割
        var v = me.v.split((ldelim + 'foreachelse' + rdelim));

        if(v.length > 1) {
            elseText = v[1];
        }

        me.v = v[0];
    }

    if(NX.isDefined(loop) && NX.isIterable(loop) && loop.length > 0) {

        var tmp = [];

        NX.iterate(loop, function(item, key) {

            var tpl = NX.create('NX.Template', parent.initialConfig);
            var bind = {};

            bind[config.item] = item;
            bind[config.key] = key;

            tmp.push({
                s: me.v,
                tpl: tpl,
                bind: bind
            });
        });

        var idx = 0;

        function opchain(err) {

            var op = tmp[idx++];

            if(op) {

                try {

                    op.tpl.fetch(op.s, op.bind, function(ret) {
                        opchain.html += ret;
                        opchain();
                    });

                } catch(e) {

                    next.html += opchain.html;
                    next();

                }

            } else {

                next.html += opchain.html;
                next();

            }
        }
        opchain.html = html;
        opchain();

    } else {

        var tpl = NX.create('NX.Template', parent.initialConfig);
        var bind = me.bind;

        tpl.fetch(elseText, bind, function(ret) {
            next.html += ret;
            next();
        });
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
