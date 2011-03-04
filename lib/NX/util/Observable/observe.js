/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Observable.observe

var $METHOD = module.exports = function(cls, listeners) {

    if(cls) {

        if(!cls.isObservable) {
            T_NX.applyIf(cls, new this());
            this.capture(cls.prototype, cls.fireEvent, cls);
        }

        if(T_NX.isObject(listeners)) {
            cls.on(listeners);
        }

        return cls;
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
