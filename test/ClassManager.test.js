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
// {{{ NX.ClassManager Class Tests

module.exports = {

    // {{{ test parseNamespace#pattern1

    'test parseNamespace#pattern1': function() {

        try {
            NX.ClassManager.createNamespaces({});
        } catch(e) {
            e.sourceClass.should.equal('NX.ClassManager');
            e.sourceMethod.should.equal('parseNamespace');
            e.msg.should.equal('Invalid namespace, must be a string');
            e.message.should.equal('Invalid namespace, must be a string');
        }

    },

    // }}}
    // {{{ test parseNamespace#pattern2

    'test parseNamespace#pattern2': function() {

        NX.ClassManager.createNamespaces('NX.unittest_dummy');
        assert.ok(NX.unittest_dummy);

        NX.ClassManager.createNamespaces('NX.unittest.dummy');
        assert.ok(NX.unittest.dummy);

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
