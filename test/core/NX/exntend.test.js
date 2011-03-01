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
// {{{ extend

module.exports = {

    // {{{ test extend#standard

    'test extend#standard': function() {

        var NewCls = T_NX.extend(Object, {
            prop1: 'prop1',
            method1: function() {
                return 'method1';
            }
        });

        var cls = new NewCls();

        cls.prop1.should.equal('prop1');
        cls.method1().should.equal('method1');

        var SubCls = T_NX.extend(NewCls, {
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

        sub.prop1.should.equal('prop1');
        sub.prop2.should.equal('prop2');
        sub.method1().should.equal('override method');
        sub.method2().should.equal('inline override');

    },

    // }}}
    // {{{ test extend#anotherstyle

    'test extend#anotherstyle': function() {

        var NewCls = function() {
            // NewCls constructor
            return 'newcls constructor';
        };
        T_NX.extend(NewCls, Object, {
            prop1: 'prop1',
            method1: function() {
                return 'method1';
            }
        });

        var cls = new NewCls();

        cls.prop1.should.equal('prop1');
        cls.method1().should.equal('method1');

        var SubCls = function() {
            // SubCls constructor
            return 'subcls constructor';
        };

        T_NX.extend(SubCls, NewCls, {
            prop2: 'prop2',
            method1: function() {
                return 'override method';
            }
        });

        var sub = new SubCls();

        sub.prop1.should.equal('prop1');
        sub.prop2.should.equal('prop2');
        sub.method1().should.equal('override method');

        var ret = SubCls.prototype.superclass();
        ret = ret.constructor();

        ret.should.equal('newcls constructor');

        var GsonCls = SubCls.extend({
            method2: function() {
                return 'gson method';
            }
        });

        var gson = new GsonCls();

        gson.prop1.should.equal('prop1');
        gson.prop2.should.equal('prop2');
        gson.method1().should.equal('override method');
        gson.method2().should.equal('gson method');

    },

    // }}}
    // {{{ test extend#illegal

    'test extend#illegal': function() {

        var NewCls = function() {
            // NewCls constructor
        };

        try {
            T_NX.extend(NewCls);
        } catch(e) {
            e.should.equal('The specified superclass object is illegal.');
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
