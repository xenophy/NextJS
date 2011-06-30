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

        var me = this,
            url = req.url,
            config = me.config,
            paths = config.paths,
            basename, dirname, action, actionPath, extPos;

        basename = NX.Path.basename(NX.Url.parse(url, true).pathname);
        dirname = NX.Path.dirname(url);

        req.path = dirname;

        action = basename || 'index';

        if(req.path == '/' && basename.substr(-1) !== '/') {

            req.path = 'index.js';

        } else {

            if(basename.substr(-1) === '/') {

                req.path = req.url.substr(0, req.url.length - 1) + '.js';
                action = 'index';

            } else {

                req.path = dirname + '.js';

            }
        }

        if(basename.substr(-1) === '/') {
            actionPath = req.url.substr(0, req.url.length - 1);
        } else {
            actionPath = dirname;
        }

        // クエリーストリング除去
        if(actionPath.indexOf('?') !== -1) {
            actionPath = actionPath.substr(0, actionPath.indexOf('?'));
        }

        extPos = action.indexOf('.');
        if(extPos > 0) {
            action = action.substr(0, extPos);
        }

        // コントローラーパス取得
        req.file = NX.Path.normalize(paths.controllers + '/' + req.path);

        return {
            action: action,
            actionPath: actionPath,
            basename: basename,
            dirname: dirname,
            paths: paths,
            url: req.url,
            file: req.file
        };

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
