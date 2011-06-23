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
// {{{ NX.Class Class Tests

module.exports = {

    // {{{ test constructor#pattern1

    'test constructor#pattern1': function() {

        var test;

        var f = function() {
            test = 'trace';
        };
        f.prototype.foo = 'bar';
        var clsDef = new NX.Class(f);
        var cls = new clsDef();
        test.should.equal('trace');

    },

    // }}}
    // {{{ test constructor#pattern2

    'test constructor#pattern2': function() {

        var test;
        var f = function() {};
        var clsDef = new NX.Class(f, {preprocessors: [function() {
            test = 'trace';
        }]});
        var cls = new clsDef();
        test.should.equal('trace');

    },

    // }}}
    // {{{ test getPreprocessor#pattern1

    'test getPreprocessor#pattern1': function() {

        NX.Class.registerPreprocessor('foo', function() { return 'foo' });

        var foo = NX.Class.getPreprocessor('foo');
        foo.name.should.equal('foo');
        foo.always.should.equal(false);
        foo.fn().should.equal('foo');
    },

    // }}}
    // {{{ test setDefaultPreprocessorPosition#pattern1

    'test setDefaultPreprocessorPosition#pattern1': function() {

        NX.Class.setDefaultPreprocessors([
            'processor1',
            'processor2',
            'processor3'
        ]);

        NX.Class.setDefaultPreprocessorPosition('processor4', 'last');

        NX.Class.getDefaultPreprocessors()[0].should.equal('processor1');
        NX.Class.getDefaultPreprocessors()[1].should.equal('processor2');
        NX.Class.getDefaultPreprocessors()[2].should.equal('processor3');
        NX.Class.getDefaultPreprocessors()[3].should.equal('processor4');

        NX.Class.setDefaultPreprocessors([
            'className',
            'loader',
            'extend',
            'statics',
            'inheritableStatics',
            'mixins',
            'config' 
        ]);

    },

    // }}}
    // {{{ test extend#pattern1

    'test extend#pattern1': function() {

        var f = function() {
        };
        f.prototype = {
            $inheritableStatics: ['self']
        };
        f.self = 123;

        NX.define('NX.Class.extend.p1cls', {
            extend: f
        });

        NX.Class.extend.p1cls.self.should.equal(123);

    },

    // }}}
    // {{{ test extend#pattern2

    'test extend#pattern2': function() {

        var test, test2;
        var f = function() {
        };
        var g = function() {
        };
        g.prototype.$onExtended = function() {
            test = 'trace';
        }
        var clsDef = new NX.Class(f, {
            extend: g,
            onClassExtended: function() {
                test2 = 'trace';
            }
        });
        var cls = new clsDef();

        var clsDef2 = new NX.Class(f, {
            extend: clsDef
        });

        test.should.equal('trace');
        test2.should.equal('trace');

    },

    // }}}
    // {{{ test inheritableStatics#pattern1

    'test inheritableStatics#pattern1': function() {

        var test, test2;
        var f = function() {
        };
        var g = function() {
        };
        var clsDef = new NX.Class(f, {
            extend: g,
            inheritableStatics: {
                foo: 'bar'
            }
        });
        var cls = new clsDef();

    }

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
