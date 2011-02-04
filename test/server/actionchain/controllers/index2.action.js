/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ index2.action

module.exports = [
    new (NX.extend(NX.Action, {

        // {{{ execute

        execute : function() {

            var me = this;
            me.set('nxaciton', 'NX.Action instance executed');
            me.end();
        }

        // }}}

    }))
];

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
