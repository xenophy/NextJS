/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.Store

NX.define('NX.data.Store', {

    // {{{ constructor

    constructor: function(config) {
    },

    // }}}
    // {{{ regenerate

    regenerate: function(req, callback) {
        var me = this;

        this.destroy(req.sessionID, function(err) {
            me.generate();
            fn(err);
        });

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
