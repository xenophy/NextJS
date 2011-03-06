/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.iterate

var $METHOD = module.exports = function(obj, fn, scope) {

    var me = this;

    if(me.isEmpty(obj)) {
        return;
    }

    if(me.isIterable(obj)) {

        me.each(obj, fn, scope);
        return;

    } else if(typeof obj == 'object' || typeof 'function') {

        for(var prop in obj){
            if(obj.hasOwnProperty(prop)){
                if(fn.call(scope || obj, prop, obj[prop], obj) === false){
                    return;
                };
            }
        }

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
