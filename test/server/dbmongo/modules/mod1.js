/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ users

module.exports = NX.extend(NX.Module, {

    // {{{ autoConnect

    autoConnect : false,

    // }}}
    // {{{ use

    use : process.NXEnv.testdb,

    // }}}
    // {{{ scenario

    scenario : function(cb) {

//        me.createCollection();



        cb();
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
