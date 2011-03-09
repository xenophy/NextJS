/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

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
