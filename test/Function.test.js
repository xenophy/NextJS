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
// {{{ NX.Base Class Tests

module.exports = {

    // {{{ test flexSetter#pattern1

    'test flexSetter#pattern1': function() {

        var cnt = 1;
        var f = NX.Function.flexSetter(function(key, v) {
            key.should.equal('key' + cnt);
            v.should.equal('v' + cnt);
            cnt++;
        });

        var o = {key1: 'v1', key2: 'v2'};

        f(o);

    },

    // }}}
    // {{{ test flexSetter#pattern2

    'test flexSetter#pattern2': function() {

        var ret = false;
        var f = NX.Function.flexSetter(function(key, v) {
            ret = true;
        });

        f(null);

        ret.should.be.not.ok;

    },

    // }}}
    // {{{ test flexSetter#pattern3

    'test flexSetter#pattern3': function() {

        var ret = '';

        var f = NX.Function.flexSetter(function(key, v) {
            ret = key + ':' + v;
        });

        f('hoge', 'foo');

        ret.should.equal('hoge:foo');

    },

    // }}}
    // {{{ test bind#pattern1

    'test bind#pattern1': function() {

        var f = function(arg1, arg2, arg3) {
            return arg1 + ':' + arg2 + ':' + arg3;
        }

        f(1,2).should.equal('1:2:undefined');

        NX.Function.bind(f, this, [4,5,6], true)().should.equal('4:5:6');

    },

    // }}}
    // {{{ test bind#pattern2

    'test bind#pattern2': function() {

        var f = function(arg1, arg2, arg3) {
            return arg1 + ':' + arg2 + ':' + arg3;
        }

        f(1,2).should.equal('1:2:undefined');

        NX.Function.bind(f, this, [6], 1)(5,7).should.equal('5:6:7');

    },

    // }}}
    // {{{ test pass#pattern1

    'test pass#pattern1': function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        var f = NX.Function.pass(sayHi, 'Fred');

        f().should.equal('Hi, Fred');

    },

    // }}}
    // {{{ test pass#pattern2

    'test pass#pattern2': function() {

        var sayHi = function(t, h){
            return t+':'+h;
        }

        var f = NX.Function.pass(sayHi);
        f('test', 'hoge').should.equal('test:hoge');

    },

    // }}}
    // {{{ test alias#pattern1

    'test alias#pattern1': function() {

        var testObj1 = {
            testFunc1 : function(){
                return 'testFunc1';
            }
        }
        var testObj2= {
            aliasFunc1 : NX.Function.alias(testObj1, 'testFunc1')
        }

        testObj2.aliasFunc1().should.equal('testFunc1');
        testObj1.testFunc1().should.equal(testObj2.aliasFunc1());

    },

    // }}}
    // {{{ test createInterceptor#pattern1

    'test createInterceptor#pattern1': function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = NX.Function.createInterceptor(sayHi, function(name){
            return name == 'Brian';
        });

        assert.equal(sayHiToFriend('Fred'), null);
        sayHiToFriend('Brian').should.equal('Hi, Brian');

    },

    // }}}
    // {{{ test createInterceptor#pattern2

    'test createInterceptor#pattern2': function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = NX.Function.createInterceptor(sayHi, null);

        sayHiToFriend('Fred').should.equal('Hi, Fred');
        sayHiToFriend('Brian').should.equal('Hi, Brian');

    },

    // }}}
    // {{{ test createInterceptor#pattern3

    'test createInterceptor#pattern3': function() {

        var returnValue = 'return test';
        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = NX.Function.createInterceptor(sayHi, function(name){
            return name == 'Brian';
        },this, returnValue);

        assert.equal(sayHiToFriend('Fred'), returnValue);
        sayHiToFriend('Brian').should.equal('Hi, Brian');

    },

    // }}}
    // {{{ test createDelayed#pattern1

    'test createDelayed#pattern1': function() {

        var startTime = new Date();
        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);
        };

        var df = NX.Function.createDelayed(f, 10);
        df();

    },

    // }}}
    // {{{ test createDelayed#pattern2

    'test createDelayed#pattern2': function() {

        var startTime = new Date();
        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);
            this.foo.should.equal('bar');
        };

        var df = NX.Function.createDelayed(f, 10, {foo: 'bar'});
        df();

    },

    // }}}
    // {{{ test createDelayed#pattern3

    'test createDelayed#pattern3': function() {

        var startTime = new Date();
        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);
            arg1.should.equal(1);
            arg2.should.equal(2);
            arg3.should.equal(3);
        };

        var df = NX.Function.createDelayed(f, 10, {foo: 'bar'}, [1, 2, 3], true);
        df();

    },

    // }}}
    // {{{ test defer#pattern1

    'test defer#pattern1': function() {

        var startTime = new Date();

        NX.Function.defer(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);

        }, 10).should.not.equal(0);

    },

    // }}}
    // {{{ test defer#pattern2

    'test defer#pattern2': function() {

        var startTime = new Date();

        NX.Function.defer(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(0,10000);

        }).should.equal(0);

    },

    // }}}
    // {{{ test createSequence#pattern1

    'test createSequence#pattern1': function() {

        var ret = '';
        var sayHi = function(name){
            ret = 'Hi, ' + name;
        }

        sayHi('Fred');
        ret.should.equal('Hi, Fred');

        var sayGoodbye = NX.Function.createSequence(sayHi, function(name){
            ret += ' Bye, ' + name;
        });

        sayGoodbye('Fred');

        ret.should.equal('Hi, Fred Bye, Fred');

    },

    // }}}
    // {{{ test createSequence#pattern2

    'test createSequence#pattern2': function() {

        var ret = '';
        var sayHi = function(name){
            ret = 'Hi, ' + name;
        }

        sayHi('Fred');
        ret.should.equal('Hi, Fred');

        var sayGoodbye = NX.Function.createSequence(sayHi, null);

        sayGoodbye('Fred');

        ret.should.equal('Hi, Fred');

    },

    // }}}
    // {{{ test createBuffered#pattern1

    'test createBuffered#pattern1': function() {

        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50-1,10000);

        };

        var startTime = new Date();
        NX.Function.createBuffered(f, 50)();

    },

    // }}}
    // {{{ test createBuffered#pattern2

    'test createBuffered#pattern2': function() {

        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50-1,10000);

            arg1.should.equal(4);
            arg2.should.equal(5);
            arg3.should.equal(6);

        }

        var startTime = new Date();
        NX.Function.createBuffered(f, 50, this, [4,5,6])();

    },

    // }}}
    // {{{ test createBuffered#pattern3

    'test createBuffered#pattern3': function() {

        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50-1,10000);

            arg1.should.equal(4);
            arg2.should.equal(5);
            arg3.should.equal(6);

        }

        var startTime = new Date();
        var buff = NX.Function.createBuffered(f, 50, this, [4,5,6]);
        buff();
        buff();

    },

    // }}}
    // {{{ test createThrottled#pattern1

    'test createThrottled#pattern1': function(beforeExit) {

        var startTime = new Date();

        var cnt = 0;

        var nf = NX.Function.createThrottled(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(100*cnt-1,1000);

            cnt++;

        }, 100);

        for(i=0; i<100; i++) {
            nf();
        }

        beforeExit(function() {

            cnt.should.equal(2);

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
