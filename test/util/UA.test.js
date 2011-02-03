/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');
var should = require('should');

// }}}
// {{{ NX.util.UA Class Tests

module.exports = {

    // {{{ test UA#isAndroid

    'test UA#isAndroid': function() {

        var ua;

        // HT-03A / DoCoMo / 1.5
        ua = 'Mozilla/5.0 (Linux; U; Android 1.5; ja-jp; HT-03A Build/CDB72) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1';
        NX.util.UA.isAndroid(ua).should.equal(true);

        // HT-03A / DoCoMo / 1.6
        ua = 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; Docomo HT-03A Build/DRD08) AppleWebKit/528.5+(KHTML, like Gecko) Version/3.1.2 Mobile Safari/ 525.20.1';
        NX.util.UA.isAndroid(ua).should.equal(true);

        // Xperia / 1.6
        ua = 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B Build/R1EA018) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1';
        NX.util.UA.isAndroid(ua).should.equal(true);

        // HTC Desire / SoftBank / 2.1
        ua = 'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; HTCX06HT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17';
        NX.util.UA.isAndroid(ua).should.equal(true);

        // IS01 / Au / 1.6
        ua = 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S6191) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1';
        NX.util.UA.isAndroid(ua).should.equal(true);

    },

    // }}}
    // {{{ test UA#isChrome

    'test UA#isChrome': function() {

        var ua;

        ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.55 Safari/533.4';
        NX.util.UA.isChrome(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isGecko

    'test UA#isGecko': function() {

        var ua;

        ua = 'Mozilla/5.0 (Windows; U; Windows NT 6.0; ja; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9';
        NX.util.UA.isGecko(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isGecko2

    'test UA#isGecko2': function() {

        var ua;

        ua = 'Mozilla/5.0 (Windows; U; Windows NT 6.0; ja; rv:1.8.2.9) Gecko/20100824 Firefox/3.6.9';
        NX.util.UA.isGecko2(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isGecko3

    'test UA#isGecko3': function() {

        var ua;

        ua = 'Mozilla/5.0 (Windows; U; Windows NT 6.0; ja; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9';
        NX.util.UA.isGecko3(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isWebkit

    'test UA#isWebkit': function() {

        var ua;

        ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.55 Safari/533.4';
        NX.util.UA.isWebkit(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isOpera

    'test UA#isOpera': function() {

        var ua;

        ua = 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux i686; ja) Opera 10.10';
        NX.util.UA.isOpera(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isIE

    'test UA#isIE': function() {

        var ua;

        ua = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)';
        NX.util.UA.isIE(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isIE6

    'test UA#isIE6': function() {

        var ua;

        ua = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)';
        NX.util.UA.isIE6(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isIE7

    'test UA#isIE7': function() {

        var ua;

        ua = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.1)';
        NX.util.UA.isIE7(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isIE8

    'test UA#isIE8': function() {

        var ua;

        ua = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.04506.648)';
        NX.util.UA.isIE8(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isMac

    'test UA#isMac': function() {

        var ua;

        ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.55 Safari/533.4';
        NX.util.UA.isMac(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isWindows

    'test UA#isWindows': function() {

        var ua;

        ua = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; InfoPath.1';
        NX.util.UA.isWindows(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isLinux

    'test UA#isLinux': function() {

        var ua;

        ua = 'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux i686) Opera 7.23 [ja]';
        NX.util.UA.isLinux(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isiPod

    'test UA#isiPod': function() {

        var ua;

        ua = 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; ja-jp) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A110a Safari/419.3';
        NX.util.UA.isiPod(ua).should.equal(true);

    },

    // }}}
    // {{{ test UA#isiPad

    'test UA#isiPad': function() {

        var ua;

        ua = 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10';
        NX.util.UA.isiPad(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isiPhone

    'test UA#isiPhone': function() {

        var ua;

        ua = 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3';
        NX.util.UA.isiPhone(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isXperia

    'test UA#isXperia': function() {

        var ua;

        ua = 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B Build/XXXXXXX) AppleWebkit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.';
        NX.util.UA.isXperia(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isSafari

    'test UA#isSafari': function() {

        var ua;

        ua = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; ja-jp) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.6';
        NX.util.UA.isSafari(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isSafari2

    'test UA#isSafari2': function() {

        var ua;

        ua = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; ja-jp) AppleWebKit/412 (KHTML, like Gecko) Safari/412';
        NX.util.UA.isSafari2(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isSafari3

    'test UA#isSafari3': function() {

        var ua;

        ua = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; ja-jp) AppleWebKit/522.11.1 (KHTML, like Gecko) Version/3.0.3 Safari/522.12.1';
        NX.util.UA.isSafari3(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isSafari4

    'test UA#isSafari4': function() {

        var ua;

        ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; ja-jp) AppleWebKit/528.16 (KHTML, like Gecko) Version/4.0 Safari/528.16';
        NX.util.UA.isSafari4(ua).should.equal(true);
    },

    // }}}
    // {{{ test UA#isSafari5

    'test UA#isSafari5': function() {

        var ua;

        ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; ja-jp) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16';
        NX.util.UA.isSafari5(ua).should.equal(true);
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
