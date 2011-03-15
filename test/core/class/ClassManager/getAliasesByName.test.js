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
// {{{ getAliasesByName

module.exports = {

    // {{{ test getAliasesByName#pattern1

    'test getAliasesByName#pattern1': function() {

        T_ClassManager.create('ClassManagerTest.getAliasesByName.cls1', {
            alias: 'ClassManagerTest.getAliasesByName.cls2'
        });

        var ret = T_ClassManager.getAliasesByName('ClassManagerTest.getAliasesByName.cls1');
        ret.length.should.equal(1);
        T_Array.contains(ret, 'ClassManagerTest.getAliasesByName.cls2').should.equal(true);

        T_ClassManager.setAlias('ClassManagerTest.getAliasesByName.cls1', 'ClassManagerTest.getAliasesByName.cls3');

        var ret = T_ClassManager.getAliasesByName('ClassManagerTest.getAliasesByName.cls1');
        ret.length.should.equal(2);
        T_Array.contains(ret, 'ClassManagerTest.getAliasesByName.cls3').should.equal(true);

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
