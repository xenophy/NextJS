/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('../helpers');
var assert = require('assert');
var http = require('http');
var fs = require('fs');

// }}}
// {{{ NX.server.HttpServer Class Tests

module.exports = {

    // {{{ test next#standard

    'test createServer#standard': function(beforeExit) {

        NX.env.dirname = __dirname;

        var port = NX.HTTP_SERVER_TESTPORT;
        var srv = NX.createServer();
        srv.listen(port);
        srv.testHelper(port);

        srv.assertResponse('GET', '/index.html', 200, fs.readFileSync(__dirname + '/public_html/index.html').toString('utf8'));

        beforeExit(function(){
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
