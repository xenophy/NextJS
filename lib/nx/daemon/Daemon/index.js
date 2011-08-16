/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.daemon.Daemon

NX.define('NX.daemon.Daemon', {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ extend

//    extend: require('../../../../build/default/nxd'),

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ daemonize

    daemonize: require('./daemonize'),

    // }}}
    // {{{ kill

    kill: require('./kill')

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
