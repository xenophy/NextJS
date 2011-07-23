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
// {{{ NX.util.Format Class Tests

module.exports = {

    // {{{ 'test number#pattern1'

    'test number#pattern1': function(beforeExit) {

    },

    // }}}
    // {{{ 'test currency#pattern1'

    'test currency#pattern1': function(beforeExit) {

        var ret = NX.util.Format.currency(1000, "¥", -1);

        ret.should.equal('¥1,000');

        var ret = NX.util.Format.currency(1000, '', -1);

        ret.should.equal('$1,000');

        var ret = NX.util.Format.currency(-1000, '', -1);

        ret.should.equal('-$1,000');

        var ret = NX.util.Format.currency(1000, '', 5);

        ret.should.equal('$1,000.00000');

        var ret = NX.util.Format.currency(1000, "円", -1, true);

        ret.should.equal('1,000円');
    },

    // }}}
    // {{{ 'test date#pattern1'

    'test date#pattern1': function(beforeExit) {

        NX.util.Format.date().should.equal('');
        NX.util.Format.date('2006-01-01').should.equal('01/01/2006');

    },

    // }}}
    // {{{ 'test dateRender#pattern1'

    'test dateRender#pattern1': function(beforeExit) {

        var f = NX.util.Format.dateRenderer('Y-m-d');
        var dt = new Date('2006-01-01');
        f(dt).should.equal('2006-01-01');

    },

    // }}}
    // {{{ 'test defaultValue#pattern1'

    'test defaultValue#pattern1': function(beforeExit) {

        NX.util.Format.defaultValue(undefined, 500).should.equal(500);

    },

    // }}}
    // {{{ 'test escapeRegex#pattern1'

    'test escapeRegex#pattern1': function(beforeExit) {

        NX.util.Format.escapeRegex('*').should.equal('\\*');

    },

    // }}}
    // {{{ 'test fileSize#pattern1'

    'test fileSize#pattern1': function(beforeExit) {

        NX.util.Format.fileSize(500).should.equal('500 bytes');
        NX.util.Format.fileSize(5000).should.equal('4.9 KB');
        NX.util.Format.fileSize(5000000).should.equal('4.8 MB');

    },

    // }}}
    // {{{ 'test jpMoney#pattern1'

    'test jpMoney#pattern1': function(beforeExit) {

        var ret = NX.util.Format.jpMoney(5000).replace("Â", "");
        ret.should.equal("¥5,000");

    },

    // }}}
    // {{{ 'test lowercase#pattern1'

    'test lowercase#pattern1': function(beforeExit) {

        NX.util.Format.lowercase('NextJS').should.equal('nextjs');

    },

    // }}}
    // {{{ 'test math#pattern1'

    'test math#pattern1': function(beforeExit) {

        NX.util.Format.math(500, "* 10").should.equal(5000);

    },

    // }}}
    // {{{ 'test number#pattern1'

    'test number#pattern1': function(beforeExit) {

        NX.util.Format.number(500).should.equal(500);
        NX.util.Format.number('a', '0.00').should.equal('');
        NX.util.Format.number(500, '0.00').should.equal('500.00');
        NX.util.Format.number(500, '0.00/i').should.equal('500.00');
        NX.util.Format.number(500, '000/i').should.equal('500');
        NX.util.Format.number(-500, '000/i').should.equal('-500');

    },

    // }}}
    // {{{ 'test numberRender#pattern1'

    'test numberRender#pattern1': function(beforeExit) {

        var f = NX.util.Format.numberRenderer('0.00');
        f(500).should.equal('500.00');

    },

    // }}}
    // {{{ 'test parseBox#pattern1'

    'test parseBox#pattern1': function(beforeExit) {

        var ret = NX.util.Format.parseBox('10 10 10 10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = NX.util.Format.parseBox('10 10 10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = NX.util.Format.parseBox('10 10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = NX.util.Format.parseBox('10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = NX.util.Format.parseBox(10);
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);
    },

    // }}}
    // {{{ 'test plural#pattern1'

    'test plural#pattern1': function(beforeExit) {

        var ret = NX.util.Format.plural(1, "Comment");
        ret.should.equal('1 Comment');

        var ret = NX.util.Format.plural(2, "Comment");
        ret.should.equal('2 Comments');

        var ret = NX.util.Format.plural(2, "Comment", "Comment[S]");
        ret.should.equal('2 Comment[S]');


    },

    // }}}
    // {{{ 'test round#pattern1'

    'test round#pattern1': function(beforeExit) {

        NX.util.Format.round(50.14, 1).should.equal(50.1);


    },

    // }}}
    // {{{ 'test stripScripts#pattern1'

    'test stripScripts#pattern1': function(beforeExit) {

        var str = [
            '<html>',
            '<head>',
            '<script src="./test.js"></script>',
            '</head>',
            '</html>'
        ].join("");

        var ret = [
            '<html>',
            '<head>',
            '</head>',
            '</html>'
        ].join("");

        NX.util.Format.stripScripts(str).should.equal(ret);

    },

    // }}}
    // {{{ 'test stripTags#pattern1'

    'test stripTags#pattern1': function(beforeExit) {

        var str = [
            '<html>',
            '<head>',
            '<script src="./test.js"></script>',
            '</head>',
            '</html>'
        ].join("");

        var ret = '';

        NX.util.Format.stripTags(str).should.equal(ret);

    },

    // }}}
    // {{{ 'test substr#pattern1'

    'test substr#pattern1': function(beforeExit) {

        NX.util.Format.substr('abcdefg', 2, 10).should.equal("cdefg");

    },

    // }}}
    // {{{ 'test undef#pattern1'

    'test undef#pattern1': function(beforeExit) {

        NX.util.Format.undef(undefined).should.equal("");

    },

    // }}}
    // {{{ 'test uppercase#pattern1'

    'test uppercase#pattern1': function(beforeExit) {

        NX.util.Format.uppercase('NextJS').should.equal('NEXTJS');

    },

    // }}}
    // {{{ 'test usMoney#pattern1'

    'test usMoney#pattern1': function(beforeExit) {

        NX.util.Format.usMoney('5000').should.equal('$5,000.00');

    },

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
