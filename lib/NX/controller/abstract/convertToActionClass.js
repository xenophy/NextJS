/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ convertToActionClass

var convertToActionClass = module.exports = function(ctrl, target) {

    var me = ctrl;

    if(NX.isArray(target)) {
        target.forEach(function(t, i) {
            target[i] = convertToActionClass(me, t);
        });
        return target;
    }

    if(!(target instanceof NX.Action)) {

        var a = new NX.Action();
        a.controller = me;

        if(NX.isFunction(target)) {
            a.execute = target;
        } else {
            a.execute = NX.emptyFn;
        }

        target = a;

    } else {
        target.controller = me;
    }

    return target;

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
