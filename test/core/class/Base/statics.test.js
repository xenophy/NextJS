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
// {{{ statics

module.exports = {

    // {{{ test statics#pattern1

    'test statics#pattern1': function() {

        T_ClassManager.create('NXTest.Base.statics.p1cls', {
            statics: {
                fee: 'baz',
            },
            hoge: function() {
                this.statics().fee.should.equal('baz');
            }
        });

        T_ClassManager.create('NXTest.Base.statics.p1cls2', {
            extend: 'NXTest.Base.statics.p1cls',
            statics: {
                poo: 'par'
            },
            hoge2: function() {
                assert.equal(this.statics().fee, undefined);
                assert.equal(this.statics().poo, 'par');
            }
        });

        var cls = new NXTest.Base.statics.p1cls2();

        cls.hoge();
        cls.hoge2();
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
