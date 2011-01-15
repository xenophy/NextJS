/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
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

        me.users.getList(function(rs) {

            var data = [];

            NX.iterate(rs, function(o) {
                data.push({
                    name : o.name
                });
            });
            me.set('users', data);
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
