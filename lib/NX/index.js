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
// {{{ core subclass require

NX.apply(NX, {
    Object: require('./Object'),
    Array: require('./Array'),
    String: require('./String'),
    Function: require('./Function'),
    Base: require('./Base'),
    Class: require('./Class'),
    ClassManager: require('./ClassManager'),
});

// }}}
// {{{ Class System based class require

require('./Version');
require('./server/Server');
require('./server/ServerManager');
require('./controller/Controller');
require('./controller/ControllerManager');
require('./module/Module');
require('./module/ModuleManager');
require('./view/AbstractView');
require('./view/ConsoleView');
require('./view/WebView');
require('./util/Observable');
require('./util/HashMap');

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
