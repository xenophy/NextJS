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
    Object: require('./core/lang/Object'),
    Array: require('./core/lang/Array'),
    String: require('./core/lang/String'),
    Function: require('./core/lang/Function'),
    Base: require('./core/class/Base'),
    Class: require('./core/class/Class'),
    ClassManager: require('./core/class/ClassManager'),
});

// }}}
// {{{ Class System based class require

// TODO:Loaderで読み込まなくてもいいようにする。

require('./util/HashMap');
require('./util/Observable');
require('./util/Router');
require('./Version');
require('./Locale');
require('./Router');
require('./AbstractManager');
require('./server/ServerManager');
require('./server/Server');
require('./server/Daemon');
require('./controller/Controller');
require('./controller/ControllerManager');
require('./module/Module');
require('./module/ModuleManager');
require('./view/AbstractView');
require('./view/ConsoleView');
require('./view/WebView');

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
