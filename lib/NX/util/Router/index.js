/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Router

/**
 * @class NX.util.Router
 */
NX.define('NX.util.Router', {

    // {{{ draw

    /**
     * @method draw
     */
    draw: function(req, res, server) {

        // ルーティング


        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, World!</h1>');
        res.end();

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
