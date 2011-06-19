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
// {{{ NX.Object Class Tests

module.exports = {

    // {{{ test merge#pattern1

    'test merge#pattern1': function() {

        var o = {foo: 'bar'};
        NX.Object.merge(o, 'hoge', 123);

        o.hoge.should.equal(123);
    },

    // }}}
    // {{{ test merge#pattern2

    'test merge#pattern2': function() {

        var o = {foo: 'bar', hoge: {baz: 888}};
        NX.Object.merge(o, 'hoge', {piyo: 999});

        o.hoge.baz.should.equal(888);
        o.hoge.piyo.should.equal(999);
    },

    // }}}
    // {{{ test merge#pattern3

    'test merge#pattern3': function() {

        var o = {foo: 'bar', hoge: {baz: 888}};

        NX.Object.merge(o, 'hoge', {piyo: function() {
            return 'hoge func.';
        }});

        o.hoge.piyo().should.equal('hoge func.');
    },

    // }}}
    // {{{ test merge#pattern4

    'test merge#pattern4': function() {

        var o = {foo: 'bar', hoge: {baz: 888}};

        NX.Object.merge(o, 'hoge', {piyo: false});

        o.hoge.piyo.should.equal(false);
    },

    // }}}
    // {{{ test merge#pattern5

    'test merge#pattern5': function() {

        var o = {foo: 'bar'};
        var a = {hoge: 123, piyo: 999};

        NX.Object.merge(o, a);

        o.hoge.should.equal(123);
        o.piyo.should.equal(999);
    },

    // }}}
    // {{{ test merge#pattern6

    'test merge#pattern6': function() {

        var o = {foo: 'bar'};
        var a = {hoge: 123, piyo: 999};
        var b = {huge: 456, bar: 888, test: function(){
            return 'test func';
        }};

        NX.Object.merge(o, a, b);

        o.foo.should.equal('bar');
        o.hoge.should.equal(123);
        o.piyo.should.equal(999);
        o.huge.should.equal(456);
        o.bar.should.equal(888);
        o.test().should.equal('test func');
    },

    // }}}
    // {{{ test merge#pattern7

    'test merge#pattern7': function() {

        var o = {foo: 'bar', hoge: new Date()};
        NX.Object.merge(o, 'hoge', {piyo: 999});

        o.hoge.piyo.should.equal(999);

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
