/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_NX = require('NX');

// }}}
// {{{ define

module.exports = {

    // {{{ test define#pattern1

    'test define#pattern1': function() {

         NX.define('My.Class1', {
            config: {
                name: 'Awesome',
                isAwesome: true
            },
            constructor: function(config) {
                this.initConfig(config);
                return this;
            },
            applyName : function(val) {
                return "[" + val + "]";
            }
        });

        var cls = new My.Class1();

        cls.getName().should.equal('[Awesome]');
        cls.getIsAwesome().should.equal(true);

        cls.setName('Next JS');
        cls.getName().should.equal('[Next JS]');

        cls.resetName();
        cls.getName().should.equal('[Awesome]');
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
