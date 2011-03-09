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
var T_ClassManager = require('NX/core/class/ClassManager');

// }}}
// {{{ get

module.exports = {

    // {{{ test get#pattern1

    'test get#pattern1': function() {

        var f1 = function() {
            return 'f1';
        };

        var f2 = function() {
            return 'f2';
        };

        T_ClassManager.set('My.cls1', f1);
        T_ClassManager.set('My.app.cls1', f2);

        assert.equal(T_ClassManager.get('My.cls1'), f1);
        assert.equal(T_ClassManager.get('My.app.cls1'), f2);
    },

    // }}}
    // {{{ test get#pattern2

    'test get#pattern2': function() {

        T_NX.ns('ClassManagerTest', 'ClassManagerTest.get', 'ClassManagerTest.get.app');

        ClassManagerTest.get.cls1 = function() {
            return 'f1';
        };

        ClassManagerTest.get.app.cls1 = function() {
            return 'f2';
        };

        assert.equal(T_ClassManager.get('ClassManagerTest.get.cls1'), ClassManagerTest.get.cls1);
        assert.equal(T_ClassManager.get('ClassManagerTest.get.app.cls1'), ClassManagerTest.get.app.cls1);
    },

    // }}}
    // {{{ test get#pattern3

    'test get#pattern3': function() {

        T_NX.ns('ClassManagerTest', 'ClassManagerTest.get', 'ClassManagerTest.get.app');

        ClassManagerTest.get.cls1 = function() {
            return 'f1';
        };

        assert.equal(T_ClassManager.get('ClassManagerTest.get.cls2'), null);
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
