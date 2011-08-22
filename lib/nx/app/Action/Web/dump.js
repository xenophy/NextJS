/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Web.dump

module.exports = function(values, id) {

    var me = this,
        res = me.res;

    if(!me.$dump) {
        me.$dump = [];
    }

    if(!res.$dump) {
        res.$dump = [];
    }

    res.$dump.push({dump:NX.clone(values), id: id});
    me.$dump.push({dump:NX.clone(values), id: id});

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
