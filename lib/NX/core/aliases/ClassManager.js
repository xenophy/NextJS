/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../index');
var T_ClassManager = require('../../ClassManager');
var alias = require('../../Function').alias;

// }}}
// {{{ aliases

module.exports = {

    // {{{ define

    /**
     * @method define
     */
    define: alias(T_ClassManager, 'create'),

    // }}}
    // {{{ getClassName

    getClassName: alias(T_ClassManager, 'getName'),

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
