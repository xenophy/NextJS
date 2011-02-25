/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ getActionClass

var getActionClass = module.exports = function(ctrl, name) {

    var me = ctrl;

    var file = path.normalize([
        me.actionsPath,
        name + '.action.js'
    ].join('/'));

    // キャッシュクリア
    NX.moduleCacheClear(file);

    return require(file);

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
