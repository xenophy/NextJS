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
// {{{ NX.data.Session Class Tests

module.exports = {

    // {{{ 'test createSession#pattern1'

    'test createSession#pattern1': function() {

        var s = NX.create('NX.data.Store');
        var req = {};

        s = s.createSession(req, {
            expires: '2011-07-11',
            cookie: {
                originalMaxAge: 14400000
            }
        });

        s.cookie.expires.getFullYear().should.equal(2011);
        s.cookie.expires.getMonth().should.equal(7-1);
        s.cookie.expires.getDate().should.equal(11);
        s.cookie.config.maxAge.should.equal(14400000);
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
