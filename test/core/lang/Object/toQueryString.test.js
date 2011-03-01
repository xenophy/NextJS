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
// {{{ toQueryString

module.exports = {

    // {{{ test toQueryString#pattern1

    'test toQueryString#pattern1': function() {

        var ret = T_Object.toQueryString({foo: 'bar'});
        ret.should.equal('foo=bar');
    },

    // }}}
    // {{{ test toQueryString#pattern2

    'test toQueryString#pattern2': function() {

        var ret = T_Object.toQueryString({foo: 'bar', hoge: 123});
        ret.should.equal('foo=bar&hoge=123');
    },

    // }}}
    // {{{ test toQueryString#pattern3

    'test toQueryString#pattern3': function() {

        var ret = T_Object.toQueryString({foo: 'bar', hoge: 123}, 'pre=999&');
        ret.should.equal('pre=999&foo=bar&hoge=123');
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
