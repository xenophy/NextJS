/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.constructor

module.exports = function(paths, req, res) {

    var querystring = require('querystring');
    var url = NX.Url.parse(req.url);

    // テンプレートファイル初期化
    paths.template = NX.Path.join(paths.contents, querystring.unescape(url.pathname));
    paths.favicon = process.NXEnv.libdir + '/resources/favicon.ico';

    if(paths.template[paths.template.length - 1] === '/') {
        paths.template += "index.html";
    }

    NX.apply(this, {
        res: res,
        req: res,
        head: (req.method == 'HEAD'),
        url: url,
        favicon: (querystring.unescape(url.pathname) === '/favicon.ico'),
        paths: paths
    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
