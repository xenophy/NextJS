/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ index

module.exports = {

    uses: [
        'mod1',
        {name: 'mod2'},
        'mod_notexists',
    ],


    // {{{ execute

    execute: function() {

        this.set('ret1', this.mod1.foo());
        this.set('ret2', this.mod2.bar());

        // アクション終了
        this.end();

    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
