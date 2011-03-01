/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires


var T_NX = require('../../../core');
var T_Array = require('../../lang/Array');
var T_Class = require('../Class');

// }}}
// {{{ NX.ClassManager.getClass

var $METHOD = module.exports = function(className, data, createdFn) {

    var manager = this;

    if(!T_NX.isString(className)) {
        throw new Error("[NX.define] Invalid class name of: '" + className + "', must be a valid string");
    }

    data.$className = className;

    return new T_Class(data, function() {

        var postprocessors = T_Array.from(data.postprocessors || manager.getDefaultPostprocessors());
        var process = function(clsName, cls, clsData) {

            var name = postprocessors.shift();

            if(!name) {

                manager.set(className, cls);

                if(T_NX.isFunction(createdFn)) {
                    createdFn.call(cls, cls);
                }

                return;
            }

            this.getPostprocessor(name).call(this, clsName, cls, clsData, process);
        };

        process.call(manager, className, this, data);
    });
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
