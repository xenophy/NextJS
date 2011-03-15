/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_NX = require('NX');

// }}}
// {{{ override

module.exports = {

    // {{{ test override#pattern1

    'test override#pattern1': function() {

         NX.define('NXTest.override.cls1', {
            config: {
                name: 'Awesome',
                isAwesome: true
            },
            constructor: function(config) {
                this.initConfig(config);
                return this;
            },
            applyName : function(val) {
                return "[" + val + "]";
            }
        });

        NX.override(NXTest.override.cls1, {
            config: {
                name: 'hoge',
                isAwesome: false
            },
            applyName : function(val) {
                return "("+val+")";
            }
        });

        var cls = new NXTest.override.cls1();

        cls.getName().should.equal('(hoge)');
        cls.getIsAwesome().should.equal(false);
        cls.isAwesome().should.not.be.ok;

        cls.setName('Next JS');
        cls.getName().should.equal('(Next JS)');

        cls.resetName();
        cls.getName().should.equal('(hoge)');

        cls.setConfig({
            name: 'Awesome',
            isAwesome: true
        });

        cls.getIsAwesome().should.equal(true);
        cls.isAwesome().should.be.ok;

    },
/*
    // }}}
    // {{{ test override#pattern2

    'test override#pattern2': function() {

         NX.override('NXTest.override.cls2', {
             config: {
                 name: 'Awesome',
                 isAwesome: true
             },
             constructor: function(config) {
 //                console.log("are?");
                 this.initConfig(config);
                 return this;
             },
             applyName : function(val) {
                 return "[" + val + "]";
             }
        });

        NX.override('NXTest.override.cls3', {
            extend: 'NXTest.override.cls2',
            constructor : function() {
                this.callParent(arguments);
            }
        });

//        var cls2 = new NXTest.override.cls1();
        var cls2 = new NXTest.override.cls2();

        cls2.getName().should.equal('[Awesome]');
        cls2.getIsAwesome().should.equal(true);

        cls2.setName('Next JS');
        cls2.getName().should.equal('[Next JS]');

        cls2.resetName();
        cls2.getName().should.equal('[Awesome]');

    },

    // }}}
    // {{{ test override#pattern3

    'test override#pattern3': function() {

         NX.override('NXTest.override.cls4', {
             statics: {
                 value: 123,
                 func: function() {
                     return 'foo';
                 }
             }
         });

         NXTest.override.cls4.value.should.equal(123);
         NXTest.override.cls4.func().should.equal('foo');

    },

    // }}}
    // {{{ test override#pattern4

    'test override#pattern4': function() {

        var f = function() {
        };

        NX.override('NXTest.override.cls5', {
            extend: f
        });

        var cls = new NXTest.override.cls5();

        NX.isFunction(cls.initConfig).should.be.ok;

    },

    // }}}
    // {{{ test override#pattern5

    'test override#pattern5': function() {

        NX.override('NXTest.override.cls61', {
            config: {
                fee: 'baz'
            },
            foo: 'bar',
            hoge: function() {
                return 'hoge';
            }
        });

        NX.override('NXTest.override.cls62', {
            config: {
                fee: 'boo'
            },
            mixins: [
                'NXTest.override.cls61'
            ]
        });

        var cls = new NXTest.override.cls62();

        cls.hoge().should.equal('hoge');
        cls.foo.should.equal('bar');
        cls.config.fee.should.equal('boo');

    },

    // }}}
    // {{{ test override#pattern6

    'test override#pattern6': function() {

        NX.override('NXTest.override.p6cls', {
        });

        NX.override('NXTest.override.p6cls2', {
        });

        NX.override('NXTest.override.p6cls3', {
            mixins: {
                '0': 'NXTest.override.p6cls',
                '1': 'NXTest.override.p6cls2'
            }
        });


    }

    // }}}
*/

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
