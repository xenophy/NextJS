/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.message.Message

NX.define('NX.smtp.message.Message', {

    // {{{ statics

    statics: {

        // {{{ create

        create: require('./statics/create')

        // }}}

    },

    // }}}
    // {{{ attach

    attach: require('./attach'),

    // }}}
    // {{{ attach_alternative

    attach_alternative: require('./attach_alternative'),

    // }}}
    // {{{ valid

    valid: require('./valid'),

    // }}}
    // {{{ stream

    stream: require('./stream'),

    // }}}
    // {{{ read

    read: require('./read')

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
