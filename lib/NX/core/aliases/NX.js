/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../index');
var T_ClassManager = require('../class/ClassManager');
var alias = require('../lang/Function').alias;

// }}}
// {{{ aliases

module.exports = {

    // {{{ create

    /**
     * @method create
     */
    create: alias(T_ClassManager, 'instantiate'),

    // }}}
    // {{{ namespace

    /**
     * @method namespace
     */
    namespace: alias(T_ClassManager, 'createNamespaces'),

    // }}}
    // {{{ ns

    /**
     * @method ns
     */
    ns: alias(T_NX, 'namespace')

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
