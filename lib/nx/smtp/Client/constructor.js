/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.constructor

module.exports = function(config) {

    config = config || {};

    var me = this;

    NX.applyIf(me, {
        smtp: NX.create('NX.smtp.Smtp', config),
        queue: [],
        timer: null,
        sending: false
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
