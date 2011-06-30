/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Action

NX.define('NX.app.Action', {

    // {{{ get

    get: {},

    // }}}
    // {{{ post

    post: {},

    // }}}
    // {{{ request

    request: {},

    // }}}
    // {{{ result

    result: {},

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        NX.apply(this, config);

    },

    // }}}
    // {{{ set

    set: function(name, value) {

        var result = this.result;

        if(NX.isString(name)) {

            result[name] = value;

        } else if(NX.isObject(name)) {

            NX.apply(result, name);

        } else {

            return false;

        }

        return result;

    },

    // }}}
    // {{{ setCookie

    setCookie : function(name) {

        return this.controller.setCookie.apply(this.controller, arguments);

    },

    // }}}
    // {{{ _execute

    _execute: function() {

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
                request: get,
                result: {}
            })

            NX.apply(action.post, req.body);
            NX.apply(action.request, req.body);

            execute.call(action, req, res, next);

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
