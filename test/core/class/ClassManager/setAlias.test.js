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
// {{{ setAlias

module.exports = {

    // {{{ test setAlias#pattern1

    'test setAlias#pattern1': function() {

        var f1 = function() {
            return 'f1';
        };

        T_ClassManager.set('ClassManagerTest.setAlias.cls1', f1);
        T_ClassManager.setAlias('ClassManagerTest.setAlias.cls1', 'ClassManagerTest.setAlias.cls2');

        var ret = T_ClassManager.getNameByAlias('ClassManagerTest.setAlias.cls2');
        ret.should.equal('ClassManagerTest.setAlias.cls1');

        var ret = T_ClassManager.getAliasesByName('ClassManagerTest.setAlias.cls1');

        T_Array.contains(ret, 'ClassManagerTest.setAlias.cls2').should.equal(true);

        var cls = T_ClassManager.getByAlias('ClassManagerTest.setAlias.cls2');
        cls().should.equal('f1');

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
