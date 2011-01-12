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
// {{{ NX Class Tests

module.exports = {

    // {{{ test clone#standard

    'test clone#standard': function() {

        var o = {
            src: 'src object'
        };

        var c = NX.clone(o);

        assert.equal(o.src, 'src object');
        assert.equal(c.src, 'src object');

        o.src = 'changed';

        assert.equal(o.src, 'changed');
        assert.equal(c.src, 'src object');

        o.clone = function() {
            return NX.apply(o, {cloned: true});
        }
        c = NX.clone(o);

        assert.equal(o.src, 'changed');
        assert.equal(o.cloned, true);
        assert.equal(c.src, 'changed');
        assert.equal(c.cloned, true);

    },

    // }}}
    // {{{ test clone#function

    'test clone#function': function() {

        var o = function() {
            return 'original';
        };

        var c = NX.clone(o);

        assert.equal(o(), 'original');
        assert.equal(c(), 'original');

        o = function() {
            return 'replace';
        }

        assert.equal(o(), 'replace');
        assert.equal(c(), 'original');

    },

    // }}}
    // {{{ test clone#array

    'test clone#array': function() {

        var o = [1,2,3];
        var c = NX.clone(o);

        assert.equal(o[0], 1);
        assert.equal(o[1], 2);
        assert.equal(o[2], 3);
        assert.equal(c[0], 1);
        assert.equal(c[1], 2);
        assert.equal(c[2], 3);

        o.push(4);

        assert.equal(o.length, 4);
        assert.equal(c.length, 3);

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

        var c = NX.clone(o);

        assert.equal(o.cn[0].tag, 'a');
        assert.equal(o.cn[1].tag, 'span');
        assert.equal(c.cn[0].tag, 'a');
        assert.equal(c.cn[1].tag, 'span');
        assert.equal(o.obj[0].tag, 'a');
        assert.equal(o.obj[1].tag, 'span');
        assert.equal(c.obj[0].tag, 'a');
        assert.equal(c.obj[1].tag, 'span');

        c.cn.push({tag: 'div'});

        assert.equal(o.cn.length, 2);
        assert.equal(c.cn.length, 3);
        assert.equal(o.obj.length, 2);
        assert.equal(c.obj.length, 3);

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
