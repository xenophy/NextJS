/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');
var T_Array = require('../../lang/Array');
var T_Base = require('../Base');

// }}}
// {{{ NX.Class.constructor

var $METHOD = module.exports = function(classData, createdFn) {

    var self = this.constructor,
        newClass = function() {
            return this.constructor.apply(this, arguments);
        },
        preprocessors = T_Array.from(classData.preprocessors || self.getDefaultPreprocessors()),
        staticProp, process;

    for(staticProp in T_Base) {
        if (T_Base.hasOwnProperty(staticProp)) {
            newClass[staticProp] = T_Base[staticProp];
        }
    }

    delete classData.preprocessors;

    process = function(cls, data) {
        var name = preprocessors.shift();

        if(!name) {
            cls.implement(data);

            if(T_NX.isFunction(createdFn)) {
                createdFn.call(cls);
            }

            return;
        }

        this.getPreprocessor(name).call(this, cls, data, process);
    };

    process.call(self, newClass, classData);

    return newClass;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
