/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Parser.initWithBoundary

module.exports = function(str) {

    var me = this,
        Buffer = require('buffer').Buffer;

    me.boundary = new Buffer(str.length+4);
    me.boundary.write('\r\n--', 'ascii', 0);
    me.boundary.write(str, 'ascii', 4);
    me.lookbehind = new Buffer(me.boundary.length+8);
    me.state = NX.server.multipart.Parser.START;

    me.boundaryChars = {};

    for (var i = 0; i < me.boundary.length; i++) {
        me.boundaryChars[me.boundary[i]] = true;
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
