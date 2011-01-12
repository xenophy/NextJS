/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX Class Tests

module.exports = {

    // {{{ test isEmpty#undefined

    'test isEmpty#undefined': function(){

        // undefinedテスト
        assert.ok(NX.isEmpty(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isEmpty#null

    'test isEmpty#null': function(){

        // nullテスト
        assert.ok(NX.isEmpty(null), 'Test value null');

    },

    // }}}
    // {{{ test isEmpty#string

    'test isEmpty#string': function(){

        assert.ok(NX.isEmpty(''), 'Test value empty string');
        assert.ok(!NX.isEmpty('', true), 'Test value empty string with allowBlank');
        assert.ok(!NX.isEmpty('xFrameworkNX'), 'Test value string');

    },

    // }}}
    // {{{ test isEmpty#number

    'test isEmpty#number': function(){

        assert.ok(!NX.isEmpty(0), 'Test value zero');
        assert.ok(!NX.isEmpty(8124), 'Test value number');

    },

    // }}}
    // {{{ test isEmpty#boolean

    'test isEmpty#boolean': function(){

        assert.ok(!NX.isEmpty(true), 'Test value true');
        assert.ok(!NX.isEmpty(false), 'Test value false');

    },

    // }}}
    // {{{ test isEmpty#object

    'test isEmpty#object': function(){

        assert.ok(!NX.isEmpty({}), 'Test value object');

    },

    // }}}
    // {{{ test isEmpty#array

    'test isEmpty#array': function(){

        assert.ok(NX.isEmpty([]), 'Test value empty array');
        assert.ok(!NX.isEmpty([0, 1, 2]), 'Test value array');

    },

    // }}}
    // {{{ test isEmpty#function

    'test isEmpty#function': function(){

        assert.ok(!NX.isEmpty(function(){}), 'Test value function');

    },

    // }}}
    // {{{ test isEmpty#date

    'test isEmpty#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isEmpty(new Date()), 'Test type date');

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
