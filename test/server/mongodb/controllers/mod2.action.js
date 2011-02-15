/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ mod2.action

module.exports = NX.extend(NX.Action, {

    // {{{ use

    use : ['mod2'],

    // }}}
    // {{{ execute

    execute : function() {

        var me = this;

        me.mod2.scenario(function(ret) {
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
