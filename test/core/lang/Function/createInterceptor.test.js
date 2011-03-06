/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Function = require('NX/core/lang/Function');

// }}}
// {{{ createInterceptor

module.exports = {

    // {{{ test createInterceptor#pattern1

    'test createInterceptor#pattern1': function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = T_Function.createInterceptor(sayHi, function(name){
            return name == 'Brian';
        });

        assert.equal(sayHiToFriend('Fred'), null);
        sayHiToFriend('Brian').should.equal('Hi, Brian');

    },

    // }}}
    // {{{ test createInterceptor#pattern2

    'test createInterceptor#pattern2': function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = T_Function.createInterceptor(sayHi, null);

        sayHiToFriend('Fred').should.equal('Hi, Fred');
        sayHiToFriend('Brian').should.equal('Hi, Brian');

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
