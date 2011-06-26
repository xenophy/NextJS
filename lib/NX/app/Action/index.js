/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Action

NX.define('NX.app.Action', {

    constructor: function(config) {

        config = config || {};

        NX.apply(this, config);

    },

    end: function() {

        this.controller.endAction();

    }

//    execute: NX.emptyFn

}, function() {

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
