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
// {{{ NX.server.HttpServer override

NX.override(NX.server.HttpServer, {

    request: function(t, method, path) {

        var me = this;

        if(t.client === undefined) {
            t.client = http.createClient(t.port);
        }

        if(t.pending === undefined) {
            t.pending = 0;
        }
        t.pending++;

        var req = t.client.request.apply(t.client, [method, path]);

        req.addListener('response', function(res){

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

    assertResponse: function(target, method, path, expectedStatus, expectedBody, msg, fn) {

        var me = this;

        if(target.started !== true) {
            target.server.listen(target.port);
            target.started = true;
        }

        var req = me.request(target, method, path);

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

        req.end();
    }

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
