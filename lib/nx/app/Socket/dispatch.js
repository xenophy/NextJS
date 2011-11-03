/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Socket.dispatch

module.exports = function(config) {

    var req, res, dispatch, execPath;

    NX.Loader.require('NX.app.Dispatcher');

    config = config || {};

    execPath = process.NXEnv.dirname;

    req = config.cinfo;
    req._url = req.url;
    req.url = config.name;

    config.paths.actions = config.paths.sockets;

    req.config = {
        paths: config.paths,
        controllerType: 'Socket',
        action: config.name
    };
    req.data = config.data;

    res = {
        actionAllowExt: config.allowExt
    };

    dispatch = NX.app.Dispatcher.dispatch();

    // ディスパッチ
    dispatch(req, res, function() {
    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
