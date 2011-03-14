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
var T_Array = require('NX/core/lang/Array');
var T_ClassManager = require('NX/core/class/ClassManager');

// }}}
// {{{ setAlias

module.exports = {

    // {{{ test setAlias#pattern1

    'test setAlias#pattern1': function() {

        var f1 = function() {
            return 'f1';
        };

        T_ClassManager.set('ClassManagerTest.setAlias.cls1', f1);
        T_ClassManager.setAlias('ClassManagerTest.setAlias.cls1', 'ClassManagerTest.setAlias.cls2');

        var ret = T_ClassManager.getNameByAlias('ClassManagerTest.setAlias.cls2');
        ret.should.equal('ClassManagerTest.setAlias.cls1');

        var ret = T_ClassManager.getAliasesByName('ClassManagerTest.setAlias.cls1');

        T_Array.contains(ret, 'ClassManagerTest.setAlias.cls2').should.equal(true);

        var cls = T_ClassManager.getByAlias('ClassManagerTest.setAlias.cls2');
        cls().should.equal('f1');

    },

    // }}}
    // {{{ test setAlias#pattern2

    'test setAlias#pattern2': function() {

        var f1 = function() {
            return 'f1';
        };

        var f2 = function() {
            return 'f2';
        };


        T_ClassManager.set('ClassManagerTest.setAlias.cls3', f1);
        T_ClassManager.set('ClassManagerTest.setAlias.cls4', f2);
        T_ClassManager.setAlias('ClassManagerTest.setAlias.cls3', 'ClassManagerTest.setAlias.cls5');

        try {
            T_ClassManager.setAlias('ClassManagerTest.setAlias.cls4', 'ClassManagerTest.setAlias.cls5');
        } catch(e) {
            e.message.should.equal('[NX.ClassManager] Overriding already existed alias: \'ClassManagerTest.setAlias.cls5\' of: \'ClassManagerTest.setAlias.cls3\' with: \'ClassManagerTest.setAlias.cls4\'. Be sure it\'s intentional.');
        }

    },

    // }}}
    // {{{ test setAlias#pattern3

    'test setAlias#pattern3': function() {

        T_ClassManager.create('ClassManagerTest.setAlias.cls6', {
            f3: function(){
                return 'f3';
            }
        });

        T_ClassManager.setAlias(ClassManagerTest.setAlias.cls6, 'ClassManagerTest.setAlias.cls7');

        var ret = T_ClassManager.getNameByAlias('ClassManagerTest.setAlias.cls7');
        ret.should.equal('ClassManagerTest.setAlias.cls6');

        var ret = T_ClassManager.getAliasesByName('ClassManagerTest.setAlias.cls6');
        T_Array.contains(ret, 'ClassManagerTest.setAlias.cls7').should.equal(true);

        var cls = T_ClassManager.instantiateByAlias('ClassManagerTest.setAlias.cls7');

        cls.f3().should.equal('f3');

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
