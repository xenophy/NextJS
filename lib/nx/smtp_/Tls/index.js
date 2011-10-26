/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Tls

NX.define('NX.smtp.Tls', {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ secure

    secure: function(socket, options, cb) {

        var me = this,
            sslcontext = NX.Crypto.createCredentials(options);
            pair = tls.createSecurePair(sslcontext, false);
            cleartext = me.pipe(pair, socket);

        pair.on('secure', function() {

            var verifyError = (pair.ssl || pair._ssl).verifyError();

            if(verifyError) {

                cleartext.authorized = false;
                cleartext.authorizationError = verifyError;

            } else {

                cleartext.authorized = true;

            }

            if(cb) {
                cb();
            }
        });

        cleartext._controlReleased = true;
        return cleartext;

    },

    // }}}

});

NX.apply(NX.smtp.Tls, NX.Tls);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
