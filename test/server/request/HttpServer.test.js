/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('../../helper');
var should = require('should');
var fs = require('fs');
var queryString = require('querystring');

// }}}
// {{{ NX.server.HttpServer Class Tests

module.exports = {

    // {{{ test createServer#standard

    'test createServer#standard': function() {

        process.NXEnv.dirname = __dirname;

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport++
            }]
        });

        var post_data;

        srv.assertResponse(srv.servers[0], 'GET', '/', 200, fs.readFileSync(__dirname + '/public_html/index.result.html'), 'request', function(req, res) {
            /*
            console.log("----------");
            console.log(fs.readFileSync(__dirname + '/public_html/index.result2.html').toString('utf8'));
            console.log("----------");
            console.log(res.body.toString('utf8'));
            console.log("----------");
            */
        });
        srv.assertResponse(srv.servers[0], 'GET', '/?person=urlrequest', 200, fs.readFileSync(__dirname + '/public_html/index.result2.html'), 'request' , function(req, res) {
            /*
            console.log("----------");
            console.log(fs.readFileSync(__dirname + '/public_html/index.result2.html').toString('utf8'));
            console.log("----------");
            console.log(res.body.toString('utf8'));
            console.log("----------");
            */
        });

        post_data = NX.encode({person: 'kotsutsumi'});
        srv.assertResponse(srv.servers[0], 'POST?' + post_data, '/', 200, fs.readFileSync(__dirname + '/public_html/index.result3.html'), 'request', function(req, res) {
            /*
            console.log("----------");
            console.log(fs.readFileSync(__dirname + '/public_html/index.result3.html').toString('utf8'));
            console.log("----------");
            console.log(res.body.toString('utf8'));
            console.log("----------");
            */
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
