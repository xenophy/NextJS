/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

require('NX');
require('NX/core');
require('NX/core/class/ClassManager');
var T_Class = require('NX/core/class/Class');

// }}}
// {{{ override

module.exports = {

    // {{{ test override#pattern1

    'test override#pattern1': function() {

        T_ClassManager.create('NXTest.Base.override.p1cls', {
            foo: 'bar',
            fee: {
                foo: 'baz'
            },
            hoge: function() {
                return 'hoge';
            }
        });

        NXTest.Base.override.p1cls.override('test', 'xeno');
        NXTest.Base.override.p1cls.override('foo', 'baz');
        NXTest.Base.override.p1cls.override('fee', {
            foo: 'sage'
        });
        NXTest.Base.override.p1cls.override('hoge', function() {
            return 'piyo';
        });

        var cls = new NXTest.Base.override.p1cls();
        cls.test.should.equal('xeno');
        cls.foo.should.equal('baz');
        cls.fee.foo.should.equal('sage');
        cls.hoge().should.equal('piyo');

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
