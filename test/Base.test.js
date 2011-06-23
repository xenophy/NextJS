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

    // {{{ test callOverridden#pattern1

    'test callOverridden#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.callOverridden.p1cls', {
            hoge: function() {
                return 'org';
            }
        });

        NX.ClassManager.create('NXTest.Base.callOverridden.p1cls2', {
            extend: 'NXTest.Base.callOverridden.p1cls',
            hoge: function() {
                this.callOverridden().should.equal('org');
            }
        });

        try{
            var cls = new NXTest.Base.callOverridden.p1cls2();
            cls.hoge();
        } catch(e) {
            e.message.should.equal('this.callOverridden was called in \'hoge\' but this method has never been overridden');
        }

    },

    // }}}
    // {{{ test callOverridden#pattern2

    'test callOverridden#pattern2': function() {

        NX.ClassManager.create('NXTest.Base.callOverridden.p2cls', {
            hoge: function() {
                return 'org';
            }
        });

        NXTest.Base.callOverridden.p2cls.override({
            hoge: function() {
                this.callOverridden().should.equal('org');
            }
        });

        var cls = new NXTest.Base.callOverridden.p2cls();
        cls.hoge();

    },

    // }}}
    // {{{ test callOverridden#pattern3

    'test callOverridden#pattern3': function() {

        NX.ClassManager.create('NXTest.Base.callOverridden.p3cls', {
            hoge: function() {
                return 'org';
            }
        });

        var me = this;
        var cls = new NXTest.Base.callOverridden.p3cls();

        NXTest.Base.callOverridden.p3cls.override({
            hoge: function() {

                NXTest.Base.callOverridden.p3cls.prototype.hoge['$owner'] = null;

                try{
                    this.callOverridden().should.equal('org');
                } catch(e) {
                    e.message.should.equal("Attempting to call a protected method from the public scope, which is not allowed");
                }
            }
        });

        cls.hoge();

    },

    // }}}
    // {{{ test callParent#pattern1

    'test callParent#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.callParent.p1cls', {
            exntend: function() {
            },
            hoge: function() {
                this.callParent();
            }
        });

        try {
            var cls = new NXTest.Base.callParent.p1cls();
            cls.hoge();
        } catch(e) {
            e.message.should.equal('this.callParent() was called but there\'s no such method (hoge) found in the parent class (NX.Base)');
        }

    },

    // }}}
    // {{{ test callParent#pattern2

    'test callParent#pattern2': function() {

        NX.ClassManager.create('NXTest.Base.callParent.p2cls', {
            exntend: false,
            hoge: function() {
                this.callParent();
            }
        });

        try {
            var cls = new NXTest.Base.callParent.p1cls();
            cls.hoge();
        } catch(e) {
            e.message.should.equal('this.callParent() was called but there\'s no such method (hoge) found in the parent class (NX.Base)');
        }

    },

    // }}}
    // {{{ test callParent#pattern3

    'test callParent#pattern3': function() {

         NX.define('NXTest.Base.callParent.p3cls1', {
             config: {
                 name: 'test'
             },
             constructor: function(config) {
                 this.initConfig(config);
                 return 'hoge';
             }
        });

        NX.define('NXTest.Base.callParent.p3cls2', {
            extend: 'NXTest.Base.callParent.p3cls1',
            constructor : function() {
                var test = this.callParent(arguments);
                test.should.equal('hoge');
            }
        });

        var cls = new NXTest.Base.callParent.p3cls2();

    },

    // }}}
    // {{{ test callParent#pattern4

    'test callParent#pattern4': function() {

         NX.define('NXTest.Base.callParent.p4cls1', {
             config: {
                 name: 'test'
             },
             constructor: function(config) {
                 this.initConfig(config);
                 return 'hoge';
             }
        });

        NX.define('NXTest.Base.callParent.p4cls2', {
            extend: 'NXTest.Base.callParent.p4cls1',
            constructor : function() {
                var test = this.callParent(arguments);
                test.should.equal('hoge');
            }
        });

        var cls = new NXTest.Base.callParent.p4cls2();

        try{
            cls.callParent.call({
                callParent: {
                    caller: {}, '$owner': null
                }
            });
        } catch(e) {
            e.message.should.equal('Attempting to call a protected method from the public scope, which is not allowed');
        }

    },

    // }}}
    // {{{ test callParent#pattern5

    'test callParent#pattern5': function() {

         NX.define('NXTest.Base.callParent.p5cls1', {
             config: {
                 name: 'test'
             },
             constructor: function(config) {
                 this.initConfig(config);
                 return 'hoge';
             }
        });

        NX.define('NXTest.Base.callParent.p5cls2', {
            extend: 'NXTest.Base.callParent.p5cls1',
            constructor : function() {
                var test = this.callParent(arguments);
                test.should.equal('hoge');
            }
        });

        var cls = new NXTest.Base.callParent.p5cls2();

        try{
            cls.callParent.call({
                callParent: {
                    caller: {
                        caller: {
                            '$owner' :{
                                superclass: {}
                            }
                        }
                    },
                    '$owner': null
                }
            });
        } catch(e) {
            e.message.should.equal('this.callParent() was called but there\'s no such method (undefined) found in the parent class (Object)');
        }


    },

    // }}}
    // {{{ test setConfig#pattern1

    'test setConfig#pattern1': function() {

         NX.define('NXTest.Base.setConfig.p1cls1', {
             config: {
                 name: 'test'
             },
             constructor: function(config) {
                 this.initConfig(config);
                 return 'hoge';
             }
        });

        var cls = new NXTest.Base.setConfig.p1cls1();

        cls.name.should.equal('test');

        cls.setConfig({
            name: 'foo'
        });

        cls.name.should.equal('foo');

    },

    // }}}
    // {{{ test statics#pattern1

    'test statics#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.statics.p1cls', {
            statics: {
                fee: 'baz',
            },
            hoge: function() {
                this.statics().fee.should.equal('baz');
            }
        });

        NX.ClassManager.create('NXTest.Base.statics.p1cls2', {
            extend: 'NXTest.Base.statics.p1cls',
            statics: {
                poo: 'par'
            },
            hoge2: function() {
                assert.equal(this.statics().fee, undefined);
                assert.equal(this.statics().poo, 'par');

                var ret = this.statics.call({statics: {}});
                assert.equal(ret, undefined);

            }
        });

        var cls = new NXTest.Base.statics.p1cls2();

        cls.hoge();
        cls.hoge2();

    },

    // }}}
    // {{{ test addStatics#pattern1

    'test addStatics#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.addStatics.p1cls', {
            statics: {
                fee: 'baz',
            },
            hoge: function() {
                this.statics().fee.should.equal('baz');
                this.statics().foo().should.equal('bar');
            }
        });

        NXTest.Base.addStatics.p1cls.addStatics({
            foo: function() {
                return 'bar';
            }
        });

        var cls = new NXTest.Base.addStatics.p1cls();

    },

    // }}}
    // {{{ test borrow#pattern1

    'test borrow#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.borrow.p1cls', {
            money: '$$$',
            printMoney: function() {
                return '$$$$$$$';
            }
        });

        NX.ClassManager.create('NXTest.Base.borrow.p1cls2', {
        });

        NXTest.Base.borrow.p1cls2.borrow(NXTest.Base.borrow.p1cls, ['money', 'printMoney']);

        var steve = new NXTest.Base.borrow.p1cls2();

        steve.money.should.equal('$$$');
        steve.printMoney().should.equal('$$$$$$$');

    },

    // }}}
    // {{{ test create#pattern1

    'test create#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.create.p1cls', {
            foo: 'bar',
            constructor: function(config) {
                NX.apply(this, config || {});
            }
        });

        var cls = NXTest.Base.create.p1cls.create({foo: 'piyo'});
        cls.foo.should.equal('piyo');

    },

    // }}}
    // {{{ test createAlias#pattern1

    'test createAlias#pattern1': function() {

        NX.define('NXTest.Base.createAlias.p1cls', {
            method1: function() {
                return 'method1';
            },
            method2: function() {
                return 'method2';
            }
        });

        var test = new NXTest.Base.createAlias.p1cls();

        NXTest.Base.createAlias.p1cls.createAlias({
            method3: 'method1',
            method4: 'method2'
        });

        test.method3().should.equal('method1');

        NXTest.Base.createAlias.p1cls.createAlias('method5', 'method3');

        test.method5().should.equal('method1');

    },

    // }}}
    // {{{ test getName#pattern1

    'test getName#pattern1': function() {

        NX.define('NXTest.Base.getName.p1cls', {
        });

        NXTest.Base.getName.p1cls.getName().should.equal('NXTest.Base.getName.p1cls');
    },

    // }}}
    // {{{ test mixin#pattern1

    'test mixin#pattern1': function() {

        NX.define('NXTest.Base.mixin.p1mixin', {
            foo: 'bar',
            hoge: function() {
                return 'piyo';
            }
        });

        NX.define('NXTest.Base.mixin.p1cls', {
            p1cls: function() {
                return  'p1cls';
            }
        });

        NX.define('NXTest.Base.mixin.p1cls2', {
            extend: 'NXTest.Base.mixin.p1cls',
            p1cls2: function() {
                return  'p1cls2';
            }
        });

        NXTest.Base.mixin.p1cls2.mixin('NXTest.Base.mixin.p1mixin', NXTest.Base.mixin.p1mixin);

        cls = new NXTest.Base.mixin.p1cls2();
        cls.p1cls().should.equal('p1cls');
        cls.p1cls2().should.equal('p1cls2');
        cls.foo.should.equal('bar');
        cls.hoge().should.equal('piyo');

    },

    // }}}
    // {{{ test mixin#pattern2

    'test mixin#pattern2': function() {

        NX.define('NXTest.Base.mixin.p2cls', {
            p2cls: function() {
                return  'p2cls';
            }
        });

        NX.define('NXTest.Base.mixin.p2cls2', {
            extend: 'NXTest.Base.mixin.p2cls',
            p2cls2: function() {
                return  'p2cls2';
            }
        });

        var f = function() {};
        f.prototype = {
            foo: 'bar',
            hoge: function() {
                return 'piyo';
            }
        };

        NXTest.Base.mixin.p2cls2.mixin('NXTest.Base.mixin.p2mixin', f);

        cls = new NXTest.Base.mixin.p2cls2();
        cls.p2cls().should.equal('p2cls');
        cls.p2cls2().should.equal('p2cls2');

        cls.foo.should.equal('bar');
        cls.hoge().should.equal('piyo');
    },

    // }}}
    // {{{ test override#pattern1

    'test override#pattern1': function() {

        NX.define('NXTest.Base.override.p1cls', {
            hoge: function() {
                return  'piyo';
            },
            foo: 123
        });
        NXTest.Base.override.p1cls.override({
            hoge: function() {
                return this.callOverridden() + '2';
            },
            foo: 'bar'
        });

        var cls = new NXTest.Base.override.p1cls();
        cls.hoge().should.equal('piyo2');
        cls.foo.should.equal('bar');

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
