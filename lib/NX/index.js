/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ NX

/**
 * @class NX
 */
if(typeof NX === 'undefined') {
    global.NX = require('./core');
}

// }}}
// {{{ NX.global

/**
 * @prop global
 */
NX.global = global;

// }}}
// {{{ NX.process

/**
 * @prop process
 */
NX.process = process.NXEnv = {
    name: process.env.NODE_ENV || 'development',
    port: 3000,
    testport: 15000,
    testdb: 'nextjsunittest',
    host: null,
    dirname: path.dirname(module.parent.filename),
    basename: path.basename(module.parent.filename),
    libdir: __dirname
};

// }}}
// {{{ require subclasses

NX.Array = require('./Array');
NX.String = require('./String');
NX.Function = require('./Function');
NX.Base = require('./Base');
NX.Class = require('./Class');
NX.ClassManager = require('./ClassManager');
NX.Version = require('./Version');

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
