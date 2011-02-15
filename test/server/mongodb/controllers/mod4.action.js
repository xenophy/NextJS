/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ mod4.action

module.exports = NX.extend(NX.Action, {

    // {{{ use

    use : ['mod4'],

    // }}}
    // {{{ execute

    execute : function() {

        var me = this;

        me.mod4.scenario(function(ret) {
            me.set('ret', ret);
            me.end();
        });

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
