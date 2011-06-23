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
// {{{ NX.Loader Class Tests

module.exports = {

    // {{{ test setConfig#pattern1

    'test setConfig#pattern1': function() {

        NX.Loader.setConfig('NXTest.Loader.setConfig', true);
        NX.Loader.config['NXTest.Loader.setConfig'].should.equal(true);

        delete NX.Loader.config['NXTest.Loader.setConfig'];
    },

    // }}}
    // {{{ test getPrefix#pattern1

    'test getPrefix#pattern1': function() {

        NX.Loader.setConfig('paths', {LoaderTest: './'});

        var x = NX.Loader.getPrefix('LoaderTest');
        x.should.equal('LoaderTest');

        delete NX.Loader.config.paths['LoaderTest'];
    },

    // }}}
    // {{{ test getPath#pattern1

    'test getPath#pattern1': function() {

        NX.Loader.setConfig('paths', {LoaderTest_getPath: './'});
        var x = NX.Loader.getPath('LoaderTest_getPath');
        x.should.equal('./');

        delete NX.Loader.config.paths['LoaderTest_getPath'];
    },

    // }}}
    // {{{ test require#pattern1

    'test require#pattern1': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/src/Loader/'
            }
        });

        var clsDef = NX.Loader.require('My.Test');
        cls = new clsDef();
        cls.foo().should.equal('bar');

    },

    // }}}
    // {{{ test require#pattern2

    'test require#pattern2': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/src/Loader/'
            }
        });

        var test;
        NX.Loader.require('My.Test2', function() {
        });

        NX.Loader.require('My.Test2', function() {
            test = 'trace';
        });

        test.should.equal('trace');

    },

    // }}}
    // {{{ test require#pattern3

    'test require#pattern3': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/src/Loader/'
            }
        });

        var cls = NX.create('My.view.Test');
        cls.foo().should.equal('bar');

        try{
            cls = NX.create('My.view.Test2');
        } catch(e) {
            e.message.should.equal('Invalid class name or alias \'My.view.Test2\' defined, must be a non-empty string');
        }
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
