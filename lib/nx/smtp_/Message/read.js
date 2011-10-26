/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Message.read

module.exports = function(fn) {

    fn = fn || NX.emptyFn;

    var buffer = '';
    var str = NX.create('NX.smtp.stream.Message');
    var output = function(err) {
        fn(err, buffer);
    };

    str.on('data', function(data) {
        buffer += data;
    });

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
