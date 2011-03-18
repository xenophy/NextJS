/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

require('NX/core/class/ClassManager');
var T_Function = require('NX/core/lang/Function');

// }}}
// {{{ alias

module.exports = {

    // {{{ test alias#pattern1

    'test alias#pattern1': function() {

        var testObj1 = {
            testFunc1 : function(){
                return 'testFunc1';
            }
        }
        var testObj2= {
            aliasFunc1 : T_Function.alias(testObj1, 'testFunc1')
        }

        testObj2.aliasFunc1().should.equal('testFunc1');
        testObj1.testFunc1().should.equal(testObj2.aliasFunc1());

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
