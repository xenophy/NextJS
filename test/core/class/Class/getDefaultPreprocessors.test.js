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
// {{{ getDefaultPreprocessors

module.exports = {

    // {{{ test getDefaultPreprocessors#pattern1

    'test getDefaultPreprocessors#pattern1': function() {

        T_Class.getDefaultPreprocessors()[0].should.equal('className');
        T_Class.getDefaultPreprocessors()[1].should.equal('loader');
        T_Class.getDefaultPreprocessors()[2].should.equal('extend');
        T_Class.getDefaultPreprocessors()[3].should.equal('mixins');
        T_Class.getDefaultPreprocessors()[4].should.equal('config');
        T_Class.getDefaultPreprocessors()[5].should.equal('statics');

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
