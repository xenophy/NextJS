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
// {{{ NX.Error Class Tests

module.exports = {

    // {{{ 'test raise#pattern1'

    'test raise#pattern1': function() {

        try {
            NX.Error.raise('Something bad happened!');
        } catch(e) {
            e.msg.should.equal('Something bad happened!');
            e.message.should.equal('Something bad happened!');
        }

    },

    // }}}
    // {{{ 'test raise#pattern2'

    'test raise#pattern2': function() {

        try {
            NX.Error.raise({
                msg: 'You cannot do that!',
                'error code': 100
            });
        } catch(e) {
            e.msg.should.equal('You cannot do that!');
            e.message.should.equal('You cannot do that!');
            e['error code'].should.equal(100);
        }

    },

    // }}}
    // {{{ 'test raise#pattern3'

    'test raise#pattern3': function() {

        try {
            throw new NX.Error('Something bad happened!');
        } catch(e) {
            e.msg.should.equal('Something bad happened!');
            e.message.should.equal('Something bad happened!');
        }

    },

    // }}}
    // {{{ 'test raise#pattern4'

    'test raise#pattern4': function() {

        var f = function() {

            try {
                NX.Error.raise('Something bad happened!');
            } catch(e) {
                e.msg.should.equal('Something bad happened!');
                e.message.should.equal('Something bad happened!');
                e.sourceMethod.should.equal('test raise#pattern4');
                e.sourceClass.should.equal('StubClass');
            }

        }
        f.$owner = {
            $className : 'StubClass'
        };

        f.$name = 'test raise#pattern4';
        f();
    }

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
