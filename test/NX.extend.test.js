/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX Class Tests

module.exports = {

    // {{{ test extend#standard

    'test extend#standard': function() {

        var NewCls = NX.extend(Object, {
            prop1: 'prop1',
            method1: function() {
                return 'method1';
            }
        });

        var cls = new NewCls();

        assert.equal(cls.prop1, 'prop1');
        assert.equal(cls.method1(), 'method1');

        var SubCls = NX.extend(NewCls, {
            prop2: 'prop2',
            method1: function() {
                return 'override method';
            }
        });

        var sub = new SubCls();

        SubCls.prototype.override({
            method2: function() {
                return 'inline override'
            }
        });

        assert.equal(sub.prop1, 'prop1');
        assert.equal(sub.prop2, 'prop2');
        assert.equal(sub.method1(), 'override method');
        assert.equal(sub.method2(), 'inline override');

    },

    // }}}
    // {{{ test extend#anotherstyle

    'test extend#anotherstyle': function() {

        var NewCls = function() {
            // NewCls constructor
            return 'newcls constructor';
        };
        NX.extend(NewCls, Object, {
            prop1: 'prop1',
            method1: function() {
                return 'method1';
            }
        });

        var cls = new NewCls();

        assert.equal(cls.prop1, 'prop1');
        assert.equal(cls.method1(), 'method1');

        var SubCls = function() {
            // SubCls constructor
            return 'subcls constructor';
        };

        NX.extend(SubCls, NewCls, {
            prop2: 'prop2',
            method1: function() {
                return 'override method';
            }
        });

        var sub = new SubCls();

        assert.equal(sub.prop1, 'prop1');
        assert.equal(sub.prop2, 'prop2');
        assert.equal(sub.method1(), 'override method');

        var ret = SubCls.prototype.superclass();
        ret = ret.constructor();

        assert.equal(ret, 'newcls constructor');

        var GsonCls = SubCls.extend({
            method2: function() {
                return 'gson method';
            }
        });

        var gson = new GsonCls();

        assert.equal(gson.prop1, 'prop1');
        assert.equal(gson.prop2, 'prop2');
        assert.equal(gson.method1(), 'override method');
        assert.equal(gson.method2(), 'gson method');

    },

    // }}}
    // {{{ test extend#illegal

    'test extend#illegal': function() {

        var NewCls = function() {
            // NewCls constructor
        };

        try {
            NX.extend(NewCls);
        } catch(e) {
            assert.equal(e, 'The specified superclass object is illegal.');
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
