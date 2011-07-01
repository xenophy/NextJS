/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Action.$execute

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
            end: function() {

                if(!res.result) {
                    res.result = {};
                }

                NX.apply(res.result, action.result);

                next();
            },
            req: req,
            res: res,
            get: get,
            post: {},
            cookie: req.cookies,
            session: req.session.values,
            request: get,
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
