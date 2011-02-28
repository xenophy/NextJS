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
// {{{ getPostprocessor

module.exports = {

    // {{{ test getPostprocessor#pattern1

    'test getPostprocessor#pattern1': function() {

        var foo = function() {
            return 'foo';
        };

        var bar = function() {
            return 'bar';
        };

        T_ClassManager.registerPostprocessor({
            foo: foo,
            bar: bar
        });

        assert.equal(T_ClassManager.getPostprocessor('foo'), foo);
        assert.equal(T_ClassManager.getPostprocessor('bar'), bar);
        assert.equal(T_ClassManager.getPostprocessor('foo')(), foo());
        assert.equal(T_ClassManager.getPostprocessor('bar')(), bar());
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
