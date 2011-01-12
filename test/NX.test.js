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
// {{{ NX Class Tests

module.exports = {

    // {{{ test version

    'test version': function(){

        assert.ok(/^\d+\.\d+\.\d+$/.test(NX.version), 'Test framework version format');

    },

    // }}}
    // {{{ test versionDetail#major

    'test versionDetail#major': function(){

        assert.ok(/^\d+$/.test(NX.versionDetail.major), 'Test framework version detail major format');

    },

    // }}}
    // {{{ test versionDetail#minor

    'test versionDetail#minor': function(){

        assert.ok(/^\d+$/.test(NX.versionDetail.minor), 'Test framework version detail minor format');

    },

    // }}}
    // {{{ test versionDetail#Patch

    'test versionDetail#Patch': function(){

        assert.ok(/^\d+$/.test(NX.versionDetail.patch), 'Test framework version detail patch format');

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
