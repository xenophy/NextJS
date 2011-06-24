/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

var path = require('path');

// {{{ NX Core

require('./core');
require('./misc');
require('./app');
require('./server');
require('./view');

// }}}
// {{{ Next JS Enviroment

process.NXEnv = {
    dirname: path.dirname(module.parent.filename),
    basename: path.basename(module.parent.filename),
    libdir: __dirname
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
