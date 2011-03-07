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
var T_ClassManager = require('NX/core/class/ClassManager');

// }}}
// {{{ create

module.exports = {

    // {{{ test create#pattern1

    'test create#pattern1': function() {

        T_ClassManager.create('My.Class1', {
            config: {
                name: 'Awesome',
                isAwesome: true
            },
            constructor: function(config) {
                this.initConfig(config);
                return this;
            }
        });

        var cls = new My.Class1();

        cls.getName().should.equal('Awesome');
        cls.getIsAwesome().should.equal(true);

        cls.setName('Next JS');
        cls.getName().should.equal('Next JS');

        cls.resetName();
        cls.getName().should.equal('Awesome');

    },

    // }}}
    // {{{ test create#pattern2

    'test create#pattern2': function() {

        try {
            T_ClassManager.create({}, {});
        } catch(e) {
            e.message.should.equal("[NX.define] Invalid class name of: '[object Object]', must be a valid string");
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
