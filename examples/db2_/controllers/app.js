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
        'users',
    ],

    // }}}
    // {{{ index

    index : function(req, res) {

        var me = this;

        // DB・テーブル仕様取得
        me.users.getSpec(function(info) {
            me.set('info', info);

            // ユーザー追加
            me.users.add(function() {

                // ユーザー更新
                me.users.write(function() {

                    me.end();
                });

            });

        });

    },

    // }}}
    // {{{ clear

    clear : function(req, res) {

        var me = this;

        me.users.clear(function() {
            me.end();
        });

    },

    // }}}
    // {{{ find

    find : function(req, res) {

        var me = this;

        me.users.found(function(info) {
            me.set('info', info);
            me.end();
        });

    },

    // }}}
    // {{{ findall

    findall : function(req, res) {

        var me = this;

        me.users.foundall(function(info) {
            me.set('info', info);
            me.end();
        });

    },

    // }}}
    // {{{ count

    count : function(req, res) {

        var me = this;

        me.users.counts(function(info) {
            me.set('info', info);
            me.end();
        });

    },

    // }}}
    // {{{ locks

    locks : function(req, res) {

        var me = this;

        me.users.locks(function(info) {
            me.end();
        });

    },

    // }}}
    // {{{ sets

    sets : function(req, res) {

        var me = this;

        me.users.sets(function(info) {
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
