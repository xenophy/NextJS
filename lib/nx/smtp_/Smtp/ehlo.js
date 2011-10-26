/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.ehlo

module.exports = function(fn, domain) {

    var me = this;

    var res = function(err, data) {

        if(!err) {

            data.split("\n").forEach(function(ext) {

                var parse = ext.match(/^(?:\d+[-=]?)\s*?([^\s]+)(?:\s+(.*)\s*?)?$/);

                if(parse) {
                    me.features[parse[1].toLowerCase()] = parse[2] || true;
                }

            });

            console.log(me.tls);
            console.log(me._sequre);

            if(me.tls && !me._secure) {

                var secured = function(err, data) {

                    if(!err) {

                        me.ehlo(fn, domain);

                    } else {

                        fn(err, data);

                    }
                };

                me.starttls(secured);

            } else {

                fn(null, data);

            }

        } else {

            fn(err);

        }

    };

    me.features = {};
    me.command("ehlo " + (domain || me.domain), res);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
