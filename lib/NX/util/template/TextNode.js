/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.util', 'NX.util.template');

// }}}
// {{{ NX.util.template.TextNode

/**
 * @class NX.util.template.TextNode
 */
NX.util.template.TextNode = function() {

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

            var me = this;

            if(!me.op) {
                return me.v;
            }

            return me.bind[me.vn];

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
