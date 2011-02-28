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
var T_ClassManager = require('NX/ClassManager');

// }}}
// {{{ getDefaultPostprocessors

module.exports = {

    // {{{ test getDefaultPostprocessors#pattern1

    'test getDefaultPostprocessors#pattern1': function() {

        T_ClassManager.setDefaultPostprocessors([
            'processor1',
            'processor2',
            'processor3'
        ]);

        T_ClassManager.getDefaultPostprocessors()[0].should.equal('processor1');
        T_ClassManager.getDefaultPostprocessors()[1].should.equal('processor2');
        T_ClassManager.getDefaultPostprocessors()[2].should.equal('processor3');
    },

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
