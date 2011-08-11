/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Form.parse

module.exports = function(req, res, fn) {

    var me = this;

    NX.apply(me, {

        // {{{ pause

        pause: function() {

            var me = this;

            try {

                req.pause();

            } catch(e) {

                if(!me.ended) {
                    me.$error(e);
                }

                return false;
            }
            return true;

        },

        // }}}
        // {{{ resume

        resume: function() {

            var me = this;

            try {

                req.resume();

            } catch (e) {

                if(!me.ended) {

                    me.$error(e);

                }

                return false;
            }

            return true;


        }

        // }}}

    });

    me.writeHeaders(req.headers);

    req.on('error', function(err) {

        me.$error(err);

    }).on('data', function(buffer) {

        me.write(buffer);

    }).on('end', function() {

        if(me.error) {
            return;
        }

        var e = me.$parser.end();

        if(e) {
            me.$error(e);
        }
    });

    if(fn) {

        var fields = {},
            files = {};

        me.on('field', function(name, value) {

            console.log("field!!");
            console.log(name);
            console.log(value);
            fields[name] = value;

        }).on('file', function(name, file) {

            files[name] = file;

        }).on('error', function(e) {

            fn(e, fields, files);

        }).on('end', function() {

            fn(null, fields, files);

        });
    }

    return this;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
