/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.cluster.Worker

/**
 * @class NX.cluster.Worker
 */
NX.define('NX.cluster.Worker', {

    // {{{ mixins

    /**
     * @prop mixins
     */
    mixins: [
        'NX.util.Observable',
        'NX.cluster.Receiver'
    ],

    // }}}
    // {{{ alternateClassName

    /**
     * @prop alternateClassName
     */
    alternateClassName: 'NX.Worker',

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: require('./constructor'),

    // }}}
    // {{{ spawn

    /**
     * @method spawn
     */
    spawn: require('./spawn')

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
