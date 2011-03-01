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
// {{{ toBoolean

module.exports = {

    // {{{ test toBoolean#standard

    'test toBoolean#standard': function() {

        var ret;

        ret = T_NX.toBoolean('y');
        ret.should.equal(true);

        ret = T_NX.toBoolean('yes');
        ret.should.equal(true);

        ret = T_NX.toBoolean({});
        ret.should.equal(true);

        ret = T_NX.toBoolean(null);
        ret.should.equal(false);

        ret = T_NX.toBoolean(undefined);
        ret.should.equal(false);

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
