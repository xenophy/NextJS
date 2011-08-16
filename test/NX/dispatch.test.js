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
// {{{ NX.dispatch Tests

module.exports = {

    // {{{ 'test dispatch#pattern1'

    'test dispatch#pattern1': function(beforeExit) {

        NX.dispatch({
            execPath: __dirname + '/../shared/NX/dispatch',
            action: 'index'
        });

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
