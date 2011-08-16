/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.dispatch

module.exports = function(config) {

    var req, res, dispatch, execPath;

    NX.Loader.require('NX.app.Dispatcher');

    config = config || {};

    execPath = process.NXEnv.dirname;

    NX.apply(config, {
        controllerType: 'CLI'
    });

    NX.applyIf(config, {
        paths: {}
    });

    if(config.execPath) {
        execPath = config.execPath;
        if(execPath.substr(0,1) !== '/') {
            execPath = NX.Fs.realpathSync('./') + '/' + execPath;
        }
    }

    NX.apply(config.paths, {
        exec: execPath,
        configs: execPath + '/configs',
        modules: execPath + '/modules',
        controllers: execPath + '/controllers',
        actions: execPath + '/actions'
    });

    req = {
        config: config
    };

    res = {};

    var basename = NX.Path.basename(config.action);
    var dirname = NX.Path.dirname(config.action);

    if(dirname === '.') {
        config.actionPath = '';
    } else {
        config.actionPath = dirname;
    }

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
