
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.tpl.TextNode

NX.define('NX.util.tpl.TextNode', {

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

        //    if(!me.op) {
        return me.v;
        //    }

        //    return me.bind[me.vn];

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

