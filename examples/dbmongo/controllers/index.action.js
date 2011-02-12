/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ index.action

module.exports = NX.extend(NX.Action, {

    // {{{ use

    use : ['users'],

    // }}}
    // {{{ execute

    execute : function() {

        var me = this;

        me.users.find(function(rs) {
            me.set('users', rs);
            me.end();
        });

        /*
        // データ追加
        me.users.name = 'Kazuhiro Kotsutsumi';
        me.users.age = 31;
        me.users.save(function() {
            me.end();
        });
        */

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