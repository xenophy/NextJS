/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.AbstractManager

/**
 * @class NX.AbstractManager
 */
NX.define('NX.AbstractManager', {

    // {{{ typeName

    typeName: 'type',

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: require('./constructor'),

    // }}}
    // {{{ get

    /**
     * @method get
     */
    get : require('./get'),

    // }}}
    // {{{ register

    /**
     * @method register
     */
    register: require('./register'),

    // }}}
    // {{{ unregister

    /**
     * @method unregister
     */
    unregister: require('./unregister'),

    // }}}
    // {{{ registerType

    /**
     * @method registerType
     */
    registerType : require('./registerType'),

    // }}}
    // {{{ isRegistered

    /**
     * @method isRegistered
     */
    isRegistered : require('./isRegistered'),

    // }}}
    // {{{ create

    /**
     * @method create
     */
    create: require('./create'),

    // }}}
    // {{{ onAvailable

    /**
     * @method onAvailable
     * 廃止予定
     */
    onAvailable : require('./onAvailable'),

    // }}}
    // {{{ each

    /**
     * @method each
     */
    each: require('./each'),

    // }}}
    // {{{ getCount

    /**
     * @method getCount
     */
    getCount: require('./getCount'),

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


