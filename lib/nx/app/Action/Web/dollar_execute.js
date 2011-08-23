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

        NX.apply(action, {
            setTemplate: function(tpl) {
                action.switchTemplate = tpl;
            },
            redirect: function(url) {

                next({
                    abort: true,
                    redirect: url
                });

            },
            abort: function() {

                if(action.actionSend) {
                    return;
                }

                if(!res.result) {
                    res.result = {};
                }

                NX.apply(res.result, action.result);

                action.actionSend = true;

                var o = {
                    abort: true
                };

                if(NX.isString(action.switchTemplate)) {
                    o.template = action.switchTemplate;
                }

                next(o);

            },
            end: function() {

                if(action.actionSend) {
                    return;
                }

                if(!res.result) {
                    res.result = {};
                }

                NX.apply(res.result, action.result);

                var o = {
                    abort: false
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
            paths: req.controller.paths,
            result: {}
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
