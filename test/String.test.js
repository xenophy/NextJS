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

        var cls = 'my-class', text = 'Some text';
        var s = NX.String.format('<div class="{0}">{1}</div>', cls, text);
        s.should.equal('<div class="my-class">Some text</div>');
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
    },

    // }}}
    // {{{ test ellipsis#pattern1

    'test ellipsis#pattern1': function() {

        var s = NX.String.ellipsis('abcdefghijk', 6);
        s.should.equal('abc...');

    },

    // }}}
    // {{{ test ellipsis#pattern2

    'test ellipsis#pattern2': function() {

        var s = NX.String.ellipsis('This is a pen.', 10, true);
        s.should.equal('This is...');

    },

    // }}}
    // {{{ test ellipsis#pattern3

    'test ellipsis#pattern3': function() {

        var s = NX.String.ellipsis('a', 1);
        s.should.equal('a');

    },

    // }}}
    // {{{ test htmlDecode#pattern1

    'test htmlDecode#pattern1': function() {

        var s = NX.String.htmlDecode('a&amp;b&gt;c&lt;d');
        s.should.equal('a&b>c<d');

    },

    // }}}
    // {{{ test htmlDecode#pattern2

    'test htmlDecode#pattern2': function() {

        var s = NX.String.htmlDecode('&#65;&#66;&#67;');
        s.should.equal('ABC');

    },

    // }}}
    // {{{ test htmlEncode#pattern1

    'test htmlEncode#pattern1': function() {

        var s = NX.String.htmlEncode('a&b>c<d');
        s.should.equal('a&amp;b&gt;c&lt;d');

    },

    // }}}
    // {{{ test toggle#pattern1

    'test toggle#pattern1': function() {

        var sort = 'ASC';
        sort = NX.String.toggle(sort, 'ASC', 'DESC');
        sort.should.equal('DESC');
        sort = NX.String.toggle(sort, 'ASC', 'DESC');
        sort.should.equal('ASC');

    },

    // }}}
    // {{{ test urlAppend#pattern1

    'test urlAppend#pattern1': function() {

        var url = 'http://www.xenophy.com/';
        var s = NX.String.urlAppend(url, 'hoge');
        s.should.equal('http://www.xenophy.com/?hoge');

    },

    // }}}
    // {{{ test urlAppend#pattern2

    'test urlAppend#pattern2': function() {

        var url = 'http://www.xenophy.com/';
        var s = NX.String.urlAppend(url, 'hoge');
        s.should.equal('http://www.xenophy.com/?hoge');

    },

    // }}}
    // {{{ test urlAppend#pattern3

    'test urlAppend#pattern3': function() {

        var url = 'http://www.xenophy.com/?foo=bar';
        var s = NX.String.urlAppend(url, 'hoge');
        s.should.equal('http://www.xenophy.com/?foo=bar&hoge');

    },

    // }}}
    // {{{ test urlAppend#pattern4

    'test urlAppend#pattern4': function() {

        var url = 'http://www.xenophy.com/';
        var s = NX.String.urlAppend(url, '');
        s.should.equal('http://www.xenophy.com/');

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
