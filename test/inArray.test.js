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

// }}}
// {{{ inArray

module.exports = {

    // {{{ test inArray

    'test inArray': function(){

        T_NX.inArray('van', ['Kevin', 'van', 'Zonneveld']).should.equal(true);
        T_NX.inArray('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'}).should.equal(false);
        T_NX.inArray(1, ['1', '2', '3']).should.equal(true);
        T_NX.inArray(1, ['1', '2', '3'], false).should.equal(true);
        T_NX.inArray(1, ['1', '2', '3'], true).should.equal(false);
        T_NX.inArray(1, [1, 2, 3], true).should.equal(true);

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
