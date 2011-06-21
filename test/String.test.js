/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('should');
assert = require('assert');

// }}}
// {{{ NX.String Class Tests

module.exports = {

    // {{{ test capitalize#pattern1

    'test capitalize#pattern1': function() {
        NX.String.capitalize('nextjs').should.equal('Nextjs');
    },

    // }}}
    // {{{ test capitalize#pattern2

    'test capitalize#pattern2': function() {
        NX.String.capitalize('NextJS').should.equal('NextJS');
    },

    // }}}
    // {{{ test escape#pattern1

    'test escape#pattern1': function() {
        NX.String.escape("'").should.equal("\\'");
    },

    // }}}
    // {{{ test escape#pattern2

    'test escape#pattern2': function() {
        NX.String.escape("\\").should.equal("\\\\");
    },

    // }}}
    // {{{ test escapeRegex#standard

    'test escapeRegex#standard': function() {
        assert.equal('\\-', NX.String.escapeRegex('-'), 'Test with single char');
        assert.equal('\\*\\.', NX.String.escapeRegex('*.'), 'Test with multiple characters next to each other');
        assert.equal('foo', NX.String.escapeRegex('foo'), 'Test with no escapeable chars');
        assert.equal('\\{baz\\}', NX.String.escapeRegex('{baz}'), 'Test with mixed set');
        assert.equal('\\-\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\/\\\\', NX.String.escapeRegex('-.*+?^${}()|[]/\\'), 'Test with every character');
        NX.String.escapeRegex("<a href='test'>Test</a>").should.equal("<a href=\'test\'>Test<\\/a>");
    },

    // }}}
    // {{{ test format#pattern1

    'test format#pattern1': function() {

        var str = 'There are %d monkeys in the %s';
        var ret = NX.String.format(str, 5, 'Japan');

        ret.should.equal('There are 5 monkeys in the Japan');
    },

    // }}}
    // {{{ test format#pattern2

    'test format#pattern2': function() {

        var str = 'The %2$s contains %1$d monkeys';
        var ret = NX.String.format(str, 5, 'Japan');

        ret.should.equal('The Japan contains 5 monkeys');
    },

    // }}}
    // {{{ test format#pattern3

    'test format#pattern3': function() {

        var n = 43951789;
        var u = -43951789;
        var c = 65; // ASCII Code 'A'

        NX.String.format("%%b = '%b'", n).should.equal("%b = '10100111101010011010101101'");
        NX.String.format("%%c = '%c'", c).should.equal("%c = 'A'");
        NX.String.format("%%d = '%d'", n).should.equal("%d = '43951789'");
        NX.String.format("%%e = '%e'", n).should.equal("%e = '4.395179e+7'");
        NX.String.format("%%u = '%u'", n).should.equal("%u = '43951789'");
        NX.String.format("%%u = '%u'", u).should.equal("%u = '4251015507'");
        NX.String.format("%%f = '%f'", n).should.equal("%f = '43951789.000000'");
        NX.String.format("%%o = '%o'", n).should.equal("%o = '247523255'");
        NX.String.format("%%s = '%s'", n).should.equal("%s = '43951789'");
        NX.String.format("%%x = '%x'", n).should.equal("%x = '29ea6ad'");
        NX.String.format("%%X = '%X'", n).should.equal("%X = '29EA6AD'");
        NX.String.format("%%+d = '%+d'", n).should.equal("%+d = '+43951789'");
        NX.String.format("%%+d = '%+d'", u).should.equal("%+d = '-43951789'");
        NX.String.format("%%+d = '% d'", n).should.equal("%+d = ' 43951789'");
        NX.String.format("%%z = '%z'", n).should.equal("%z = '%z'");
        NX.String.format("abcde", n).should.equal("abcde");

    },

    // }}}
    // {{{ test format#pattern4

    'test format#pattern4': function() {

        var s = 'monkey';
        var t = 'many monkeys';

        NX.String.format("[%s]", s).should.equal('[monkey]');
        NX.String.format("[%10s]", s).should.equal('[    monkey]');
        NX.String.format("[%-10s]", s).should.equal('[monkey    ]');
        NX.String.format("[%010s]", s).should.equal('[0000monkey]');
        NX.String.format("[%'#10s]", s).should.equal('[####monkey]');
        NX.String.format("[%10.10s]", t).should.equal('[many monke]');

    },

    // }}}
    // {{{ test format#pattern5

    'test format#pattern5': function() {

        NX.String.format("%04d-%02d-%02d", 1979, 5, 16).should.equal('1979-05-16');
        NX.String.format("%0!d-%02d-%02d", 1979, 5, 16).should.equal('%0!d-1979-05');
    },

    // }}}
    // {{{ test trim#pattern1

    'test trim#pattern1': function() {
        NX.String.trim('').should.equal('');
    },

    // }}}
    // {{{ test trim#pattern2

    'test trim#pattern2': function() {
        NX.String.trim('foo').should.equal('foo');
    },

    // }}}
    // {{{ test trim#pattern3

    'test trim#pattern3': function() {
        NX.String.trim('    ').should.equal('');
    },

    // }}}
    // {{{ test trim#pattern4

    'test trim#pattern4': function() {
        NX.String.trim('  bar  ').should.equal('bar');
    },

    // }}}
    // {{{ test trim#pattern5

    'test trim#pattern5': function() {
        NX.String.trim('foo   ').should.equal('foo');
    },

    // }}}
    // {{{ test trim#pattern6

    'test trim#pattern6': function() {
        NX.String.trim('   bar').should.equal('bar');
    },

    // }}}
    // {{{ test trim#pattern7

    'test trim#pattern7': function() {
        NX.String.trim('foo bar').should.equal('foo bar');
    },

    // }}}
    // {{{ test trim#pattern8

    'test trim#pattern8': function() {
        NX.String.trim('  foo bar baz   ').should.equal('foo bar baz');
    },

    // }}}
    // {{{ test trim#pattern9

    'test trim#pattern9': function() {
        NX.String.trim('\tfoo').should.equal('foo');
    },

    // }}}
    // {{{ test trim#pattern10

    'test trim#pattern10': function() {
        NX.String.trim('\ttext    ').should.equal('text');
    },

    // }}}
    // {{{ test trim#pattern11

    'test trim#pattern11': function() {
        NX.String.trim('text　').should.equal('text');
    },

    // }}}
    // {{{ test trim#pattern12

    'test trim#pattern12': function() {
        NX.String.trim('　text ').should.equal('text');
    },

    // }}}
    // {{{ test trim#pattern13

    'test trim#pattern13': function() {
        NX.String.trim('　text\t').should.equal('text');
    }

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
