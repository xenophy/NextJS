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
// {{{ isNull

module.exports = {

    // {{{ test isNull#standard

    'test isNull#standard': function() {

        T_NX.isNull(null).should.equal(true);
        T_NX.isNull(123).should.equal(false);
        T_NX.isNull('string').should.equal(false);
        T_NX.isNull([]).should.equal(false);
        T_NX.isNull({}).should.equal(false);

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
