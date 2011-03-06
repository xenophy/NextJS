/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.each

var $METHOD = module.exports = function(arr, fn, scope) {

    if(this.isEmpty(arr, true)){
        return;
    }

    if(!this.isIterable(arr) || this.isPrimitive(arr)){
        arr = [arr];
    }

    for(var i = 0, len = arr.length; i < len; i++){
        if(fn.call(scope || arr[i], arr[i], i, arr) === false){
            return i;
        };
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
