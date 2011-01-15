/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.template.Foreach

/**
 * @class NX.util.template.Foreach
 */
NX.util.template.Foreach = function() {

    return NX.extend(Object, {

        // {{{ constructor

        constructor : function(config) {

            config = config || {};

            var me = this;

            NX.apply(me, config);
        },

        // }}}
        // {{{ get

        get : function() {

            var me = this,
                parent = me.parent;

            var op = me.op.substring(parent.ldelim.length);
            op = op.substring(0, op.length - parent.rdelim.length);
            op = NX.explode(' ', op);

            var config = {};
            NX.each(op, function(item, i) {

                if(i == 0) {
                    return;
                }

                var t = NX.explode('=', item);

                // TODO:trim
                config[t[0]] = t[1];

            });

            eval('var loop = me.bind.' + config.from);
            var html = '';

            NX.iterate(loop, function(item, key) {

                var tpl = new NX.util.Template(parent.initialConfig);
                var bind = {};

                bind[config.item] = item;
                bind[config.key] = key;

                html += tpl.fetch(me.v, bind);

            });

            return html;
        }

        // }}}

    });

}();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
