/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.AbstractServer

NX.define('NX.server.AbstractServer', {

    // {{{ paserRequest

    parseRequest: function(req) {

        var me = this, basename, dirname, action, url = req.url;

        basename = NX.Path.basename(NX.Url.parse(url, true).pathname);
        dirname = NX.Path.dirname(url);

        req.path = dirname;

        action = basename || 'index';

        if(req.path == '/' && basename.substr(-1) !== '/') {

            //req.path = me.appControlerName + '.js';

        } else {

            if(basename.substr(-1) === '/') {

                req.path = req.url.substr(0, req.url.length - 1) + '.js';
                action = 'index';

            } else {

                req.path = dirname + '.js';

            }
        }


        console.log(req.path);



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
