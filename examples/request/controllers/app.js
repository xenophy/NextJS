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
        this.set('person', this.request.person);
        this.end();
    },

    // }}}
    // {{{ postget

    postget : function(req, res) {

        if(req.method === 'POST') {
            this.set('person', this.post.person);
        } else {
            this.set('person', this.get.person);
        }

        this.end();
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
