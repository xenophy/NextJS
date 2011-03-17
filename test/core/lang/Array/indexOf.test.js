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
var T_Array = require('NX/core/lang/Array');

// }}}
// {{{ indexOf

module.exports = {

    // {{{ test indexOf#pattern1

    'test indexOf#pattern1': function() {

        var array = [2, 5, 9];
        var index = T_Array.indexOf(array, 2);

        index.should.equal(0);

        index = T_Array.indexOf(array, 7);

        index.should.equal(-1);
    },

    // }}}
    // {{{ test indexOf#pattern2

    'test indexOf#pattern2': function() {

        var array = ['hoge', 'foo', 'bar'];

        var index = T_Array.indexOf(array, 'foo');
        index.should.equal(1);

        index = T_Array.indexOf(array, 'hoge', 0);
        index.should.equal(0);

        index = T_Array.indexOf(array, 'hoge', 1);
        index.should.equal(-1);
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
