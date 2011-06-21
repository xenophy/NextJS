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
// {{{ NX.Array Class Tests

module.exports = {

    // {{{ 'test replace#pattern1'

    'test replace#pattern1': function() {

        var ret = NX.Array.replace([1,2,3,4,5], 2, 2);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(5);

        ret = NX.Array.replace([1,2,3,4,5], 2, 0, [9, 10]);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(9);
        ret[3].should.equal(10);
        ret[4].should.equal(3);
        ret[5].should.equal(4);
        ret[6].should.equal(5);

        ret = NX.Array.replace([1,2,3,4,5], 8, 0, [9, 10]);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(3);
        ret[3].should.equal(4);
        ret[4].should.equal(5);
        ret[5].should.equal(9);
        ret[6].should.equal(10);

    },

    // }}}
    // {{{ test toArray#pattern1

    'test toArray#pattern1': function() {

        var ret;
        var arr = [1,2,3,4,5];

        ret = NX.Array.toArray(arr, 2, 4);

        ret.length.should.equal(2);
        ret[0].should.equal(3);
        ret[1].should.equal(4);

    },

    // }}}
    // {{{ test toArray#pattern2

    'test toArray#pattern2': function() {

        var ret = NX.Array.toArray('abc');

        ret[0].should.equal('a');
        ret[1].should.equal('b');
        ret[2].should.equal('c');

    },

    // }}}
    // {{{ test toArray#pattern3

    'test toArray#pattern3': function() {

        var ret = NX.Array.toArray('abc', 1, 2);

        ret[0].should.equal('b');

    },

    // }}}
    // {{{ test from#pattern1

    'test from#pattern1': function() {

        var o = {
            a: 1,
            b: 2,
            c: 3
        };

        var ret = NX.Array.from(o);

        ret.length.should.equal(1);
        ret[0].a.should.equal(1);
        ret[0].b.should.equal(2);
        ret[0].c.should.equal(3);

    },

    // }}}
    // {{{ test from#pattern2

    'test from#pattern2': function() {

        var f = function() {
            var ret = NX.Array.from(arguments);

            ret.length.should.equal(3);
            ret[0].should.equal(1);
            ret[1].should.equal(2);
            ret[2].should.equal(3);
        };

        f(1,2,3);
    },

    // }}}
    // {{{ test from#pattern3

    'test from#pattern3': function() {

        var ret = NX.Array.from(1);
        ret[0].should.equal(1);
        ret.length.should.equal(1);

    },

    // }}}
    // {{{ test from#pattern4

    'test from#pattern4': function() {

        var ret = NX.Array.from(undefined);
        ret.length.should.equal(0);

    },

    // }}}
    // {{{ test from#pattern5

    'test from#pattern5': function() {

        var a = [1,2,3];
        var ret = NX.Array.from(a, true);

        ret.length.should.equal(3);
        ret[0].should.not.equal(a);
    },

    // }}}
    // {{{ 'test clean#pattern1'

    'test clean#pattern1': function() {

        var a = [1,2,3];
        var ret = NX.Array.clean(a);

        ret.length.should.equal(3);
        ret.should.not.equal(a);
    },

    // }}}
    // {{{ 'test clean#pattern2'

    'test clean#pattern2': function() {

        var a = [1,'',3];
        var ret = NX.Array.clean(a);

        ret.length.should.equal(2);
        ret[0].should.equal(1);
        ret[1].should.equal(3);
        ret.should.not.equal(a);
    },

    // }}}
    // {{{ 'test clone#pattern1'

    'test clone#pattern1': function() {

        var a = [1,2,3];
        var ret = NX.Array.clone(a);

        ret.length.should.equal(3);
        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(3);
        ret.should.not.equal(a);
    },

    // }}}
    // {{{ 'test indexOf#pattern1'

    'test indexOf#pattern1': function() {

        var array = [2, 5, 9];
        var index = NX.Array.indexOf(array, 2);
        index.should.equal(0);
        index = NX.Array.indexOf(array, 7);
        index.should.equal(-1);

    },

    // }}}
    // {{{ 'test contains#pattern1'

    'test contains#pattern1': function() {

        var o = {foo: 'bar'};
        var a = [1, o, 'hoge'];

        NX.Array.contains(a, 1).should.equal(true);
        NX.Array.contains(a, 2).should.equal(false);
        NX.Array.contains(a, o).should.equal(true);
        NX.Array.contains(a, {}).should.equal(false);
        NX.Array.contains(a, 'hoge').should.equal(true);
        NX.Array.contains(a, 'piyo').should.equal(false);
    },

    // }}}
    // {{{ 'test difference#pattern1'

    'test difference#pattern1': function() {

        var arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var arrayB = [2, 3, 5, 8, 9, 10];

        var ret = NX.Array.difference(arrayA, arrayB);

        ret.length.should.equal(4);
        ret[0].should.equal(1);
        ret[1].should.equal(4);
        ret[2].should.equal(6);
        ret[3].should.equal(7);

    },

    // }}}
    // {{{ 'test each#pattern1'

    'test each#pattern1': function() {

        var sum = function() {
            var sum = 0;

            NX.Array.each(arguments, function(value) {
                sum += value;
            });

            return sum;
        };

        sum(1, 2, 3).should.equal(6);
    },

    // }}}
    // {{{ 'test each#pattern2'

    'test each#pattern2': function() {

        var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];

        var ret = NX.Array.each(countries, function(name, index, countriesItSelf) {
            if(name === 'Singapore') {
                return false;
            }
        });

        ret.should.equal(1);

    },

    // }}}
    // {{{ 'test each#pattern3'

    'test each#pattern3': function() {

        var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];

        var ret = NX.Array.each(countries, function(name, index, countriesItSelf) {
            if(name === 'Singapore') {
                return false;
            }
        }, this, true);

        ret.should.equal(1);

    },

    // }}}
    // {{{ 'test every#pattern1'

    'test every#pattern1': function() {

        var isBigEnough = function(element, index, array) {
            return (element >= 10);
        }
        var passed = NX.Array.every([12, 5, 8, 130, 44], isBigEnough);
        passed.should.equal(false);

        passed = NX.Array.every([12, 54, 18, 130, 44], isBigEnough);
        passed.should.equal(true);

    },

    // }}}
    // {{{ 'test lastIndexOf#pattern1'

    'test lastIndexOf#pattern1': function() {

        var array = [2, 5, 9, 2];
        var index = NX.Array.lastIndexOf(array, 2);
        index.should.equal(3);

        index = NX.Array.lastIndexOf(array, 7);
        index.should.equal(-1);

        index = NX.Array.lastIndexOf(array, 2, 3);
        index.should.equal(3);

        index = NX.Array.lastIndexOf(array, 2, 2);
        index.should.equal(0);

        index = NX.Array.lastIndexOf(array, 2, -2);
        index.should.equal(0);

        index = NX.Array.lastIndexOf(array, 2, -1);
        index.should.equal(3);

        index = NX.Array.lastIndexOf(array, 2, 10);
        index.should.equal(3);

    },

    // }}}
    // {{{ 'test slice#pattern1'

    'test slice#pattern1': function() {

        var array = ['a', 'b', 'c', 'd'];

        var ret = NX.Array.slice(array, 1);
        ret[0].should.equal('b');
        ret[1].should.equal('c');
        ret[2].should.equal('d');

        ret = NX.Array.slice(array, 2, 4);
        ret[0].should.equal('c');
        ret[1].should.equal('d');

    },

    // }}}
    // {{{ 'test splice#pattern1'

    'test splice#pattern1': function() {

        var a = new Array("A", "B", "C", "D", "E", "F", "G");
        NX.Array.splice(a, 2, 3, "c", "d", "e");

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
