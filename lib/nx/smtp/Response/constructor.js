/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Response.constructor

module.exports = function(config) {

    config = config || {};

    var me = this;

    NX.apply(me, config);
    NX.applyIf(me, {
    });

    me.stream.on('data', me.watch);
    me.stream.on('end', me.end);
    me.stream.on('close', me.close);
    me.stream.on('timeout', me.timeout);
    me.stream.on('error', me.error);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
