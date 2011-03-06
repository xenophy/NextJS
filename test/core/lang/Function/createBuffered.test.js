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
// {{{ createBuffered

module.exports = {

    // {{{ test createBuffered#pattern1

    'test createBuffered#pattern1': function() {

        var startTime = new Date();

        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10,1000);

        };

        T_Function.createBuffered(f, 10)();

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
