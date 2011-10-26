/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.message.Message.read

module.exports = function(callback) {

    var buffer = "", capture, outputm, str;

    capture = function(data) {
        buffer += data;
    };

    output = function(err) {
        callback(err, buffer);
    };

    str = this.stream();

    str.on('data', capture);
    str.on('end', output);
    str.on('error', output);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
