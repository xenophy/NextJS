/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Socket.$execute

module.exports = function() {

    var action = this;
    var execute = action.execute;

    return function(req, res, next) {

        NX.apply(action, {

            // {{{ mail

            mail: NX.app.action.Abstract.$mail,

            // }}}

            end: function() {

                if(!res.result) {
                    res.result = {};
                }

                NX.apply(res.result, action.result);

                next();
            },
            req: req,
            res: res,
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
