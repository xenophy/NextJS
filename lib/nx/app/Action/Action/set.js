/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Action.set

module.exports = function(name, value) {

    var result = this.result;

    if(NX.isString(name)) {

        result[name] = value;

    } else if(NX.isObject(name)) {

        NX.apply(result, name);

    } else {

        return false;

    }

    return result;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
