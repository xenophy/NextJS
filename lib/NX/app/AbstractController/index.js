/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.AbstractController

NX.define('NX.app.AbstractController', {

    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        NX.apply(this, config);

    },

    // }}}
    // {{{ execute

    execute: NX.emptyFn,

    // }}}
    // {{{ init

    init: NX.emptyFn

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
