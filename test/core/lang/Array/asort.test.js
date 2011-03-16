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
var T_Array = require('NX/core/lang/Array');

// }}}
// {{{ asort

module.exports = {

    // {{{ test asort#standard

    'test asort#standard': function() {

        var arr = [{
            id: 100
        },{
            id: 0
        },{
            id: 99
        }]

        T_Array.asort(arr, 'id');

        arr[0].id.should.equal(0);
        arr[1].id.should.equal(99);
        arr[2].id.should.equal(100);

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
