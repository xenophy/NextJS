/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ app.ws

var buffer = [];

module.exports = NX.extend(NX.WebSocketController, {

    // {{{ use

    use: ['users'],

    // }}}
    // {{{ connect

    connect : function(client) {
    },

    // }}}
    // {{{ message

    message : function(message, client) {

//        client.broadcast(msg);
        if(message === 'from client') {
            client.send('from server');
        }
    },

    // }}}
    // {{{ disconnect

    disconnect : function(client) {

        var me = this;

        client.broadcast({ announcement: client.sessionId + ' disconnected' });

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
