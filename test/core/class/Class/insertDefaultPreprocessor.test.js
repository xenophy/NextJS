/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

require('NX/core/class/ClassManager');
var T_Class = require('NX/core/class/Class');

// }}}
// {{{ insertDefaultPreprocessor

module.exports = {

    // {{{ test insertDefaultPreprocessor#pattern1

    'test getDefaultPreprocessors#pattern1': function() {

        T_Class.setDefaultPreprocessors([
            'processor1',
            'processor2',
            'processor3'
        ]);

        T_Class.insertDefaultPreprocessor('firstProcessor', 'first');
        T_Class.insertDefaultPreprocessor('lastProcessor', 'last');

        T_Class.getDefaultPreprocessors()[0].should.equal('firstProcessor');
        T_Class.getDefaultPreprocessors()[1].should.equal('processor1');
        T_Class.getDefaultPreprocessors()[2].should.equal('processor2');
        T_Class.getDefaultPreprocessors()[3].should.equal('processor3');
        T_Class.getDefaultPreprocessors()[4].should.equal('lastProcessor');

        T_Class.setDefaultPreprocessors([
            'className',
            'loader',
            'extend',
            'mixins',
            'config',
            'statics'
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
