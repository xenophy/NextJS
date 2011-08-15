/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.dispatch

module.exports = function(action) {

    var req, res, dispatch;

    req = {
        config: {
            controllerType: 'CLI'
        }
    };

    res = {};

    dispatch = NX.app.Dispatcher.dispatch();

    // ディスパッチ
    dispatch(req, res);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
