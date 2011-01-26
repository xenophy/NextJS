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
// {{{ task

var task = [];
var nexttask;

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

    // {{{ request

    request : function(config) {

        config = config || {};

        var me = this;
        var t = config.server;
        var method = config.method;
        var path = config.path;
        var data = config.data;

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

            res.body = '';
            res.setEncoding('utf8');
            res.addListener('data', function(chunk){ res.body += chunk });

            // 最後のタスク参照
            var lastTask = task.shift();

            nexttask = lastTask;
            if(lastTask) {

                if(lastTask.server === t.server) {
                    t.next = true;
                } else {
                    runserver.server.close()
                    t.running = false;
                    t.next = true;
                }
            } else {
                runserver.server.close();
                t.next = true;
            }

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
        var expectedStatus = config.expectedStatus;
        var expectedBody = config.expectedBody;
        var msg = config.msg;
        var fn = config.fn;

        // テスト中にリクエストがあった場合タスクに追加
        if(runserver && runserver.running === true && !t.next) {
            task.push(config);
            return;
        }

        runserver = t;
        t.next = false;

        if(t.running !== true) {
            t.server.listen(t.port);
            t.running = true;
        }

        console.log('#Server Requesting : ' + msg);

        var req = me.request({
            server: t,
            method: method,
            msg: msg,
            path: path,
            data: data
        });

        req.addListener('response', function(res) {
            res.addListener('end', function(){

                if(expectedBody !== undefined) {
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

                if(nexttask) {
                    nexttask.server.next = true;
                    me.assertResponse(nexttask);
                }

                if(task.length === 0) {
//                    runserver.close();

                }

            });
        });

        if(data) {
            req.write(data);
        }

        req.end();

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
