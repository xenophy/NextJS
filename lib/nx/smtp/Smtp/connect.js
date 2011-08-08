/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.connect

module.exports = function(fn) {

    fn = fn || NX.emptyFn;

    var me = this,
        nTimer;

    var callback = function(err) {

        clearTimeout(nTimer);

        if(!err) {
        
        } else {
            
            console.log("error");
            
        }

    };

    me.sock = NX.Net.Socket();

    try {

        me.state = NX.smtp.Smtp.CONNECTING;

        me.sock.connect(me.port, me.host, callback);

    } catch(e) {

        console.log(e);

    }

    nTimer = setTimeout(function() {

        if(me.state !== NX.smtp.Smtp.CONNECTED) {

            me.close(true);

        }

    }, me.timeout);
    NX.smtp.Response.watch(me.sock);

    me.sock.setTimeout(me.timeout);
    me.sock.once('response', function(err, data) {

        console.log("response");
    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
