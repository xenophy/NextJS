/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.login

module.exports = function(fn, user, password, options) {

    var me = this, login, domain, initiate;

    login = {
        user        : user || SMTP_USER,
        password    : password || SMTP_PASSWORD,
        method      : options && options.method ? options.method.toUpperCase() : ''
    };

    domain = options && options.domain ? options.domain : this.domain;

    initiate = function(err, data) {

        if(err) {
            fn(err);
            return;
        }

        var method = null,
            encode_cram_md5,
            encode_plain,
            AUTH_METHODS = NX.smtp.Smtp.AUTH_METHODS;

        // {{{ encode_cram_md5

        encode_cram_md5 = function(challenge) {

            challenge = (new Buffer(challenge, "base64")).toString("ascii");

            var hmac = NX.Crypto.createHmac('md5', login.password);
            hmac.update(challenge);

            return (new Buffer(login.user + " " + hmac.digest('hex')).toString("base64"));
        };

        // }}}
        // {{{ encode_plain

        encode_plain = function() {
            return (new Buffer("\0" + login.user + "\0" + login.password)).toString("base64");
        };

        // }}}
        // {{{ response

        var response = function(err, data) {

            if(!err) {

                me.loggedin = true;
                fn(err, data);

            } else {

                me.loggedin = false;
                fn({code:SMTPError.AUTHFAILED, message:"authorization failed", smtp:data});

            }
        };

        // }}}
        // {{{ attempt

        var attempt = function(err, data) {

            if(!err) {

                if(method == AUTH_METHODS.CRAM_MD5) {

                    me.command(encode_cram_md5(SMTPResponse.parse(data).message), response, [235, 503]);

                } else if(method == AUTH_METHODS.LOGIN) {

                    me.command((new Buffer(login.password)).toString("base64"), response, [235, 503]);

                }

            } else {

                me.loggedin = false;
                fn({code:SMTPError.AUTHFAILED, message:"authorization failed", smtp:data});

            }
        };

        // }}}
        // {{{ methodが指定されていない場合

        if(!method) {

            var preferred = [AUTH_METHODS.CRAM_MD5, AUTH_METHODS.LOGIN, AUTH_METHODS.PLAIN];

            for(var i = 0; i < preferred.length; i++) {
                if((me.features["auth"] || "").indexOf(preferred[i]) != -1) {
                    method = preferred[i];
                    break;
                }
            }
        }

        // }}}

        if(method == AUTH_METHODS.CRAM_MD5) {

            me.command("AUTH " + AUTH_METHODS.CRAM_MD5, attempt, [334]);

        } else if(method == AUTH_METHODS.LOGIN) {

            me.command("AUTH " + AUTH_METHODS.LOGIN + " " + (new Buffer(login.user)).toString("base64"), attempt, [334]);

        } else if(method == AUTH_METHODS.PLAIN) {

            me.command("AUTH " + AUTH_METHODS.PLAIN + " " + encode_plain(login.user, login.password), response, [235, 503]);

        } else if(!method) {

            fn({code:SMTPError.AUTHNOTSUPPORTED, message:"no form of authorization supported", smtp:data});

        }

    };

    me.ehlo_or_helo_if_needed(initiate, domain);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
