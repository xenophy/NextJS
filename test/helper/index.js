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


        /*
        var req;
        if(method.substr(0, 5) == 'POST?') {
            var post_data = method.substr(5);
            method = 'POST';


var options = {
  host: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
            


            req = t.client.request.apply(t.client, [method, path, {
                'Content-Length': post_data.length,
            }]);
            console.log(post_data.length);
            console.log(post_data);
            req.write(post_data);
            req.end();
        } else {
            req = t.client.request.apply(t.client, [method, path]);
        }

        */


        /*
var request = connection.request("POST", uri, {
   'host':'github.com',
   "User-Agent": "NodeJS HTTP Client",
   'Content-Length': post_data.length,
 });

*/

/*

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
        */

        return req;
    },

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

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
