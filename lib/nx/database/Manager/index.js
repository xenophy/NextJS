/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.Manager

NX.define('NX.database.Manager', {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ connections

    connections: {},

    // }}}
    // {{{ get

    get: function(config) {

        var key = NX.JSON.encode(config);

        return this.connections[key];
    },

    // }}}
    // {{{ set

    set: function(config, conn) {

        var key = NX.JSON.encode(config);

        this.connections[key] = conn;
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
