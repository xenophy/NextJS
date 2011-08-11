/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.getList

module.exports = function() {

    var me = this,
        ret = [],
        addr;

    while(me.pos < me.field.length) {

        addr = me.get();

        if(addr) {

            ret.push(addr);

        } else {

            ret.push({
                label:'',
                address:''
            });

        }

    }

    return ret;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
