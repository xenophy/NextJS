/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Dispatcher.dispatch

module.exports = function() {

    return function(req, res, next) {

        var config = req.config;

        // コントローラー生成
        NX.create('NX.' + config.controllerType + 'Controller', config).init(req, res, function() {
            next();
        });

    }

};


// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
