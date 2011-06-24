/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web

NX.define('NX.view.Web', {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ alternateClassName

    alternateClassName: 'NX.WebView',

    // }}}
    // {{{ extend

    extend: 'NX.view.AbstractView',

    // }}}
    // {{{ render

    render: function(ret, req, res) {

        var me = this;

        // スーパークラスメソッドコール
        me.callParent(arguments);


                        res.writeHead(200);
                        res.end('Hello from: ' + process.pid + "\n");
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
