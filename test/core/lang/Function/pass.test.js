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
// {{{ pass

module.exports = {

    // {{{ test pass#pattern1

    'test pass#pattern1': function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        var f = T_Function.pass(sayHi, 'Fred');

        f().should.equal('Hi, Fred');

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