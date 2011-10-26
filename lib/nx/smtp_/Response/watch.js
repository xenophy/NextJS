/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Response.watch

module.exports = function(data) {

    data = data.toString();

    var me = this,
        emit = false,
        code = 0,
        parsed = data.match(/^(?:.*\n)?([^\n]+)\n\s*$/m);

    me.buffer += data;

    me.notify();

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
