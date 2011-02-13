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
// {{{ mongodb Tests

var srv = NX.createServer({
    servers: [{
        port: process.NXEnv.testport,
        path: __dirname + '/mongodb/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test mongodb#mod1

    'test mongodb#mod1': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/mongodb/public_html/mod1.result.html');
        srv.servers[0].server.assertResponse('GET', '/mod1.html', 200, file);
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
