/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL

NX.define('NX.database.MySQL', {

    // {{{ extend

    extend: 'NX.database.Database',

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ connect

    connect: require('./connect'),

    // }}}
    // {{{ query

    query: require('./query')

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
