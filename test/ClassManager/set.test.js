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
var T_ClassManager = require('NX/ClassManager');

// }}}
// {{{ set

module.exports = {

    // {{{ test set#pattern1

    'test set#pattern1': function() {

        var f1 = function() {
            return 'f1';
        };

        var f2 = function() {
            return 'f2';
        };

        T_ClassManager.set('ClassManagerTest.set.cls1', f1);
        T_ClassManager.set('ClassManagerTest.set.app.cls1', f2);

        assert.equal(ClassManagerTest.set.cls1, f1);
        assert.equal(ClassManagerTest.set.app.cls1, f2);

        ClassManagerTest.set.cls1().should.equal(f1());
        ClassManagerTest.set.app.cls1().should.equal(f2());
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
