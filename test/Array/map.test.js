/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Array = require('NX/Array');

// }}}
// {{{ map

module.exports = {

    // {{{ test map#pattern1

    'test map#pattern1': function() {

        function makePseudoPlural(single) {
            return single.replace(/o/g, "e");
        }

        var singles = ["foot", "goose", "moose"];
        var plurals = T_Array.map(singles, makePseudoPlural);

        plurals[0].should.equal('feet');
        plurals[1].should.equal('geese');
        plurals[2].should.equal('meese');

        singles[0].should.equal('foot');
        singles[1].should.equal('goose');
        singles[2].should.equal('moose');
    },

    // }}}
    // {{{ test map#pattern2

    'test map#pattern2': function() {

        var singles = ["foot", "goose", "moose"];

        try {
            var plurals = T_Array.map(singles);
        } catch(e) {
            e.message.should.equal('[NX.Array.map] fn must be a valid callback function');
        }

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
