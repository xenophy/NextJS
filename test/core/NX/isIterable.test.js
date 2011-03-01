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

// }}}
// {{{ isIterable

module.exports = {

    // {{{ test isIterable

    'test isIterable': function() {

        var a = [];
        var str = '';

        T_NX.isIterable(a).should.equal(true);
        T_NX.isIterable(arguments).should.equal(true);
        T_NX.isIterable(str).should.not.equal(true);
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
