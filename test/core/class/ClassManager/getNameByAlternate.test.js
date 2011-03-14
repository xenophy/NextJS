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
// {{{ getNameByAlternate

module.exports = {

    // {{{ test getNameByAlternate#pattern1

    'test getNameByAlternate#pattern1': function() {

        T_ClassManager.create('ClassManagerTest.getNameByAlternate.cls1', {
            alternateClassName: 'ClassManagerTest.getNameByAlternate.cls2'
        });

        var ret = T_ClassManager.getNameByAlternate('ClassManagerTest.getNameByAlternate.cls2');
        ret.should.equal('ClassManagerTest.getNameByAlternate.cls1');

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
