/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Form.write

module.exports = function(buffer) {

    var me = this;

    if(!me.$parser) {
        me.$error(new Error('unintialized parser'));
        return;
    }

    me.bytesReceived += buffer.length;
    me.emit('progress', me.bytesReceived, me.bytesExpected);

    var bytesParsed = me.$parser.write(buffer);

    if(bytesParsed !== buffer.length) {
        me.$error(new Error('parser error, ' + bytesParsed + ' of ' + buffer.length + ' bytes parsed'));
    }

    return bytesParsed;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
