/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var connect = require('connect'),
    helpers = require('./helpers'),
    assert = require('assert'),
    http = require('http');

// }}}
// {{{ NX.util.Deferred Class Tests

module.exports = {

    // {{{ test next#standard

    'test createServer#standard': function() {

        /*
        var helloWorldServer = NX.createServer();
        helloWorldServer.use('/world', function(req, res){
            assert.equal('/hello', helloWorldServer.route);
            res.writeHead(200);
            res.end('hello world');
        });

        var server = helpers.run();
        server.use('/hello', helloWorldServer);
        server.use('/hello', function(req, res){
            res.writeHead(200);
            res.end('hello');
        });

        server.assertResponse('GET', '/hello/world', 200, 'hello world', 'Test mounting /hello/world');
        server.assertResponse('GET', '/hello', 200, 'hello', 'Test mounting /hello');
        */

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
