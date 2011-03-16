/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var NX = require('NX/core');

// }}}
// {{{ initConfig

module.exports = {

    // {{{ test initConfig#pattern1

    'test initConfig#pattern1': function() {

         NX.define('NXTest.Base.initConfig.cls', {
             config: {
                 name: 'test'
             },
             constructor: function(config) {
                 this.initConfig(config);
                 return this;
             }
        });

        var cls = new NXTest.Base.initConfig.cls();

        cls.getName().should.equal('test');

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
