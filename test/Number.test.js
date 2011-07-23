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
// {{{ NX.Number Class Tests

module.exports = {

    // {{{ 'test contains#pattern1'

    'test contains#pattern1': function() {

        NX.Number.constrain(5, 2, 10).should.equal(5);
        NX.Number.constrain(5, 2, 4).should.equal(4);
        NX.Number.constrain(1, 2, 4).should.equal(2);

    },

    // }}}
    // {{{ 'test snap#pattern1'

    'test snap#pattern1': function() {

        NX.Number.snap(5, 1, 2, 10).should.equal(5);
        NX.Number.snap(5, 2, 2, 10).should.equal(6);
        NX.Number.snap(5, 3, 2, 10).should.equal(6);
        NX.Number.snap(5, null, 2, 10).should.equal(5);
        NX.Number.snap(5, 3, 2, 10).should.equal(6);
        NX.Number.snap(2, 6, 2, 10).should.equal(2);
        NX.Number.snap(3, 6, 2, 10).should.equal(6);
        NX.Number.snap(3, -6, 2, 10).should.equal(2);
        NX.Number.snap(-3, 6, 2, 10).should.equal(2);
        NX.Number.snap(-3, -6, 2, 10).should.equal(2);
        NX.Number.snap(-6, -6, 2, 10).should.equal(2);
        NX.Number.snap(-50, 48, 10, 100).should.equal(10);
        NX.Number.snap(-50, 26, 0, 100).should.equal(0);

    },

    // }}}
    // {{{ 'test toFiexed#pattern1'

    'test toFixed#pattern1': function() {

        NX.Number.toFixed(5,10).should.equal('5.0000000000');

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
