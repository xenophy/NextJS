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
// {{{ extend

module.exports = {

    // {{{ test extend#pattern1

    'test extend#pattern1': function() {

        T_ClassManager.create('NXTest.Base.extend.p1cls', {
        });

        NXTest.Base.extend.p1cls.extend('foo', 'bar');

        NXTest.Base.extend.p1cls.foo.should.equal('bar');

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
