/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.renderWithDump

module.exports = function(config, fn) {

    var me = this,
        data = config.data,
        info = config.info,
        req = config.req,
        res = config.res,
        file;

    file = process.NXEnv.libdir + '/resources/dump/dump.tpl';

    me.loadFile(file, function(err, tpl, stat) {

        if(err) {
            // TODO: Internal Server Error
        }

        tpl = tpl.toString();

        var isSSL = false;

        if(req.connection.pair && req.connection.pair._secureEstablished) {
            isSSL = true;
        }

        var host = req.headers.host;
        var urlBase = isSSL ? 'https://' : 'http://';
        urlBase += host + '/(-_-)v/';

        data = NX.view.Web.getDumpHtml({
            urlBase: urlBase,
            info: info,
            tpl: tpl,
            data: data
        });

        fn(data);

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
