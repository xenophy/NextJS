/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX.util.Functions Class Tests

module.exports = {

    // {{{ test createDelegate

    'test createDelegate': function() {

        var ret;

        var sayHi = function(name){
            ret = this.foo + name;
        }

        var f = NX.createDelegate(sayHi, {foo: 'bar'}, ['Fred']);

        f();

        assert.equal(ret, 'barFred');

        var sayHi2 = function(src, name){
            ret = this.foo + name + src;
        }

        var f = NX.createDelegate(sayHi2, {foo: 'bar'}, ['Fred'], true);

        f('Append');

        assert.equal(ret, 'barFredAppend');

        var sayHi3 = function(a, b, name){
            ret = this.foo + name + a + b;
        }
        var f = NX.createDelegate(sayHi3, {foo: 'bar'}, ['Fred'], 2);

        f('1', '2', '3');

        assert.equal(ret, 'barFred12');


        var f = NX.createDelegate(123);

        assert.equal(f, 123);

    },

    // }}}
    // {{{ test createInterceptor

    'test createInterceptor': function() {

        var ret;
        var sayHi = function(name){
            ret = name;
        }

        sayHi('Fred');

        assert.equal(ret, 'Fred');

        ret = null;

        var sayHiToFriend = NX.createInterceptor(sayHi, function(name){
            return name == 'Brian';
        });

        sayHiToFriend('Fred');
        assert.equal(ret, null);

        sayHiToFriend('Brian');
        assert.equal(ret, 'Brian');

        var sayHiToFriend = NX.createInterceptor(123);

        assert.equal(sayHiToFriend, 123);

    },

    // }}}
    // {{{ test createSequence

    'test createSequence': function() {

        var ret = '';
        var sayHi = function(name){
            ret += name;
        }

        sayHi('Fred');
        assert.equal(ret, 'Fred');

        var sayGoodbye = NX.createSequence(sayHi, function(name){
            ret = 'Bye ' + name;
        });

        sayGoodbye('Fred');
        assert.equal(ret, 'Bye Fred');

        var sayGoodbye = NX.createSequence(123);

        assert.equal(sayGoodbye, 123);
    },

    // }}}
    // {{{ test defer

    'test defer': function(beforeExit) {

        var ret;
        NX.defer(function() {
            ret = 'called';
        }, 100);


        NX.defer(function() {
            ret = 'pre called';
        }, 0);

        assert.equal(ret, 'pre called');

        beforeExit(function(){
            assert.equal(ret, 'called');
        });
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
