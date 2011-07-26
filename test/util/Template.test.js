/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('should');
assert = require('assert');

// }}}
// {{{ NX.util.Template Class Tests

module.exports = {

    // {{{ 'test print#pattern1'

    'test print#pattern1': function(beforeExit) {

        var tpl = '<p><!--{value}--></p>';

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            value: 'teston',
        }, function(ret) {
            ret.should.equal('<p>teston</p>');
        });

    },

    // }}}
    // {{{ 'test foreach#pattern1'

    'test foreach#pattern1': function(beforeExit) {

        var tpl = [
            '<ul>',
            '<!--{foreach from=data item=item key=key}-->',
            '<li><!--{item}--></li>',
            '<!--{/foreach}-->',
            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>value1</li>',
            '<li>value2</li>',
            '<li>value3</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: [
                'value1',
                'value2',
                'value3'
            ]
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test foreach#pattern2'

    'test foreach#pattern2': function(beforeExit) {

        var tpl = [
            '<ul>',
            '<!--{foreach from=loop item=item key=key}-->',
                '<!--{foreach from=item item=v key=vkey}-->',
                '<li><!--{v.v}--></li>',
                '<!--{/foreach}-->',
            '<!--{/foreach}-->',
            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>1</li>',
            '<li>2</li>',
            '<li>3</li>',
            '<li>4</li>',
            '<li>5</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            loop: [
                [{v: 1}],
                [{v: 2}],
                [{v: 3}],
                [{v: 4}],
                [{v: 5}]
            ]
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test foreach#pattern3'

    'test foreach#pattern3': function(beforeExit) {

        var tpl = [
            '<ul>',
            '<!--{foreach from=data item=item key=key}-->',
            '<li><!--{item}--></li>',
            '<!--{foreachelse}-->',
            '<li>none</li>',
            '<!--{/foreach}-->',
            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>none</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: []
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test foreach#pattern4'

    'test foreach#pattern4': function(beforeExit) {

        var tpl = [
            '<ul>',
            '<!--{foreach from=data item=item key=key}-->',
            '<li><!--{item.a.b}--></li>',
            '<!--{/foreach}-->',
            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: [
                'value1',
                'value2',
                'value3'
            ]
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test if#pattern1'

    'test if#pattern1': function(beforeExit) {

        var tpl = [
            '<ul>',
            "<!--{if data == 'teston'}-->",
            '<li><!--{data}--></li>',
            '<!--{/if}-->',
            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>teston</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: 'teston'
        }, function(ret) {
            ret.should.equal(result);
        });

        var result = [
            '<ul>',
            '</ul>'
        ].join('');

        t.fetch(tpl, {
            data: 'teston2'
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test if#pattern2'

    'test if#pattern2': function(beforeExit) {

        var tpl = [
            '<ul>',
            "<!--{if data == 'teston'}-->",
            '<li><!--{data}--></li>',
            '<!--{else}-->',
            '<li>[<!--{data}-->]</li>',
            '<!--{/if}-->',
            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>[value]</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: 'value'
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test if#pattern3'

    'test if#pattern3': function(beforeExit) {

        var tpl = [
            '<ul>',
            "<!--{if data == 'teston'}-->",
            '<li><!--{data}--></li>',
            '<!--{elseif data == "hoge"}-->',
            '<li>(<!--{data}-->)</li>',
            '<!--{else}-->',
            '<li>[<!--{data}-->]</li>',
            '<!--{/if}-->',
            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>(hoge)</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: 'hoge'
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test if#pattern4'

    'test if#pattern4': function(beforeExit) {

        var tpl = [
            '<ul>',
            "<!--{if data == 'teston'}-->",
            '<li><!--{data}--></li>',
            '<!--{elseif data == "hoge"}-->',
            '<li>(<!--{data}-->)</li>',
            '<!--{elseif data == "foo"}-->',
            '<li><<!--{data}-->></li>',
            '<!--{else}-->',
            '<li>[<!--{data}-->]</li>',
            '<!--{/if}-->',
            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li><foo></li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: 'foo'
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test if#pattern5'

    'test if#pattern5': function(beforeExit) {

        var tpl = [
            '<ul>',

            "<!--{if data != 'teston'}-->",
            '<li><!--{data}--></li>',
            '<!--{/if}-->',

            "<!--{if data != 'teston2'}-->",
            '<li><!--{data}--></li>',
            '<!--{/if}-->',

            "<!--{if data2 < 500}-->",
            '<li><!--{data2}--></li>',
            '<!--{/if}-->',

            "<!--{if data2 < 100}-->",
            '<li><!--{data2}--></li>',
            '<!--{/if}-->',

            "<!--{if data3 > 500}-->",
            '<li><!--{data3}--></li>',
            '<!--{/if}-->',

            "<!--{if data3 > 1000}-->",
            '<li><!--{data3}--></li>',
            '<!--{/if}-->',

            "<!--{if data4 <= 500}-->",
            '<li><!--{data4}--></li>',
            '<!--{/if}-->',

            "<!--{if data4 <= 100}-->",
            '<li><!--{data4}--></li>',
            '<!--{/if}-->',

            "<!--{if data5 >= 500}-->",
            '<li><!--{data5}--></li>',
            '<!--{/if}-->',

            "<!--{if data5 >= 1000}-->",
            '<li><!--{data5}--></li>',
            '<!--{/if}-->',

            "<!--{if data6 === 1234}-->",
            '<li><!--{data6}--></li>',
            '<!--{/if}-->',

            "<!--{if data6 === '1234'}-->",
            '<li><!--{data6}--></li>',
            '<!--{/if}-->',

            "<!--{if data7 !== 1234}-->",
            '<li><!--{data7}--></li>',
            '<!--{/if}-->',

            "<!--{if data7 !== '1234'}-->",
            '<li><!--{data7}--></li>',
            '<!--{/if}-->',

            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>teston2</li>',
            '<li>200</li>',
            '<li>700</li>',
            '<li>500</li>',
            '<li>500</li>',
            '<li>1234</li>',
            '<li>1234</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data : 'teston2',
            data2: 200,
            data3: 700,
            data4: 500,
            data5: 500,
            data6: 1234,
            data7: '1234'
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test if#pattern6'

    'test if#pattern6': function(beforeExit) {

        var tpl = [
            '<ul>',

            "<!--{if 10 % 3}-->",
            '<li>true</li>',
            '<!--{/if}-->',

            "<!--{if 10 % 2}-->",
            '<li>true</li>',
            '<!--{/if}-->',

            "<!--{if !data}-->",
            '<li>false</li>',
            '<!--{/if}-->',

            "<!--{if !data2}-->",
            '<li>true</li>',
            '<!--{/if}-->',

            "<!--{if true}-->",
            '<li>true</li>',
            '<!--{/if}-->',

            "<!--{if false}-->",
            '<li>false</li>',
            '<!--{/if}-->',

            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>true</li>',
            '<li>false</li>',
            '<li>true</li>',
            '<li>false</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: false,
            data2: true
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test if#pattern7'

    'test if#pattern7': function(beforeExit) {

        var tpl = [
            '<ul>',

            "<!--{if 1 == true}-->",
            '<li>true</li>',
            '<!--{/if}-->',

            "<!--{if 0 == false}-->",
            '<li>false</li>',
            '<!--{/if}-->',

            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>true</li>',
            '<li>false</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: 50
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test if#pattern8'

    'test if#pattern8': function(beforeExit) {

        var tpl = [
            '<ul>',

            "<!--{if 0 < data and 100 > data}-->",
            '<li><!--{data}--></li>',
            '<!--{/if}-->',

            "<!--{if 0 < data and 1 == data and 100 > data}-->",
            '<li><!--{data}--></li>',
            '<!--{/if}-->',

            "<!--{if 10 > data or 30 < data or 51 < data}-->",
            '<li><!--{data}--></li>',
            '<!--{/if}-->',

            "<!--{if 10 > 1 and 30 == 31 or 51 < 100}-->",
            '<li>true</li>',
            '<!--{/if}-->',

            "<!--{if 0 < data && 100 > data}-->",
            '<li><!--{data}--></li>',
            '<!--{/if}-->',

            "<!--{if 0 < data && 1 == data && 100 > data}-->",
            '<li><!--{data}--></li>',
            '<!--{/if}-->',

            "<!--{if 10 > data || 30 < data || 51 < data}-->",
            '<li><!--{data}--></li>',
            '<!--{/if}-->',

            "<!--{if 10 > 1 && 30 == 31 || 51 < 100}-->",
            '<li>true</li>',
            '<!--{/if}-->',

            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>50</li>',
            '<li>50</li>',
            '<li>true</li>',
            '<li>50</li>',
            '<li>50</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            data: 50
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test if#pattern9'

    'test if#pattern9': function(beforeExit) {

        var tpl = [

            "<!--{if true == true}-->",
                "<!--{if true == false}-->",
                    '<p>true</p>',
                "<!--{else}-->",
                    '<p>false</p>',
                '<!--{/if}-->',
            '<!--{/if}-->',

        ].join('');

        var result = [
            '<p>false</p>',
        ].join('');

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test include#pattern1'

    'test include#pattern1': function(beforeExit) {

        var tpl = "<!--{include file='foo.html' outvar='Next JS' outvar2=true outvar3=false}-->";
        var t = NX.create('NX.util.Template', {
            exec: 'test/shared/util/Template'
        });

        var result = [
            "<p>Next&nbsp;JS</p>",
            "<p>true</p>",
            "<p>false</p>"
        ].join("\n");

        t.fetch(tpl, {
        }, function(ret) {
            ret.should.equal(result + "\n");
        });

    },

    // }}}
    // {{{ 'test modifier#pattern1'

    'test modifier#pattern1': function(beforeExit) {

        var tpl = [
            '<p><!--{number|numberFormat}--></p>',
            '<p><!--{string|capitalize}--></p>',
            '<p><!--{text|nl2br}--></p>'
        ].join('');
        var t = NX.create('NX.util.Template');

        var result = [
            '<p>5,000</p>',
            '<p>Teston</p>',
            "<p>line1<br />line2<br />line3</p>",
        ].join("");

        t.fetch(tpl, {
            price: 5000,
            number: 5000,
            string: 'teston',
            text: [
                'line1',
                'line2',
                'line3'
            ].join("\n"),
        }, function(ret) {
            ret.should.equal(result);
        });

    },

    // }}}
    // {{{ 'test comment#pattern1'

    'test comment#pattern1': function(beforeExit) {

        var tpl = '<p><!-- コメント --></p>';

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
            value: 'teston',
        }, function(ret) {
            ret.should.equal('<p><!-- コメント --></p>');
        });

    },

    // }}}
    // {{{ 'test literal#pattern1'

    'test literal#pattern1': function(beforeExit) {

        var tpl = NX.Fs.readFileSync('test/shared/util/Template/templates/literal.html').toString();
        var rtpl = NX.Fs.readFileSync('test/shared/util/Template/templates/literal.result.html').toString();

        var t = NX.create('NX.util.Template');

        t.fetch(tpl, {
        }, function(ret) {
            ret.should.equal(rtpl);
        });

    },

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
