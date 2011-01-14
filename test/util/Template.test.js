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
// {{{ common settings

var tpl = NX.util.Template;
var text = [
    '<html>',
    '<head>',
    '  <style>',
    '{literal}',
    '    body {',
    '      margin: 0 auto;',
    '    }',
    '  </style>',
    '{/literal}',
    '</head>',
    '{* This is comment! *}',
    'foo value is {foo}!!',
    '</html>'
].join("\n");

var bind = {
    foo: 'bar'
};

// }}}
// {{{ NX.util.Template Class Tests

module.exports = {

    // {{{ test fetch#standard

    'test fetch#standard': function() {

        var html = tpl.fetch(text, bind);

//        console.log(html);
//        assert.equal(html, '');

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
