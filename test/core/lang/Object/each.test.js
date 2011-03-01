/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Object = require('NX/core/lang/Object');

// }}}
// {{{ each

module.exports = {

    // {{{ test each#pattern1

    'test each#pattern1': function() {

        T_Object.each({foo: 'bar'}, function(key, v) {
            key.should.equal('foo');
            v.should.equal('bar');
        });
    },

    // }}}
    // {{{ test each#pattern2

    'test each#pattern2': function() {

        var ret = {};
        T_Object.each({foo: 'bar', hoge: 123}, function(key, v) {
            ret[key] = v;
            return false;
        });

        ret['foo'].should.equal('bar');
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
