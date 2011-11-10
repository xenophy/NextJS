/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Socket.dispatch

module.exports = function(config) {

    NX.Loader.require('NX.app.Dispatcher');

    (function(o) {

        var key = NX.Cookie.parse(o.cinfo.headers.cookie)['nextjs.sid'];
        var store = o.serverConfig.session.store;
        var session = o.serverConfig.session;


        store.get(key, function(err, sess) {

            var req, res, dispatch, execPath;

            o = o || {};

            execPath = process.NXEnv.dirname;

            req = o.cinfo;
            req._url = req.url;
            req.url = o.name;

            o.paths.actions = o.paths.sockets;

            req.config = {
                paths: o.paths,
                controllerType: 'Socket',
                action: o.name
            };
            req.data = o.data;

            // Cookie情報取得
            req.cookie = req.cookies = NX.Cookie.parse(o.cinfo.headers.cookie);

            res = {
                actionAllowExt: o.allowExt
            };

            //req.session = sess;

            req.sessionId = key;
            req.session = NX.create('NX.Session', sess);
            req.session.cookie = NX.create('NX.Cookie', req.cookie);


            // ディスパッチ
            NX.app.Dispatcher.dispatch()(req, res, function() {

                if(req.session) {

                    //this.req.sessionStore.set(this.id

                    req.session.resetMaxAge();

                    store.set(key, req.session);


                    /*
                     *
                    req.session.save(function() {

                    console.log("owatteru?");
                    });
                    */

                }

            });

        });

    })(config);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
