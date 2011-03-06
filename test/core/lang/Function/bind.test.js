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
// {{{ bind

module.exports = {

    // {{{ test bind#pattern1

    'test bind#pattern1': function() {

        var f = function(arg1, arg2, arg3) {
            return arg1 + ':' + arg2 + ':' + arg3;
        }

        f(1,2).should.equal('1:2:undefined');

        T_Function.bind(f, this, [1,2,3], true)().should.equal('1:2:3');
        T_Function.bind(f, this, 3, 2)(1,2).should.equal('1:2:3');
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
