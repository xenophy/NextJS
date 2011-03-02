/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../../core');

// }}}
// {{{ NX.Class.preprocessors.statics

var $METHOD = module.exports = function(cls, data, fn) {

    if(T_NX.isObject(data.statics)) {
        var name, statics = data.statics;

        for(name in statics) {
            if(statics.hasOwnProperty(name)) {
                cls[name] = statics[name];
            }
        }
    }

    delete data.statics;

    if(fn) {
        fn.call(this, cls, data);
    }
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
