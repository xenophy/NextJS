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
            test: function() {
                return 'pattern1';
            }
        });

        var cls = T_ClassManager.instantiate('ClassManagerTest.instantiate.cls1');
        cls.test().should.equal('pattern1');

    },

    // }}}
    // {{{ test instantiate#pattern2

    'test instantiate#pattern2': function() {

        T_ClassManager.create('ClassManagerTest.instantiate.cls2', {
            alias: 'ClassManagerTest.instantiate.cls3',
            test: function() {
                return 'pattern2';
            }
        });

        var cls = T_ClassManager.instantiate('ClassManagerTest.instantiate.cls3');
        cls.test().should.equal('pattern2');

    },

    // }}}
    // {{{ test instantiateByAlias#pattern3

    'test instantiateByAlias#pattern3': function() {

        T_ClassManager.create('ClassManagerTest.instantiate.cls4', {
            alternateClassName: 'ClassManagerTest.instantiate.cls5',
            test: function() {
                return 'pattern3';
            }
        });

        var cls = T_ClassManager.instantiate('ClassManagerTest.instantiate.cls5');
        cls.test().should.equal('pattern3');

    },

    // }}}
    // {{{ test instantiate#pattern4

    'test instantiate#pattern4': function() {

        try {
            var cls = T_ClassManager.instantiate({});
        } catch(e) {
            e.message.should.equal("[NX.create] Invalid class name or alias: '[object Object]', must be a valid string");
        }

    },

    // }}}
    // {{{ test instantiate#pattern5

    'test instantiate#pattern5': function() {

        try {
            var cls = T_ClassManager.instantiate('ClassManagerTest.instantiate.cls99');
        } catch(e) {
            e.message.should.equal("[NX.ClassManager] Cannot create an instance of unrecognized class name / alias: ClassManagerTest.instantiate.cls99");
        }

    },

    // }}}
    // {{{ test instantiate#pattern6

    'test instantiate#pattern6': function() {

        T_ClassManager.create('ClassManagerTest.instantiate.cls7', {
            singleton: true,
            test: function() {
                return 'pattern3';
            }
        });

        try {
            var cls = T_ClassManager.instantiate('ClassManagerTest.instantiate.cls7');
        } catch(e) {
            e.message.should.equal("[NX.create] 'ClassManagerTest.instantiate.cls7' is a singleton and cannot be instantiated");
        }

    }

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
