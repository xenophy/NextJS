/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
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
// {{{ NX.util.Deferred Class Tests

var port = NX.HTTP_SERVER_TESTPORT;

module.exports = {

    // {{{ test next#standard

    'test createServer#standard': function(beforeExit) {

        NX.env.dirname = __dirname;

        var beforeListen = false;
        var afterListen = false;

        var staticServer = NX.createServer({
            listeners : {
                beforeListen : function() {
                    beforeListen = true;
                },

                afterListen : function() {
                    afterListen = true;
                }
            }
        });
        staticServer.listen(port);
        staticServer.testHelper(port);

        staticServer.assertResponse('GET', '/index.html', 200, fs.readFileSync(__dirname + '/public_html/index.html').toString('utf8'));

        beforeExit(function(){
            assert.equal(beforeListen, true);
            assert.equal(afterListen, true);
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
