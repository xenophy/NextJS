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

        var ret = this.getCookie('param1');

        this.set('person', ret);

        this.setCookie('param1', 'kotsutsumi', {
            path: '/',
            domain: '127.0.0.1',
            secure: true,
            httpOnly: true,
            expires: '2011/05/16'
        });
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
