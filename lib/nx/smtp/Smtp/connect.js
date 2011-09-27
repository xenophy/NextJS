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
        timer;

    var callback = function(err) {

        // タイムアウトクリア
        clearTimeout(timer);

        if(!err) {

            // TODO:SSL処理





        } else {

            me.close(true);

        }

    };

    me.sock = NX.Net.Socket();

    try {

        me.state = NX.smtp.Smtp.CONNECTING;

        me.sock.connect(me.port, me.host, callback);

    } catch(e) {

        console.log(e);

    }

    timer = setTimeout(function() {

        if(me.state !== NX.smtp.Smtp.CONNECTED) {

            me.close(true);

        }

    }, me.timeout);

    NX.smtp.Response.watch(me.sock);

    me.sock.setTimeout(me.timeout);

    me.sock.once('response', function(err, data) {

        var msg = NX.smtp.Response.parse(data);

        if(!err && msg.code == '220') {

            me.state = NX.smtp.Smtp.CONNECTED;

            fn(err, data);

        } else {

            /*
            if(err)
            {
                log("response (error): " + err);
                self.close(true);

                caller(callback, {code:err.code, error:err.error, message:err.message});
            }
            else
            {
                log("response (data): " + data);
                self.quit();

                caller(callback, {code:SMTPError.BADRESPONSE, message:"bad response on connection", smtp:data, error:err});
            }
            */

            console.log("error");

        }

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
