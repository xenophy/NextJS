/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Class = require('NX/core/class/Class');

// }}}
// {{{ registerPreprocessor

module.exports = {

    // {{{ test registerPreprocessor#pattern1

    'test registerPreprocessor#pattern1': function() {

        var foo = function() {
            return 'foo';
        };

        var bar = function() {
            return 'bar';
        };

        T_Class.registerPreprocessor({
            foo: foo,
            bar: bar
        });

        assert.equal(T_Class.getPreprocessor('foo'), foo);
        assert.equal(T_Class.getPreprocessor('bar'), bar);
        assert.equal(T_Class.getPreprocessor('foo')(), foo());
        assert.equal(T_Class.getPreprocessor('bar')(), bar());

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
