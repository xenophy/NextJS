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

        client.send({ buffer: buffer });

    },

    // }}}
    // {{{ message

    message : function(message, client) {

        var me = this;

        var msg;
        if (!me.user) {
            me.user = message;
            msg = { message: [client.sessionId, me.user + 'さん、が入室しました。', 'SYSTEM'] };
        } else {
            msg = { message: [client.sessionId, message, me.user] };
        }

        buffer.push(msg);
        if(buffer.length > 15) {
            buffer.shift();
        }

        client.broadcast(msg);
//        client.send({ buffer: buffer });
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
