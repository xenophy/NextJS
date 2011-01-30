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
var fs = require('fs');

// }}}
// {{{ private

md = NX.util.MarkDown;
var LF = String.fromCharCode(10);

// }}}
// {{{ NX.util.MarkDown Class Tests

module.exports = {

    // {{{ test MarkDown#italics

    'test MarkDown#italics': function() {

        var src = '*This is italicized*, and so is this.';
        var dst = '<p><em>This is italicized</em>, and so is this.</p>';
        md.parse(src).should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#bold

    'test MarkDown#bold': function() {

        var src = '**This is bold**, and so is this.';
        var dst = '<p><strong>This is bold</strong>, and so is this.</p>';
        md.parse(src).should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#italics&bold

    'test MarkDown#italics&bold': function() {

        var src = 'You can use ***italics and bold together*** if you have to.';
        var dst = '<p>You can use <strong><em>italics and bold together</em></strong> if you have to.</p>';
        md.parse(src).should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#simplelink

    'test MarkDown#simplelink': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/simplelink.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/simplelink.html').toString('utf8');
        src = md.parse(src) + LF;
        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#advlink Title attributes

    'test MarkDown#advlink Title attributes': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/advlink.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/advlink.html').toString('utf8');
        src = md.parse(src) + LF;
        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#advlink Bare URLs

    'test MarkDown#advlink Bare URLs': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/advlink2.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/advlink2.html').toString('utf8');
        src = md.parse(src) + LF;
        /*
        console.log(src);
        console.log("-----");
        console.log(dst);
        console.log("-----");
        src.should.equal(dst);
        */

        // 保留....

    },

    // }}}
    // {{{ test MarkDown#headers

    'test MarkDown#headers': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/headers.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/headers.html').toString('utf8');
        src = md.parse(src) + LF;

        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#horizontal

    'test MarkDown#horizontal': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/horizontal.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/horizontal.html').toString('utf8');
        src = md.parse(src) + LF;

        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#simplelist

    'test MarkDown#simplelist': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/simplelist.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/simplelist.html').toString('utf8');
        src = md.parse(src) + LF;

        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#advlist

    'test MarkDown#advlist': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/advlist.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/advlist.html').toString('utf8');
        src = md.parse(src) + LF;

        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#blockquote

    'test MarkDown#blockquote': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/blockquote.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/blockquote.html').toString('utf8');
        src = md.parse(src) + LF;

        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#image

    'test MarkDown#image': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/image.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/image.html').toString('utf8');
        src = md.parse(src) + LF;

        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#inline

    'test MarkDown#inline': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/inline.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/inline.html').toString('utf8');
        src = md.parse(src) + LF;

        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#preformatted

    'test MarkDown#preformatted': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/preformatted.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/preformatted.html').toString('utf8');
        src = md.parse(src) + LF;

        src.should.equal(dst);

    },

    // }}}
    // {{{ test MarkDown#codespan

    'test MarkDown#codespan': function() {

        var src = fs.readFileSync(__dirname + '/MarkDown/codespan.mdown').toString('utf8');
        var dst = fs.readFileSync(__dirname + '/MarkDown/codespan.html').toString('utf8');
        src = md.parse(src) + LF;

        src.should.equal(dst);

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
