/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Function = require('NX/core/lang/Function');

// }}}
// {{{ flexSetter

module.exports = {

    // {{{ test flexSetter#pattern1

    'test flexSetter#pattern1': function() {

        var cnt = 1;
        var f = T_Function.flexSetter(function(key, v) {
            key.should.equal('key' + cnt);
            v.should.equal('v' + cnt);
            cnt++;
        });

        var o = {key1: 'v1', key2: 'v2'};

        f(o);

    },

    // }}}
    // {{{ test flexSetter#pattern2

    'test flexSetter#pattern2': function() {

        var ret = false;
        var f = T_Function.flexSetter(function(key, v) {
            ret = true;
        });

        f(null);

        ret.should.be.not.ok;

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
