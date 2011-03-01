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
var T_Base = require('NX/core/class/Base');
var T_Array = require('NX/core/lang/Array');
var T_ClassManager = require('NX/core/class/ClassManager');

// }}}
// {{{ getClass

module.exports = {

    // {{{ test getClass#pattern1

    'test getClass#pattern1': function() {

        T_ClassManager.create('ClassManagerTest.getClass.cls1', {
            test: function() {
                return 'test';
            }
        });

        var cls = new ClassManagerTest.getClass.cls1();
        var ret = T_ClassManager.getClass(cls);

        ret.should.equal(ClassManagerTest.getClass.cls1);
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
