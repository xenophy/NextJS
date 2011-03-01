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
// {{{ instantiateByAlias

module.exports = {

    // {{{ test instantiateByAlias#pattern1

    'test instantiateByAlias#pattern1': function() {

        T_ClassManager.create('ClassManagerTest.instantiateByAlias.cls1', {
            test: function() {
                return 'test';
            }
        });

        T_ClassManager.setAlias(
            'ClassManagerTest.instantiateByAlias.cls1',
            'ClassManagerTest.instantiateByAlias.cls2'
        );

        var cls2 = T_ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls2');
        cls2.test().should.equal('test');

    },

    // }}}
    // {{{ test instantiateByAlias#pattern2

    'test instantiateByAlias#pattern2': function() {

        T_ClassManager.setDefaultPostprocessors([]);

        T_ClassManager.create('ClassManagerTest.instantiateByAlias.cls3', {
            constructor: function(config) {
                T_NX.apply(this, config);
                return this;
            },
            test: function() {
                return this.foo;
            }
        });

        T_ClassManager.setAlias('ClassManagerTest.instantiateByAlias.cls3', 'ClassManagerTest.instantiateByAlias.cls4');

        var cls4 = T_ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls4', {foo: 'bar'});
        cls4.test().should.equal('bar');

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
