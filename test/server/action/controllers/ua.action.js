/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ index.action

module.exports = NX.extend(NX.Action, {

    // {{{ execute

    execute : function() {

        var me = this;

        if(me.UA('Mac')) {
            me.set('os', 'Mac');
        } else {
            me.set('os', 'Unknown');
        }
        me.end();
    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
