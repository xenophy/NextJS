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

var tpl = new NX.util.Template();
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
    '<ul>',
    '{foreach from=foods item=item key=key}',
    '  <li>{key}.{item}</li>',
    '{/foreach}',
    '</ul>',
    '</html>'
].join("\n");

var bind = {
    foo: 'bar',
    foods: ['apple', 'orange', 'peach']
};

// }}}
// {{{ NX.util.Template Class Tests

module.exports = {

    // {{{ test commentCut

    'test commentCut' : function() {

        /*
        var text = NX.fs.readFileSync(__dirname + '/../shared/template/comment.html').toString();
        var html = tpl.fetch(text);
        var comp = [
            '<html>',
            '<head>',
            '</head>',
            '<body>',
            '    ',
            '    ',
            '</body>',
            '</html>'
        ].join('');

        html = html.replace(/[\n\r]/g, '');

        assert.equal(html, comp);
        */
    },

    // }}}
    // {{{ test simpleBind

    'test simpleBind' : function() {

        /*
        var text = NX.fs.readFileSync(__dirname + '/../shared/template/bind.html').toString();
        var html = tpl.fetch(text, {foo: 'bar'});

        console.log(html);
        */
    },

    // }}}
    // {{{ test foreach

    'test foreach' : function() {

        var text = NX.fs.readFileSync(__dirname + '/../shared/template/foreach.html').toString();
        var html = tpl.fetch(
            text,
            {
                foods: [
                    'apple',
                    'orange',
                    'peach'
                ],

                users: [{
                    id: '0001',
                    name: 'Jack',
                    hobby: [
                        'Collecting',
                        'Games'
                    ]
                },{
                    id: '0002',
                    name: 'Kazuhiro',
                    hobby: [
                        'Cooking',
                        'Games',
                        'Gardening'
                    ]
                },{
                    id: '0003',
                    name: 'mark'
                }]
            }
        );

        console.log(html);
    },

    // }}}
    // {{{ test fetch#standard

    'test fetch#standard': function() {

        /*
        var html = tpl.fetch(text, bind);

//        console.log(html);
//        assert.equal(html, '');
        */

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
