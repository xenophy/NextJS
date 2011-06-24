/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Dispatcher

NX.define('NX.app.Dispatcher', {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ alternateClassName

    alternateClassName: 'NX.Dispatcher',

    // }}}
    // {{{ dispatch

    dispatch: function(config, callback) {

        var me = this, ret = {};

        config = config || {};
        callback = callback || NX.emptyFn;



        callback(ret);

    },

    // }}}

}, function() {

    NX.dispatch = NX.Function.alias(NX.Dispatcher, 'dispatch');

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
