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
var T_ClassManager = require('NX/core/class/ClassManager');

// }}}
// {{{ setDefaultPostprocessors

module.exports = {

    // {{{ test insertDefaultPostprocessors#pattern1

    'test insertDefaultPostprocessors#pattern1': function() {

        T_ClassManager.setDefaultPostprocessors([
            'processor1',
            'processor2',
            'processor3'
        ]);

        T_ClassManager.insertDefaultPostprocessor('firstProcessor', 'first');

        T_ClassManager.getDefaultPostprocessors()[0].should.equal('firstProcessor');
        T_ClassManager.getDefaultPostprocessors()[1].should.equal('processor1');
        T_ClassManager.getDefaultPostprocessors()[2].should.equal('processor2');
        T_ClassManager.getDefaultPostprocessors()[3].should.equal('processor3');

        T_ClassManager.setDefaultPostprocessors([
            'alias',
            'singleton',
            'alternateClassName'
        ]);

    },

    // }}}
    // {{{ test insertDefaultPostprocessors#pattern2

    'test insertDefaultPostprocessors#pattern2': function() {

        T_ClassManager.setDefaultPostprocessors([
            'processor1',
            'processor2',
            'processor3'
        ]);

        T_ClassManager.insertDefaultPostprocessor('firstProcessor', 1, 'processor1');

        T_ClassManager.getDefaultPostprocessors()[0].should.equal('processor1');
        T_ClassManager.getDefaultPostprocessors()[1].should.equal('firstProcessor');
        T_ClassManager.getDefaultPostprocessors()[2].should.equal('processor2');
        T_ClassManager.getDefaultPostprocessors()[3].should.equal('processor3');

        T_ClassManager.setDefaultPostprocessors([
            'alias',
            'singleton',
            'alternateClassName'
        ]);

    },

    // }}}
    // {{{ test insertDefaultPostprocessors#pattern3

    'test insertDefaultPostprocessors#pattern3': function() {

        T_ClassManager.setDefaultPostprocessors([
            'processor1',
            'processor2',
            'processor3'
        ]);

        T_ClassManager.insertDefaultPostprocessor('firstProcessor', 'last');

        T_ClassManager.getDefaultPostprocessors()[0].should.equal('processor1');
        T_ClassManager.getDefaultPostprocessors()[1].should.equal('processor2');
        T_ClassManager.getDefaultPostprocessors()[2].should.equal('processor3');
        T_ClassManager.getDefaultPostprocessors()[3].should.equal('firstProcessor');

        T_ClassManager.setDefaultPostprocessors([
            'alias',
            'singleton',
            'alternateClassName'
        ]);

    },

    // }}}
    // {{{ test insertDefaultPostprocessors#pattern4

    'test insertDefaultPostprocessors#pattern4': function() {

        T_ClassManager.setDefaultPostprocessors([
            'processor1',
            'processor2',
            'processor3'
        ]);

        T_ClassManager.insertDefaultPostprocessor('firstProcessor', 'after', 'processor2');

        T_ClassManager.getDefaultPostprocessors()[0].should.equal('processor1');
        T_ClassManager.getDefaultPostprocessors()[1].should.equal('processor2');
        T_ClassManager.getDefaultPostprocessors()[2].should.equal('firstProcessor');
        T_ClassManager.getDefaultPostprocessors()[3].should.equal('processor3');

        T_ClassManager.setDefaultPostprocessors([
            'alias',
            'singleton',
            'alternateClassName'
        ]);

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
