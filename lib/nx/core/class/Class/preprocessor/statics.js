/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class.preprocessor.statics

module.exports = function(cls, data) {

    var statics = data.statics, name;

    for(name in statics) {

        if(statics.hasOwnProperty(name)) {
            cls[name] = statics[name];
        }

    }

    delete data.statics;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
