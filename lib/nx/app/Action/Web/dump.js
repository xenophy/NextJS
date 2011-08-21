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

    me.$dump.push({dump:NX.clone(values), id: id});

    // ダンプ情報結合
    if(!res.$dump) {
        res.$dump = [];
    }
    if(!me.$dump) {
        me.$dump = [];
    }

    res.$dump = res.$dump.concat(me.$dump);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
