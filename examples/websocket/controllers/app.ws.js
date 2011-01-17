/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ app.ws

var user;
var buffer = [];

module.exports = NX.extend(NX.WebSocketController, {

    // {{{ use

    use: ['users'],

    // }}}
    // {{{ connect

    connect : function(client) {

        client.send({ buffer: buffer });

    },

    // }}}
    // {{{ message

    message : function(message) {

        if (!user) {
            user = message;
            return;
        }


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
