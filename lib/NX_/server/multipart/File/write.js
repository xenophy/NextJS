/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.File.write

module.exports = function(buffer, fn) {

    var me = this;

    this.$writeStream.write(buffer, function() {

        me.lastModifiedDate = new Date();

        me.size += buffer.length;

        me.emit('progress', me.size);

        fn();

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
