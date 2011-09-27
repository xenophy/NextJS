/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Web.$execute

module.exports = function() {

    var action = this;
    var execute = action.execute;

    return function(req, res, next) {

        var p = NX.Url.parse(req.url, true);
        var get = {};

        if(p.search) {
            get = require('querystring').parse(p.search.substr(1));
        };

        var UA = req.headers['user-agent'];

        // ユーザーエージェント判定メソッド実装
        for(method in NX.util.UA) {
            if(method.substr(0,2) === 'is') {
                action[method] = (function(call) {
                    return function() {
                        return NX.util.UA[call](UA);
                    }

                })(method);
            }
        }

        NX.apply(action, {

            // {{{ mail

            mail: NX.app.action.Abstract.$mail,

            // }}}
            // {{{ isSSL

            isSSL: function() {

                if(req.connection.pair && req.connection.pair._secureEstablished) {
                    return true;
                }

                return false;

            },

            // }}}

            forbidden: function(abort) {

                var message = 'aaa';
                var stack = 'aaa';

                res.$errorCode = 403;
                res.$errorDetails = {
                    msg: message,
                    stack: stack
                };

                if(abort === undefined) {
                    abort = false;
                }

                next({
                    abort: abort
                });

            },
            basicAuth: function(fn, realm) {

                var authorization = req.headers.authorization;

                if(!authorization) {

                    res.$authorizationRealm = 'Authorization Required';

                    if(NX.isString(realm)) {
                        res.$authorizationRealm = realm;
                    }

                    res.$errorCode = 401;
                    res.$errorDetails = {
                        msg: '',
                        stack: ''
                    };

                    next({
                        render: true,
                        abort: true
                    });

                    return;

                } else {

                    var parts = authorization.split(' '),
                        scheme = parts[0],
                        credentials = new Buffer(parts[1], 'base64').toString().split(':');

                    fn(credentials[0], credentials[1]);

                }
            },
            setTemplate: function(tpl) {
                action.switchTemplate = tpl;
            },
            redirect: function(url) {

                next({
                    abort: true,
                    redirect: url
                });

            },
            abort: function(render) {

                if(action.actionSend) {
                    return;
                }

                if(!res.result) {
                    res.result = {};
                }

                NX.apply(res.result, action.result);

                action.actionSend = true;

                var o = {
                    abort: true,
                    render: render
                };

                if(NX.isString(action.switchTemplate)) {
                    o.template = action.switchTemplate;
                }

                next(o);

            },
            end: function(render) {

                if(res.$actionrender === undefined && render === false) {
                    res.$actionrender = false;
                }

                if(render === undefined && res.$actionrender === false) {
                    render = res.$actionrender;
                }

                if(action.actionSend) {
                    return;
                }

                if(!res.result) {
                    res.result = {};
                }

                NX.apply(res.result, action.result);

                var o = {
                    abort: false,
                    render: render
                };

                if(NX.isString(action.switchTemplate)) {
                    o.template = action.switchTemplate;
                }

                action.actionSend = true;

                next(o);
            },
            req: req,
            res: res,
            get: get,
            post: {},
            cookie: req.cookies,
            session: req.session.values,
            request: get,
            paths: req.controller.paths
        });

        NX.apply(action.post, req.body);
        NX.apply(action.request, req.body);


        execute.call(action, req, res, next);

    };

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
