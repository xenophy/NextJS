/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('should');
assert = require('assert');

// }}}
// {{{ NX.util.Format Class Tests

module.exports = {

    // {{{ 'test number#pattern1'

    'test number#pattern1': function(beforeExit) {

    },

    // }}}
    // {{{ 'test currency#pattern1'

    'test currency#pattern1': function(beforeExit) {

        var ret = NX.util.Format.currency(1000, "¥", -1);

        ret.should.equal('¥1,000');

        var ret = NX.util.Format.currency(1000, '', -1);

        ret.should.equal('$1,000');

        var ret = NX.util.Format.currency(-1000, '', -1);

        ret.should.equal('-$1,000');

        var ret = NX.util.Format.currency(1000, '', 5);

        ret.should.equal('$1,000.00000');

        var ret = NX.util.Format.currency(1000, "円", -1, true);

        ret.should.equal('1,000円');
    },

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
