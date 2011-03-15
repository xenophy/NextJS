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

    // }}}
    // {{{ test override#pattern2

    'test override#pattern2': function() {

        NX.define('NXTest.override.cls2', {
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

        NX.override(NXTest.override.cls2, {
            config: {
                name: 'hoge',
                isAwesome: false
            },
            applyName : function(val) {
                return "("+val+")";
            }
        });

        NX.define('NXTest.override.cls3', {
            extend: 'NXTest.override.cls2',
            constructor : function() {
                this.callParent(arguments);
            }
        });

        var cls2 = new NXTest.override.cls3();

        cls2.getName().should.equal('(hoge)');
        cls2.getIsAwesome().should.equal(false);

        cls2.setName('Next JS');
        cls2.getName().should.equal('(Next JS)');

        cls2.resetName();
        cls2.getName().should.equal('(hoge)');

    },

    // }}}
    // {{{ test override#pattern3

    'test override#pattern3': function() {

        NX.define('NXTest.override.cls4', {
            statics: {
                value: 123,
                func: function() {
                    return 'foo';
                }
            }
        });

        NX.override(NXTest.override.cls2, {
            statics: {
                value: 978,
                func: function() {
                    return 'hoge';
                }
            }
        });

        NXTest.override.cls4.value.should.equal(123);
        NXTest.override.cls4.func().should.equal('foo');

    },

    // }}}
    // {{{ test override#pattern4

    'test override#pattern4': function() {

        NX.define('NXTest.override.cls51', {
            config: {
                fee: 'baz',
                test: 'test'
            },
            foo: 'bar',
            hoge: function() {
                return 'hoge';
            }
        });

        NX.override(NXTest.override.cls51, {
            config: {
                fee: 'override',
                test: 'override'
            }
        });

        NX.define('NXTest.override.cls52', {
            config: {
                fee: 'boo'
            },
            mixins: [
                'NXTest.override.cls51'
            ]
        });

        var cls = new NXTest.override.cls52();

        cls.hoge().should.equal('hoge');
        cls.foo.should.equal('bar');
        cls.config.fee.should.equal('boo');
        cls.config.test.should.equal('override');

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
