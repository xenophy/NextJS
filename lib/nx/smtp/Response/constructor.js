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

    me.stream.on('data', function() {
        me.watch.apply(me, arguments);
    });

    me.stream.on('end', function() {
        me.end.apply(me, arguments);
    });

    me.stream.on('close', function() {
        me.close.apply(me, arguments);
    });

    me.stream.on('timeout', function() {
        me.timeout.apply(me, arguments);
    });

    me.stream.on('error', function() {
        me.error.apply(me, arguments);
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
