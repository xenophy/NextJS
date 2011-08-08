/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Response

NX.define('NX.smtp.Response', {

    // {{{ statics

    statics: {

        // {{{ watch

        watch: require('./statics/watch')

        // }}}

    },

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ watch

    watch: require('./watch'),

    // }}}
    // {{{ end

    end: require('./end'),

    // }}}
    // {{{ close

    close: require('./close'),

    // }}}
    // {{{ timeout

    timeout: require('./timeout'),

    // }}}
    // {{{ error

    error: require('./error')

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
