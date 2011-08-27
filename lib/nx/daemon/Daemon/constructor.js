/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.daemon.Daemon.constructor

module.exports = function(config) {

    config = config || {};

    var binding;

    if(NX.Path.existsSync(process.NXEnv.libdir + 'node_modules/nx-daemon/build/default/nxd')) {
        binding = require(process.NXEnv.libdir + 'node_modules/nx-daemon/build/default/nxd');
    } else {
        binding = require('nx-daemon/build/default/nxd');
    }

    NX.apply(this, binding);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
