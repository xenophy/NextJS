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
// {{{ getNamesByExpression

module.exports = {

    // {{{ test getNamesByExpressoin#pattern1

    'test getNamesByExpression#pattern1': function() {

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.cls1');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.*');
        ret.length.should.equal(3);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');
        ret[1].should.equal('ClassManagerTest.getNamesByExpression.cls2');
        ret[2].should.equal('ClassManagerTest.getNamesByExpression.cls3');

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.*');
        ret.length.should.equal(3);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');
        ret[1].should.equal('ClassManagerTest.getNamesByExpression.cls2');
        ret[2].should.equal('ClassManagerTest.getNamesByExpression.cls3');


        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls1');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.testalt.getNamesByExpression.cls1');

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls2');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.testalt.getNamesByExpression.cls2');

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls3');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.testalt.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpressoin#pattern2

    'test getNamesByExpression#pattern2': function() {

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.*');
        ret.length.should.equal(3);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');
        ret[1].should.equal('ClassManagerTest.getNamesByExpression.cls2');
        ret[2].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpressoin#pattern3

    'test getNamesByExpression#pattern3': function() {

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.*');
        ret.length.should.equal(3);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');
        ret[1].should.equal('ClassManagerTest.getNamesByExpression.cls2');
        ret[2].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpressoin#pattern4

    'test getNamesByExpression#pattern4': function() {

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        T_ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls1');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.testalt.getNamesByExpression.cls1');

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls2');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.testalt.getNamesByExpression.cls2');

        var ret = T_ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls3');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.testalt.getNamesByExpression.cls3');

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
