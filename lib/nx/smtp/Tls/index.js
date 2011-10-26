/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Tls

NX.define('NX.smtp.Tls', {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ secure

    secure: require('./secure'),

    // }}}
    // {{{ pipe

    pipe: require('./pipe')

    // }}}

}, function() {

    NX.apply(NX.smtp.Tls, NX.Tls);

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
