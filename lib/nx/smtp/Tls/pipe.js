/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Tls.pipe

module.exports = function(pair, socket) {

    pair.encrypted.pipe(socket);
    socket.pipe(pair.encrypted);

    var cleartext = pair.cleartext;
    cleartext.socket = socket;
    cleartext.encrypted = pair.encrypted;
    cleartext.authorized = false;

    function onerror(e) {

        if(cleartext.$controlReleased) {
            cleartext.emit('error', e);
        }

    }

    function onclose() {

        socket.removeListener('error', onerror);
        socket.removeListener('close', onclose);

    }

    socket.on('error', onerror);
    socket.on('close', onclose);

    return cleartext;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
