/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_NX = require('NX/core');

require('NX/core/class/ClassManager');
var T_Class = require('NX/core/class/Class');

// }}}
// {{{ ownMethod

module.exports = {

    // {{{ test ownMethod#pattern1

    'test ownMethod#pattern1': function() {

        T_ClassManager.create('NXTest.Base.ownMethod.p1cls', {
        });

        NXTest.Base.ownMethod.p1cls.ownMethod('foo', T_NX.emptyFn);

        var cls = new NXTest.Base.ownMethod.p1cls();

        assert.equal(cls.foo(), undefined);

    },

    // }}}
    // {{{ test ownMethod#pattern2

    'test ownMethod#pattern2': function() {

        T_ClassManager.create('NXTest.Base.ownMethod.p2cls', {
        });

        var f = function() {
            return 'f';
        };
        f.$isOwned = true;

        NXTest.Base.ownMethod.p2cls.ownMethod('f', f);

        var cls = new NXTest.Base.ownMethod.p2cls();

        cls.f().should.equal('f');

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
