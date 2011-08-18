/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.log.Abstract

NX.define('NX.server.log.Abstract', {

    // {{{ statics

    statics: {

        // {{{ DEBUG

        DEBUG: 0,

        // }}}
        // {{{ INFO

        INFO: 100,

        // }}}
        // {{{ NOTICE

        NOTICE: 200,

        // }}}
        // {{{ WARN

        WARN: 300,

        // }}}
        // {{{ ERROR

        ERROR: 400,

        // }}}
        // {{{ CIRT

        CIRT: 500,

        // }}}
        // {{{ ALERT

        ALERT: 600,

        // }}}
        // {{{ EMERG

        EMERG: 700,

        // }}}
        // {{{ level

        level: 300,

        // }}}

    },

    // }}}
    // {{{ active

    active: require('./active'),

    // }}}
    // {{{ log

    log: require('./log'),

    // }}}
    // {{{ bind

    bind: require('./bind')

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
