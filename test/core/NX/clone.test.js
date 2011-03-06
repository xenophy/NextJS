/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_NX = require('NX/core');

// }}}
// {{{ clone

module.exports = {

    // {{{ test clone#standard

    'test clone#standard': function() {

        var o = {
            src: 'src object'
        };

        var c = T_NX.clone(o);

        o.src.should.equal('src object');
        c.src.should.equal('src object');

        o.src = 'changed';

        o.src.should.equal('changed');
        c.src.should.equal('src object');

    },

    // }}}
    // {{{ test clone#function

    'test clone#function': function() {

        var o = function() {
            return 'original';
        };

        var c = T_NX.clone(o);

        o().should.equal('original');
        c().should.equal('original');

        o = function() {
            return 'replace';
        }

        o().should.equal('replace');
        c().should.equal('original');

    },

    // }}}
    // {{{ test clone#array

    'test clone#array': function() {

        var o = [1,2,3];
        var c = T_NX.clone(o);

        o[0].should.equal(1);
        o[1].should.equal(2);
        o[2].should.equal(3);

        c[0].should.equal(1);
        c[1].should.equal(2);
        c[2].should.equal(3);

        o.push(4);

        o.length.should.equal(4);
        c.length.should.equal(3);

    },

    // }}}
    // {{{ test clone#nested

    'test clone#nested': function() {

        var o = {
            cn: [{
                tag: 'a'
            },{
                tag: 'span'
            }]
        };
        o.obj = o.cn;

        var c = T_NX.clone(o);

        o.cn[0].tag.should.equal('a');
        o.cn[1].tag.should.equal('span');

        c.cn[0].tag.should.equal('a');
        c.cn[1].tag.should.equal('span');

        o.obj[0].tag.should.equal('a');
        o.obj[1].tag.should.equal('span');

        c.obj[0].tag.should.equal('a');
        c.obj[1].tag.should.equal('span');

        c.cn.push({tag: 'div'});

        o.cn.length.should.equal(2);
        c.cn.length.should.equal(3);

        o.obj.length.should.equal(2);
        c.obj.length.should.equal(2);

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
