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
// {{{ createThrottled

module.exports = {

    // {{{ test createThrottled#pattern1

    'test createThrottled#pattern1': function(beforeExit) {

        var startTime = new Date();

        var cnt = 0;

        var nf = T_Function.createThrottled(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(100*cnt,1000);

            cnt++;

        }, 100);

        for(i=0; i<100; i++) {
            nf();
        }

        beforeExit(function() {

            cnt.should.equal(2);

        });

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
