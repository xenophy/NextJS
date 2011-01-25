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
    net = require('net'),
    sys = require('sys');

// }}}
// {{{ running servers

var runserver;

// }}}
// {{{ waiting servers

var waitingServers = [];

// }}}
// {{{ NX.server.HttpServer override

NX.override(NX.server.HttpServer, {

    /*
    request: function(t, method, path) {

        var me = this;

        if(t.client === undefined) {
//            t.client = http.createClient(t.port);
        }

        if(t.pending === undefined) {
            t.pending = 0;
        }
        t.pending++;

        var post_data;
        if(method.substr(0, 5) == 'POST?') {
            post_data = method.substr(5);
            method = 'POST';
        }

        var options = {
            port: t.port,
            path: path,
            method: method
        };

        if(post_data) {
            options.headers = {
                'Content-Type': 'application/json',
                'Content-Length': post_data.length
            };
        }

        var req = http.request(options, function(res) {

            if (req.buffer) {
                res.body = '';
                res.setEncoding('utf8');
                res.addListener('data', function(chunk){ res.body += chunk });
            }

            if(!--t.pending) {
                t.server.close();
            }

        });

        return req;
    },
    */

    /*
    assertResponse: function(target, method, path, expectedStatus, expectedBody, msg, fn) {

        var me = this;

        target.msg = msg;

        if(target.started !== true) {
            target.server.listen(target.port);
            target.started = true;
        }

        var req = me.request(target, method, path);

        var post_data;
        if(method.substr(0, 5) == 'POST?') {
            post_data = method.substr(5);
            method = 'POST';
        }

        req.buffer = true;
        req.addListener('response', function(res){
            res.addListener('end', function(){
                if (expectedBody !== undefined) {
                    assert.equal(
                        expectedBody,
                        res.body,
                        msg + ' response body of ' + sys.inspect(expectedBody) + ', got ' + sys.inspect(res.body)
                    );
                }
                assert.equal(
                    expectedStatus,
                    res.statusCode,
                    msg + ' status code of ' + expectedStatus + ', got ' + res.statusCode
                );

                if(fn) {
                    fn(req, res);
                }
            });
        });

        if(post_data) {
            req.write(post_data);
        }

        req.end();
    }
    */

    // {{{ testRequest

    testRequest : function(config) {

        config = config || {};

        var t = config.server;
        var method = config.method;
        var path = config.path;

        t.pending = t.pending || 0;
        t.pending++;

        var options = {
            port: t.port,
            path: path,
            method: method
        };

        if(method === 'POST') {
            options.headers = {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            };
        }

        var req = http.request(options, function(res) {

            console.log("res?");
            if (req.buffer) {
                res.body = '';
                res.setEncoding('utf8');
                res.addListener('data', function(chunk){ res.body += chunk });
            }

            /*
            if(!--t.pending) {
                t.server.close();
            }
            */

        });

        return req;
    },

    // }}}
    // {{{ assertResponse

    assertResponse : function(config) {

        config = config || {};

        var me = this;
        var t = config.server;
        var method = config.method;
        var path = config.path;
        var data = config.data;

        if(t.running == true && runserver !== t) {
            waitingServers.push(t);
            return;
        }
        runserver = t;

        if(t.running !== true) {
            t.server.listen(t.port);
            t.running = true;
        }

        var req = me.testRequest({
            server: t,
            method: method,
            path: path,
            data: data
        });

        req.addListener('response', function(res) {
            console.log("response");
            res.addListener('end', function(){
                console.log("end");
            });
        });


    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
