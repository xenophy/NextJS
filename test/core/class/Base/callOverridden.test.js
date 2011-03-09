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
// {{{ callOverridden

module.exports = {

    // {{{ test callOverridden#pattern1

    'test callOverridden#pattern1': function() {

        T_ClassManager.create('NXTest.Base.callOverridden.p1cls', {
            hoge: function() {
                return 'org';
            }
        });

        T_ClassManager.create('NXTest.Base.callOverridden.p1cls2', {
            extend: 'NXTest.Base.callOverridden.p1cls',
            hoge: function() {
                this.callOverridden().should.equal('org');
            }
        });

        try{
            var cls = new NXTest.Base.callOverridden.p1cls2();
            cls.hoge();
        } catch(e) {
            e.message.should.equal("[NXTest.Base.callOverridden.p1cls2] this.callOverridden was called in 'hoge' but this method has never been overridden");
        }

    },

    // }}}
    // {{{ test callOverridden#pattern2

    'test callOverridden#pattern2': function() {

        T_ClassManager.create('NXTest.Base.callOverridden.p2cls', {
            hoge: function() {
                return 'org';
            }
        });

        NXTest.Base.callOverridden.p2cls.override('hoge', function() {
            this.callOverridden().should.equal('org');
        });

        var cls = new NXTest.Base.callOverridden.p2cls();
        cls.hoge();

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
