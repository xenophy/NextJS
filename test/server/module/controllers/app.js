/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ app

module.exports = NX.extend(NX.WebController, {

    // {{{ use

    use : [
        'mod1',
        'mod2',
        'mod3'
    ],

    // }}}
    // {{{ index

    index : function(req, res) {

        var me = this;

        me.mod1.foo(function(v1) {
            me.set('mod1', v1);
            me.mod2.foo(function(v2) {
                me.set('mod2', v2);
                me.mod3.foo(function(v3) {
                    me.set('mod3', v3);
                    me.end();
                });
            });
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
