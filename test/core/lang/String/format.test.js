/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_String = require('NX/core/lang/String');

// }}}
// {{{ format

module.exports = {

    // {{{ test format#pattern1

    'test format#pattern1': function() {

        var str = 'There are %d monkeys in the %s';
        var ret = T_String.format(str, 5, 'Japan');

        ret.should.equal('There are 5 monkeys in the Japan');
    },

    // }}}
    // {{{ test format#pattern2

    'test format#pattern2': function() {

        var str = 'The %2$s contains %1$d monkeys';
        var ret = T_String.format(str, 5, 'Japan');

        ret.should.equal('The Japan contains 5 monkeys');
    },

    // }}}
    // {{{ test format#pattern3

    'test format#pattern3': function() {

        var n = 43951789;
        var u = -43951789;
        var c = 65; // ASCII Code 'A'

        T_String.format("%%b = '%b'", n).should.equal("%b = '10100111101010011010101101'");
        T_String.format("%%c = '%c'", c).should.equal("%c = 'A'");
        T_String.format("%%d = '%d'", n).should.equal("%d = '43951789'");
        T_String.format("%%e = '%e'", n).should.equal("%e = '4.395179e+7'");
        T_String.format("%%u = '%u'", n).should.equal("%u = '43951789'");
        T_String.format("%%u = '%u'", u).should.equal("%u = '4251015507'");
        T_String.format("%%f = '%f'", n).should.equal("%f = '43951789.000000'");
        T_String.format("%%o = '%o'", n).should.equal("%o = '247523255'");
        T_String.format("%%s = '%s'", n).should.equal("%s = '43951789'");
        T_String.format("%%x = '%x'", n).should.equal("%x = '29ea6ad'");
        T_String.format("%%X = '%X'", n).should.equal("%X = '29EA6AD'");
        T_String.format("%%+d = '%+d'", n).should.equal("%+d = '+43951789'");
        T_String.format("%%+d = '%+d'", u).should.equal("%+d = '-43951789'");
        T_String.format("%%+d = '% d'", n).should.equal("%+d = ' 43951789'");
        T_String.format("%%z = '%z'", n).should.equal("%z = '%z'");
        T_String.format("abcde", n).should.equal("abcde");

    },

    // }}}
    // {{{ test format#pattern4

    'test format#pattern4': function() {

        var s = 'monkey';
        var t = 'many monkeys';

        T_String.format("[%s]", s).should.equal('[monkey]');
        T_String.format("[%10s]", s).should.equal('[    monkey]');
        T_String.format("[%-10s]", s).should.equal('[monkey    ]');
        T_String.format("[%010s]", s).should.equal('[0000monkey]');
        T_String.format("[%'#10s]", s).should.equal('[####monkey]');
        T_String.format("[%10.10s]", t).should.equal('[many monke]');

    },

    // }}}
    // {{{ test format#pattern5

    'test format#pattern5': function() {

        T_String.format("%04d-%02d-%02d", 1979, 5, 16).should.equal('1979-05-16');
        T_String.format("%0!d-%02d-%02d", 1979, 5, 16).should.equal('%0!d-1979-05');
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
