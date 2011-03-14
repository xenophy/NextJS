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
// {{{ getByAlias

module.exports = {

    // {{{ test getByAlias#pattern1

    'test getByAlias#pattern1': function() {

        T_ClassManager.create('ClassManagerTest.getByAlias.cls1', {
            alias: 'ClassManagerTest.getByAlias.cls2'
        });

        var ret = T_ClassManager.getByAlias('ClassManagerTest.getByAlias.cls2');
        assert.equal(T_ClassManager.get('ClassManagerTest.getByAlias.cls1'), ret);

    },

    // }}}
    // {{{ test getByAlias#pattern2

    'test getByAlias#pattern2': function() {

        var f1 = function() {
            return 'f1';
        };

        T_ClassManager.create('ClassManagerTest.getByAlias.cls3', {
            alias: 'ClassManagerTest.getByAlias.cls4'
        });

        T_ClassManager.set('ClassManagerTest.getByAlias.cls3.test', f1);

        var ret = T_ClassManager.getByAlias('ClassManagerTest.getByAlias.cls4');
        assert.equal(T_ClassManager.get('ClassManagerTest.getByAlias.cls3.test'), f1);

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
