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
// {{{ instantiate

module.exports = {

    // {{{ test instantiate#pattern1

    'test instantiate#pattern1': function() {

        T_ClassManager.create('ClassManagerTest.instantiate.cls1', {
            alias: 'ClassManagerTest.instantiate.cls2',
            test: function() {
                return 'pattern1';
            }
        });

        var cls = T_ClassManager.instantiate('ClassManagerTest.instantiate.cls2');
        cls.test().should.equal('pattern1');

    },

    // }}}
    // {{{ test instantiateByAlias#pattern2

    'test instantiateByAlias#pattern2': function() {

        T_ClassManager.create('ClassManagerTest.instantiate.cls3', {
            alternateClassName: 'ClassManagerTest.instantiate.cls4',
            test: function() {
                return 'pattern2';
            }
        });

        var cls = T_ClassManager.instantiate('ClassManagerTest.instantiate.cls4');
        cls.test().should.equal('pattern2');

    },

    // }}}
    // {{{ test instantiateByAlias#pattern3

    'test instantiateByAlias#pattern3': function() {

        T_ClassManager.create('ClassManagerTest.instantiate.cls5', {
            test: function() {
                return 'pattern3';
            }
        });

        var cls = T_ClassManager.instantiate('ClassManagerTest.instantiate.cls5');
        cls.test().should.equal('pattern3');

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
