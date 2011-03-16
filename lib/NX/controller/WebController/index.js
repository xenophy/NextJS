/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.controller.WebController

/**
 * @class NX.controller.WebController
 */
NX.define('NX.controller.WebController', {

    // {{{ extend

    /**
     * @prop extend
     */
    extend: 'NX.Controller',

    // }}}
    // {{{ alternateClassName

    /**
     * @prop alternateClassName
     */
    alternateClassName: 'NX.WebController',

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: require('./constructor'),

    // }}}
    // {{{ init

    /**
     * @method init
     */
    init: require('./init')

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
