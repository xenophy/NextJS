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

    },

    // }}}
    // {{{ test each#pattern1

    'test each#pattern1': function() {

        NX.Object.each({foo: 'bar'}, function(key, v) {
            key.should.equal('foo');
            v.should.equal('bar');
        });
    },

    // }}}
    // {{{ test each#pattern2

    'test each#pattern2': function() {

        var ret = {};
        NX.Object.each({foo: 'bar', hoge: 123}, function(key, v) {
            ret[key] = v;
            return false;
        });

        ret['foo'].should.equal('bar');
    },

    // }}}
    // {{{ test getKeys#pattern1

    'test getKeys#pattern1': function() {

        var o = {
            foo: 'bar',
            hoge: 'piyo',
            fee: 'baz'
        };

        var ret = NX.Object.getKeys(o);

        ret[0].should.equal('foo');
        ret[1].should.equal('hoge');
        ret[2].should.equal('fee');
        ret.length.should.equal(3);
    },

    // }}}
    // {{{ test getSize#pattern1

    'test getSize#pattern1': function() {

        var o = {
            foo: 'bar',
            hoge: 'piyo',
            fee: 'baz'
        };

        var ret = NX.Object.getSize(o);

        ret.should.equal(3);
    },

    // }}}
    // {{{ test getValues#pattern1

    'test getValues#pattern1': function() {

        var o = {
            foo: 'bar',
            hoge: 'piyo',
            fee: 'baz'
        };

        var ret = NX.Object.getValues(o);

        ret[0].should.equal('bar');
        ret[1].should.equal('piyo');
        ret[2].should.equal('baz');
        ret.length.should.equal(3);
    },

    // }}}
    // {{{ test toQueryString#pattern1

    'test toQueryString#pattern1': function() {

        var ret = NX.Object.toQueryString({foo: 'bar'});
        ret.should.equal('foo=bar');
    },

    // }}}
    // {{{ test toQueryString#pattern2

    'test toQueryString#pattern2': function() {

        var ret = NX.Object.toQueryString({foo: 'bar', hoge: 123});
        ret.should.equal('foo=bar&hoge=123');
    },

    // }}}
    // {{{ test toQueryString#pattern3

    'test toQueryString#pattern3': function() {

        NX.Object.toQueryString({foo: 1, bar: 2}).should.equal("foo=1&bar=2");
        NX.Object.toQueryString({foo: null, bar: 2}).should.equal("foo=&bar=2");
        NX.Object.toQueryString({'some price': '$300'}).should.equal("some%20price=%24300");
        NX.Object.toQueryString({date: new Date(2011, 0, 1)}).should.equal("date=2011-01-01T00%3A00%3A00");
        NX.Object.toQueryString({colors: ['red', 'green', 'blue']}).should.equal("colors=red&colors=green&colors=blue");

    },

    // }}}
    // {{{ test fromQueryString#pattern1

    'test fromQueryString#pattern1': function() {

        var ret = NX.Object.fromQueryString("foo=1&bar=2");
        ret.foo.should.equal('1');
        ret.bar.should.equal('2');

        ret = NX.Object.fromQueryString("foo=&bar=2");
        ret.foo.should.equal('');
        ret.bar.should.equal('2');

        ret = NX.Object.fromQueryString("some%20price=%24300");
        ret['some price'].should.equal('$300');

        ret = NX.Object.fromQueryString("colors=red&colors=green&colors=blue");
        ret.colors[0].should.equal('red');
        ret.colors[1].should.equal('green');
        ret.colors[2].should.equal('blue');

    },

    // }}}
    // {{{ test fromQueryString#pattern2

    'test fromQueryString#pattern2': function() {

        var ret = NX.Object.fromQueryString("foo=1&bar=2", true);
        ret.foo.should.equal('1');
        ret.bar.should.equal('2');

        ret = NX.Object.fromQueryString("foo=&bar=2", true);
        ret.foo.should.equal('');
        ret.bar.should.equal('2');

        ret = NX.Object.fromQueryString("some%20price=%24300", true);
        ret['some price'].should.equal('$300');

        ret = NX.Object.fromQueryString("colors=red&colors=green&colors=blue", true);
        ret.colors.should.equal('blue');

        ret = NX.Object.fromQueryString("username=Jacky&dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
        ret.username.should.equal('Jacky');
        ret.dateOfBirth.day.should.equal('1');
        ret.dateOfBirth.month.should.equal('2');
        ret.dateOfBirth.year.should.equal('1911');
        ret.hobbies[0].should.equal('coding');
        ret.hobbies[1].should.equal('eating');
        ret.hobbies[2].should.equal('sleeping');
        ret.hobbies[3][0].should.equal('nested');
        ret.hobbies[3][1].should.equal('stuff');

        ret = NX.Object.fromQueryString("hobbies[0]=coding&hobbies[]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
        ret.hobbies[0].should.equal('coding');
        ret.hobbies[1].should.equal('eating');
        ret.hobbies[2].should.equal('sleeping');
        ret.hobbies[3][0].should.equal('nested');
        ret.hobbies[3][1].should.equal('stuff');


        try{
            ret = NX.Object.fromQueryString("=&bar=2", true);
        } catch(e) {

            e.sourceClass.should.equal('NX.Object');
            e.sourceMethod.should.equal('fromQueryString');
            e.queryString.should.equal('=&bar=2');
            e.recursive.should.equal(true);
            e.msg.should.equal('Malformed query string given, failed parsing name from "="');
            e.message.should.equal('Malformed query string given, failed parsing name from "="');

        }
    },

    // }}}
    // {{{ test getKey#pattern1

    'test getKey#pattern1': function() {

        var o = {
            key1: 1,
            key2: 2,
            key3: 3
        };

        NX.Object.getKey(o, 1).should.equal('key1');
        var ret = NX.Object.getKey(o, 5);
        assert.equal(ret, null);

    },

    // }}}
    // {{{ test toQueryObjects#pattern1

    'test toQueryObjects#pattern1': function() {

        var ret = NX.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);

        ret[0].name.should.equal('hobbies');
        ret[0].value.should.equal('reading');
        ret[1].name.should.equal('hobbies');
        ret[1].value.should.equal('cooking');
        ret[2].name.should.equal('hobbies');
        ret[2].value.should.equal('swimming');

    },

    // }}}
    // {{{ test toQueryObjects#pattern2

    'test toQueryObjects#pattern2': function() {

        var o = NX.Object.toQueryObjects(
            'dateOfBirth',
            {
                day: 3,
                month: 8,
                year: 1987,
                extra: {
                    hour: 4,
                    minute: 30
                }
            },
            true
        );

        o[0].name.should.equal('dateOfBirth[day]');
        o[0].value.should.equal(3);
        o[1].name.should.equal('dateOfBirth[month]');
        o[1].value.should.equal(8);
        o[2].name.should.equal('dateOfBirth[year]');
        o[2].value.should.equal(1987);
        o[3].name.should.equal('dateOfBirth[extra][hour]');
        o[3].value.should.equal(4);
        o[4].name.should.equal('dateOfBirth[extra][minute]');
        o[4].value.should.equal(30);

    },

    // }}}
    // {{{ test toQueryObjects#pattern3

    'test toQueryObjects#pattern3': function() {

        var o = NX.Object.toQueryObjects(
            'dateOfBirth',
            {
                day: 3,
                month: 8,
                year: 1987,
                extra: {
                    hour: 4,
                    minute: 30
                }
            },
            false
        );

        o[0].name.should.equal('dateOfBirth');
        o[0].value.should.equal(3);
        o[1].name.should.equal('dateOfBirth');
        o[1].value.should.equal(8);
        o[2].name.should.equal('dateOfBirth');
        o[2].value.should.equal(1987);
        o[3].name.should.equal('dateOfBirth');
        o[3].value.hour.should.equal(4);
        o[3].value.minute.should.equal(30);

    },

    // }}}
    // {{{ test toQueryObjects#pattern4

    'test toQueryObjects#pattern4': function() {

        var ret = NX.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'], true);

        ret[0].name.should.equal('hobbies[0]');
        ret[0].value.should.equal('reading');
        ret[1].name.should.equal('hobbies[1]');
        ret[1].value.should.equal('cooking');
        ret[2].name.should.equal('hobbies[2]');
        ret[2].value.should.equal('swimming');

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
