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

        me.mod1.foo();
        me.mod2.foo();
        me.mod3.foo();

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
