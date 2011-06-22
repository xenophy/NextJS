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



};

// }}}


/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
