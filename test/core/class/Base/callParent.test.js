/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var NX = require('NX/core');
require('NX/core/class/ClassManager');
var T_Class = require('NX/core/class/Class');

// }}}
// {{{ callParent

module.exports = {

    // {{{ test callParent#pattern1

    'test callParent#pattern1': function() {

        T_ClassManager.create('NXTest.Base.callParent.p1cls', {
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
            e.message.should.equal("[NXTest.Base.callParent.p1cls#hoge] this.parent was called but there's no such method (hoge) found in the parent class (NX.Base)");
        }

    },

    // }}}
    // {{{ test callParent#pattern2

    'test callParent#pattern2': function() {

        T_ClassManager.create('NXTest.Base.callParent.p2cls', {
            exntend: false,
            hoge: function() {
                this.callParent();
            }
        });

        try {
            var cls = new NXTest.Base.callParent.p1cls();
            cls.hoge();
        } catch(e) {
            e.message.should.equal("[NXTest.Base.callParent.p1cls#hoge] this.parent was called but there's no such method (hoge) found in the parent class (NX.Base)");
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
