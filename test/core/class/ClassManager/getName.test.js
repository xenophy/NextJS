/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_NX = require('NX/core');
var T_Array = require('NX/core/lang/Array');
var T_ClassManager = require('NX/core/class/ClassManager');

// }}}
// {{{ getName

module.exports = {

    // {{{ test getName#pattern1

    'test getName#pattern1': function() {

        T_ClassManager.setDefaultPostprocessors([]);

        T_ClassManager.create('ClassManagerTest.getName.cls1', {
        });

        T_ClassManager.getName(ClassManagerTest.getName.cls1).should.equal('ClassManagerTest.getName.cls1');
    },

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
