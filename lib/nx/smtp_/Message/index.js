/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Message

NX.define('NX.smtp.Message', {

    // {{{ requires

    requires: [
        'NX.smtp.stream.Message'
    ],

    // }}}
    // {{{ statics

    statics: {

        // {{{ create

        create: require('./statics/create')

        // }}}

    },

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ isValid

    isValid: require('./isValid'),

    // }}}
    // {{{ attach

    attach: require('./attach'),

    // }}}
    // {{{ attachAlternative

    attachAlternative: require('./attachAlternative'),

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
