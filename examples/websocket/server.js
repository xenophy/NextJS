/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('../../lib/NX');

// }}}
// {{{ create server

NX.createServer({
    websocket: 'app.ws.js',
    listeners : {

        beforeListen : function() {
            console.log('Server running at http://127.0.0.1:3000/');
        },

        afterListen : function() {
        }
    }
}).listen(3000);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
