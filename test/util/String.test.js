/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX.util.String Class Tests

module.exports = {

    // {{{ test explode#standard

    'test explode#standard': function() {

        // assert.equal(called.func1, true);

        var str = 'v1,v2,v3,v4,v5';

        var ret = NX.explode(',', str);

        assert.equal(ret[0], 'v1');
        assert.equal(ret[1], 'v2');
        assert.equal(ret[2], 'v3');
        assert.equal(ret[3], 'v4');
        assert.equal(ret[4], 'v5');

        var ret = NX.explode(',');

        assert.equal(NX.isNull(ret), true);

        var ret = NX.explode('', str);

        assert.equal(ret, false);

        var ret = NX.explode(',', function() {});

        assert.equal(ret.length, 0);

        var ret = NX.explode(true, str);
        assert.equal(ret[0], 'v');
        assert.equal(ret[1], ',v2,v3,v4,v5');

        var ret = NX.explode(',', str, 3);
        assert.equal(ret[0], 'v1');
        assert.equal(ret[1], 'v2');
        assert.equal(ret[2], 'v3,v4,v5');

    },

    // }}}
    // {{{ test implode#standard

    'test implode#standard': function() {

        var arr = ['v1', 'v2', 'v3', 'v4', 'v5'];
        var o = {
            v1: '001',
            v2: '002',
            v3: '003',
            v4: '004',
            v5: '005'
        };
        var f = function() {};

        var ret = NX.implode(',', arr);

        assert.equal(ret, 'v1,v2,v3,v4,v5');

        var ret = NX.implode(arr);

        assert.equal(ret, 'v1v2v3v4v5');

        var ret = NX.implode(o);

        assert.equal(ret, '001002003004005');

        var ret = NX.implode(f);

        assert.equal(ret, f);


    },

    // }}}
    // {{{ test sprintf#standard

    'test sprintf#standard': function() {

        var str = 'There are %d monkeys in the %s';
        var ret = NX.sprintf(str, 5, 'Japan');

        assert.equal(ret, 'There are 5 monkeys in the Japan');

        var str = 'The %2$s contains %1$d monkeys';
        var ret = NX.sprintf(str, 5, 'Japan');
        assert.equal(ret, 'The Japan contains 5 monkeys');

        var n = 43951789;
        var u = -43951789;
        var c = 65; // ASCII Code 'A'

        assert.equal(NX.sprintf("%%b = '%b'", n), "%b = '10100111101010011010101101'");
        assert.equal(NX.sprintf("%%c = '%c'", c), "%c = 'A'");
        assert.equal(NX.sprintf("%%d = '%d'", n), "%d = '43951789'");
        assert.equal(NX.sprintf("%%e = '%e'", n), "%e = '4.395179e+7'");
        assert.equal(NX.sprintf("%%u = '%u'", n), "%u = '43951789'");
        assert.equal(NX.sprintf("%%u = '%u'", u), "%u = '4251015507'");
        assert.equal(NX.sprintf("%%f = '%f'", n), "%f = '43951789.000000'");
        assert.equal(NX.sprintf("%%o = '%o'", n), "%o = '247523255'");
        assert.equal(NX.sprintf("%%s = '%s'", n), "%s = '43951789'");
        assert.equal(NX.sprintf("%%x = '%x'", n), "%x = '29ea6ad'");
        assert.equal(NX.sprintf("%%X = '%X'", n), "%X = '29EA6AD'");
        assert.equal(NX.sprintf("%%+d = '%+d'", n), "%+d = '+43951789'");
        assert.equal(NX.sprintf("%%+d = '%+d'", u), "%+d = '-43951789'");
        assert.equal(NX.sprintf("%%+d = '% d'", n), "%+d = ' 43951789'");
        assert.equal(NX.sprintf("%%z = '%z'", n), "%z = '%z'");
        assert.equal(NX.sprintf("abcde", n), "abcde");

        var s = 'monkey';
        var t = 'many monkeys';

        assert.equal(NX.sprintf("[%s]", s), '[monkey]');
        assert.equal(NX.sprintf("[%10s]", s), '[    monkey]');
        assert.equal(NX.sprintf("[%-10s]", s), '[monkey    ]');
        assert.equal(NX.sprintf("[%010s]", s), '[0000monkey]');
        assert.equal(NX.sprintf("[%'#10s]", s), '[####monkey]');
        assert.equal(NX.sprintf("[%10.10s]", t), '[many monke]');


        assert.equal(NX.sprintf("%04d-%02d-%02d", 1979, 5, 16), '1979-05-16');

        assert.equal(NX.sprintf("%0!d-%02d-%02d", 1979, 5, 16), '%0!d-1979-05');
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
