/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ app

module.exports = NX.extend(NX.WebController, {

    // {{{ index

    index : function(req, res) {

        var me = this;

        if(me.post.person) {
            me.session.person = me.post.person;
        }

        me.set('person', me.session.person);
        me.end();
    },

    // }}}
    // {{{ clear

    clear : function(req, res) {

        var me = this;

        me.session.regenerate(function(err){
            me.redirect('/');
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
