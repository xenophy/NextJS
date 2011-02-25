/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_String = require('NX/String');

// }}}
// {{{ escape

module.exports = {

    // {{{ test escapeRegex#standard

    'test escapeRegex#standard': function() {
        assert.equal('\\-', T_String.escapeRegex('-'), 'Test with single char');
        assert.equal('\\*\\.', T_String.escapeRegex('*.'), 'Test with multiple characters next to each other');
        assert.equal('foo', T_String.escapeRegex('foo'), 'Test with no escapeable chars');
        assert.equal('\\{baz\\}', T_String.escapeRegex('{baz}'), 'Test with mixed set');
        assert.equal('\\-\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\/\\\\', T_String.escapeRegex('-.*+?^${}()|[]/\\'), 'Test with every character');
        T_String.escapeRegex("<a href='test'>Test</a>").should.equal("<a href=\'test\'>Test<\\/a>");
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
