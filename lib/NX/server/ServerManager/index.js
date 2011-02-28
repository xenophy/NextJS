/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

// }}}
// {{{ NX.server.ServerManager

/**
 * @class NX.server.ServerManager
 */
NX.define('NX.server.ServerManager', {

    // {{{ extend

    extend: 'NX.AbstractManager',

    // }}}
    // {{{ singleton

    singleton: true,

    // }}}

    constructor :function() {

        this.callParent();

    },
    // }}}
    // {{{ register

    /**
     * @method register
     */
    register: function(name, options) {

        if(NX.isObject(name)) {
            options = name;
        } else {
            options.name = name;
        }

        var server = new NX.Server(options);

        this.all.add(server);

        return server;
    }

    // }}}

}, function() {

    // {{{ regServer

    /**
     * @method regServer
     */
    NX.regServer = function() {
        return NX.server.ServerManager.register.apply(NX.server.ServerManager, arguments);
    };

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
