/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class.preprocessor.inheritableStatics

module.exports = function(cls, data) {

    var statics = data.inheritableStatics,
        inheritableStatics,
        prototype = cls.prototype,
        name;

    inheritableStatics = prototype.$inheritableStatics;

    if (!inheritableStatics) {
        inheritableStatics = prototype.$inheritableStatics = [];
    }

    for (name in statics) {
        if (statics.hasOwnProperty(name)) {
            cls[name] = statics[name];
            inheritableStatics.push(name);
        }
    }

    delete data.inheritableStatics;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
