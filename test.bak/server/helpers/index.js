
var connect = require('connect'),
    assert = require('assert'),
    http = require('http'),
    net = require('net'),
    sys = require('sys');

var port = NX.HTTP_SERVER_TESTPORT = 12345;

connect.Server.prototype.testHelper = function(){

    var self = this,
        client = http.createClient(port),
        pending = 0;

    this.request = function() {

        if (self.pending === undefined) {
            ++pending;
        }

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

    this.assertResponse = function(method, path, expectedStatus, expectedBody, msg, fn) {

        msg = msg || 'expected';

        var req = this.request(method, path);

        req.buffer = true;

        req.addListener('response', function(res){
            res.addListener('end', function(){
                if (expectedBody !== undefined) {
                    assert.equal(expectedBody,
                        res.body,
                        msg + ' response body of ' + sys.inspect(expectedBody) + ', got ' + sys.inspect(res.body));
                }
                assert.equal(expectedStatus,
                    res.statusCode,
                    msg + ' status code of ' + expectedStatus + ', got ' + res.statusCode);
                if (fn) fn(res);
            });
        });
        req.end();
    };

}

