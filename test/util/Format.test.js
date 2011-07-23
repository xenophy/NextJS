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
    // {{{ 'test date#pattern1'

    'test date#pattern1': function(beforeExit) {

        NX.util.Format.date().should.equal('');
        NX.util.Format.date('2006-01-01').should.equal('01/01/2006');

    },

    // }}}
    // {{{ 'test dateRender#pattern1'

    'test dateRender#pattern1': function(beforeExit) {

        var f = NX.util.Format.dateRenderer('Y-m-d');
        var dt = new Date('2006-01-01');
        f(dt).should.equal('2006-01-01');

    },

    // }}}
    // {{{ 'test defaultValue#pattern1'

    'test defaultValue#pattern1': function(beforeExit) {

        NX.util.Format.defaultValue(undefined, 500).should.equal(500);

    },

    // }}}
    // {{{ 'test escapeRegex#pattern1'

    'test escapeRegex#pattern1': function(beforeExit) {

        NX.util.Format.escapeRegex('*').should.equal('\\*');

    },

    // }}}
    // {{{ 'test fileSize#pattern1'

    'test fileSize#pattern1': function(beforeExit) {

        NX.util.Format.fileSize(500).should.equal('500 bytes');
        NX.util.Format.fileSize(5000).should.equal('4.9 KB');
        NX.util.Format.fileSize(5000000).should.equal('4.8 MB');

    }

    // }}}


};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
