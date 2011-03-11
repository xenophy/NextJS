/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

// }}}
// {{{ NX.controller.ControllerManager

/**
 * @class NX.controller.ControllerManager
 */
NX.define('NX.controller.ControllerManager', {

    // {{{ extend

    /**
     * @prop extend
     */
    extend: 'NX.AbstractManager',

    // }}}
    // {{{ singleton

    /**
     * @prop singleton
     */
    singleton: true,

    // }}}

}, function() {

    // {{{ regController

    /**
     * @method regController
     */
    NX.regController = function() {
        return NX.controller.ControllerManager.register.apply(NX.controller.ControllerManager, arguments);
    };

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
