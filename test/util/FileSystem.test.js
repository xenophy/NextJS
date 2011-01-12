/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX.util.FileSystem Class Tests

module.exports = {

    // {{{ test basename#standard

    'test basename#standard': function() {

        var ret;

        ret = NX.fs.basename('/www/site/home.htm', '.htm');

        assert.equal(ret, 'home');

        ret = NX.fs.basename('ecra.php?p=1');

        assert.equal(ret, 'ecra.php?p=1');

    },

    // }}}
    // {{{ test dirname#standard

    'test dirname#standard': function() {

        var ret;

        ret = NX.fs.dirname('/etc/passwd');
        assert.equal(ret, '/etc');

        ret = NX.fs.dirname('c:/Temp/x');
        assert.equal(ret, 'c:/Temp');

    },

    // }}}
    // {{{ test pathinfo#standard

    'test pathinfo#standard': function() {

        var ret;

        ret = NX.fs.pathinfo('/www/htdocs/index.html', 1);
        assert.equal(ret, '/www/htdocs');

        ret = NX.fs.pathinfo('/www/htdocs/index.html', 'PATHINFO_BASENAME');
        assert.equal(ret, 'index.html');

    },

    // }}}
    // {{{ test exists#standard

    'test exists#standard': function(beforeExit) {

        var deferredRet = null;
        var callbackRet = null;

        NX.fs.exists('./testcase.txt')
        .next(function(exists) {
            deferredRet = exists;
        });

        NX.fs.exists('./testcase.txt', function(exists) {
            callbackRet = exists;
        })

        beforeExit(function(){
            assert.equal(deferredRet, false);
            assert.equal(callbackRet, false);
        });

    },

    // }}}
    // {{{ test existsSync#standard

    'test existsSync#standard': function(beforeExit) {

        assert.equal(NX.fs.existsSync('./testcase.txt'), false);

    },

    // }}}
    // {{{ test isReadable#standard

    'test isReadable#standard': function(beforeExit) {

        var deferredRet = null;
        var callbackRet = null;

        NX.fs.isReadable('./testcase.txt')
        .next(function(readable) {
            deferredRet = readable;
        });

        NX.fs.isReadable('./testcase.txt', function(readable) {
            callbackRet = readable;
        })

        beforeExit(function(){
            assert.equal(deferredRet, false);
            assert.equal(callbackRet, false);
        });

    },

    // }}}
    // {{{ test isReadableSync#standard

    'test isReadableSync#standard': function(beforeExit) {

        assert.equal(NX.fs.isReadableSync('./testcase.txt'), false);

    },

    // }}}
    // {{{ test isWritable#standard

    'test isWritable#standard': function(beforeExit) {

        var deferredRet = null;
        var callbackRet = null;

        NX.fs.isWritable('./testcase.txt')
        .next(function(writable) {
            deferredRet = writable;
        });

        NX.fs.isWritable('./testcase.txt', function(writable) {
            callbackRet = writable;
        })

        beforeExit(function(){
            assert.equal(deferredRet, false);
            assert.equal(callbackRet, false);
        });

    },

    // }}}
    // {{{ test isWritableSync#standard

    'test isWritableSync#standard': function(beforeExit) {

        assert.equal(NX.fs.isWritableSync('./testcase.txt'), false);

    },

    // }}}
    // {{{ test touch#standard

    'test touch#standard': function(beforeExit) {

        var ret = null;

        NX.fs.touch('./tc-touch.txt',function() {
            ret = NX.fs.existsSync('./tc-touch.txt');
            assert.equal(ret, true);
            NX.fs.unlinkSync('./tc-touch.txt');
        });

    },

    // }}}
    // {{{ test touch deferred#standard

    'test touch deferred#standard': function(beforeExit) {

        var ret;

        NX.fs.touch('./tc-touch-deferred.txt')
        .next(function() {
            ret = NX.fs.existsSync('./tc-touch-deferred.txt');
            assert.equal(ret, true);
            NX.fs.unlinkSync('./tc-touch-deferred.txt');
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
