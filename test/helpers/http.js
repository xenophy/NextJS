
/**
 * Module dependencies.
 */

var connect = require('connect'),
    assert = require('assert'),
    http = require('http'),
    net = require('net'),
    sys = require('sys');

/**
 * Test base port.
 */

var port = exports.port = process.env.CONNECT_TEST_PORT || 12345;

connect.Server.prototype.listen = function(){
    var self = this,
        cookies = [],
        client = http.createClient(port),
        pending = 0;

    /**
     * Request helper.
     */

    this.request = function() {

        if (self.pending === undefined) ++pending;

        var req = client.request.apply(client, arguments);

        req.addListener('response', function(res){

            if (req.buffer) {
                res.body = '';
                res.setEncoding('utf8');
                res.addListener('data', function(chunk){ res.body += chunk });
            }

            if (self.pending === undefined) {
                if (!--pending) {
                    self.close();
                }
            } else if (!--self.pending) {
                self.close();
            }
        });

        return req;
    };

    /**
     * Response assertion helper.
     */

    this.assertResponse = function(method, path, expectedStatus, expectedBody, msg, fn){

        msg = msg || 'expected';

        var data;
        var options = {};

        if(NX.isObject(path)) {

            var o = path;

            path = o.path;
            cookies = o.cookies;
            accept = o.accept;
            ua = o.ua;
            serverAlive = o.serverAlive;

            if(o.planedata !== true) {
                data = NX.encode(o.data);
            } else {
                data = o.data;
            }
            contentType = o.contentType;

            if(method === 'POST' && data) {

                options = {
                    'Content-Length': data.length
                };

                if(ua) {
                    options['User-Agent'] = ua;
                }

                if(!contentType) {
                    options['Content-Type'] = 'application/json';
                }else {
                    options['Content-Type'] = contentType;
                }

                if(cookies) {
                    var cookie = {};
                    cookies.forEach(function(item) {
                        NX.apply(cookie, item);
                    });
                    options['Cookie'] = NX.encode(cookie);
                }
            } else {

                if(accept) {
                    options['Accept'] = accept;
                }

                if(ua) {
                    options['User-Agent'] = ua;
                }

                if(cookies) {
                    var cookie = ''
                    cookies.forEach(function(item, i) {
                        if(i>0) {
                            cookie += '; ';
                        }
                        NX.iterate(item, function(key, v) {
                            cookie += key + '=' + v;
                        });
                    });
                    options['Cookie'] = cookie;
                }

            }

            if(serverAlive) {
                pending++;
            }
            if(serverAlive === false) {
                pending--;
            }
        }

        var req = this.request(method, path, options);

        req.buffer = true;

        req.addListener('response', function(res){
            res.addListener('end', function(){

                if (expectedBody !== undefined) {

                    assert.equal(expectedBody,
                        res.body,
                        //msg + ' response body of ' + sys.inspect(expectedBody) + ', got ' + sys.inspect(res.body));
                        '[' + msg + ']\n' + expectedBody.toString('utf8') + '\n=======================\n' + res.body.toString('utf8') + '=====================\n'
                    );

                }
                assert.equal(expectedStatus,
                    res.statusCode,
                    msg + ' status code of ' + expectedStatus + ', got ' + res.statusCode);

                if(NX.isFunction(fn)) {

                    res.cookies = null;

                    var cookies = [];
                    var setCookie = res.headers['set-cookie'] || [];
                    setCookie.forEach(function(line) {
                        line = line.split(' ');

                        line.forEach(function(item, i) {

                            if(i === 0) {
                                item = item.split('=');
                                var name = item[0];
                                var value = item[1];
                                var o = {};
                                o[name] = value;
                                cookies.push(o);
                                return false;
                            }
                        });

                    });

                    if(cookies.length > 0) {
                        res.cookies = cookies;
                    }

                    fn(res);
                }
            });
        });

        if(data) {
            req.write(data);
        }

        req.end();
    };

    /**
     * Assert response headers.
     */

    this.assertResponseHeaders = function(method, path, headers){
        var req = this.request(method, path);
        req.addListener('response', function(res){
            for (var key in headers) {
                assert.equal(headers[key], res.headers[key],
                    'expected response header ' + key + ' of "' + headers[key] + '"'
                    + ', got "' + res.headers[key] + '"');
            }
        });
        req.end();
    };

    net.Server.prototype.listen.call(this, this.port = port++, '127.0.0.1');
    return this;
}
