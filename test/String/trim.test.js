/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_String = require('NX/String');

// }}}
// {{{ trim

module.exports = {

    // {{{ test trim#pattern1

    'test trim#pattern1': function() {
        ''.trim().should.equal('');
    },

    // }}}
    // {{{ test trim#pattern2

    'test trim#pattern2': function() {
        'foo'.trim().should.equal('foo');
    },

    // }}}
    // {{{ test trim#pattern3

    'test trim#pattern3': function() {
        '    '.trim().should.equal('');
    },

    // }}}
    // {{{ test trim#pattern4

    'test trim#pattern4': function() {
        '  bar  '.trim().should.equal('bar');
    },

    // }}}
    // {{{ test trim#pattern5

    'test trim#pattern5': function() {
        'foo   '.trim().should.equal('foo');
    },

    // }}}
    // {{{ test trim#pattern6

    'test trim#pattern6': function() {
        '   bar'.trim().should.equal('bar');
    },

    // }}}
    // {{{ test trim#pattern7

    'test trim#pattern7': function() {
        'foo bar'.trim().should.equal('foo bar');
    },

    // }}}
    // {{{ test trim#pattern8

    'test trim#pattern8': function() {
        '  foo bar baz   '.trim().should.equal('foo bar baz');
    },

    // }}}
    // {{{ test trim#pattern9

    'test trim#pattern9': function() {
        '\tfoo'.trim().should.equal('foo');
    },

    // }}}
    // {{{ test trim#pattern10

    'test trim#pattern10': function() {
        '\ttext    '.trim().should.equal('text');
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
