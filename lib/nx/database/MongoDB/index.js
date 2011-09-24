/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MongoDB

NX.define('NX.database.MongoDB', {

    // {{{ extend

    extend: 'NX.database.Database',

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ connect

    connect: require('./connect'),

    // }}}
    // {{{ find

    find: require('./find'),

    // }}}
    // {{{ insert

    insert: require('./insert'),

    // }}}
    // {{{ update

    update: require('./update'),

    // }}}
    // {{{ findAndModify

    findAndModify: require('./findAndModify'),

    // }}}
    // {{{ save

    save: require('./save'),

    // }}}
    // {{{ remove

    remove: require('./remove'),

    // }}}
    // {{{ createDatabase

    createDatabase: require('./createDatabase'),

    // }}}
    // {{{ dropDatabase

    dropDatabase: require('./dropDatabase'),

    // }}}
    // {{{ createCollection

    createCollection: require('./createCollection'),

    // }}}
    // {{{ dropCollection

    dropCollection: require('./dropCollection'),

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
