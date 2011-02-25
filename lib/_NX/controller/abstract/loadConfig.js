/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ loadConfig

var loadConfig = module.exports = function(ctrl, type) {

    var me = ctrl;

    type = type.toLowerCase();

    try {

        me.config[type] = require(path.normalize(me.configPath + '/' + NX.capitalize(type) + 'Config.js'));

    } catch(e) {

        me.config[type] = require(path.normalize([
            '../../config/',
            type,
            '.js'
        ].join('')));

    };

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
