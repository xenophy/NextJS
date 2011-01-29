/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert'),
    http = require('http'),
    fs = require('fs'),
    helpers = require('../helpers');

// }}}
// {{{ Other Tests

module.exports = {

    // {{{ test createServer#wrong listeners

    'test createServer#wrong listeners': function() {

        try {
            var srv = NX.createServer({
                servers: {}
            });

            srv.listen();
        } catch (e) {
            e.message.should.equal('specify an array of listeners.');
        }

    },

    // }}}
    // {{{ test createServer#wrong port

    'test createServer#wrong port': function() {

        try {
            var srv = NX.createServer({
                servers: [{
                    port: 'string'
                }]
            });

            srv.listen();

        } catch (e) {
            e.message.should.equal('specify an number of port.');
        }

    },

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
