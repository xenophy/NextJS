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
        var get = {},
            post = {};

        if(p.search) {
            get = require('querystring').parse(p.search.substr(1));
        };

        if(req.method === 'POST') {

            NX.apply(post, req.body);

            var actionName = post.action || post.extAction;
            var method = post.method || post.extMethod;
            var tid = post.tid || post.extTID;
            var arg = post.data || [];
            var isUpload = false;
            var mod = action[actionName];

            if(post.extUpload || post.extAction) {

                var o = {};
                o.isUpload = false;

                NX.iterate(post, function(key, v) {
                    if(!key.match(/^(extTID|extAction|extMethod|extType|extUpload)/)) {
                        o[key] = v;
                    }
                });

                if(post.extUpload == 'true') {
                    o.isUpload = true;
                    isUpload = true;
                }

                arg.push(o);
            }

            arg.push(function(result) {

                if(isUpload) {

                    res.writeHead(200, {
                        "Content-Type" : 'text/html'
                    });

                    var ret = NX.encode({
                        type: 'rpc',
                        tid: tid,
                        action: action,
                        method: method,
                        result: result,
                        status: true
                    });

                    var output = NX.sprintf('<html><body><textarea>%s</textarea></body></html>', ret);

                    var o = {
                        abort: true,
                        render: {
                            ext: 'html',
                            size: output.length,
                            data: output
                        }
                    };

                    next(o);

                } else {

                    var output = NX.JSON.encode({
                        type: 'rpc',
                        tid: tid,
                        action: actionName,
                        method: method,
                        result: result,
                        status: true
                    });

                    var o = {
                        abort: true,
                        render: {
                            ext: 'json',
                            size: output.length,
                            data: output
                        }
                    };

                    next(o);

                }

            });

            // モジュールメソッドコール
            mod[method].apply(mod, arg);

        } else {

            var api = {
                url: req.url,
                type: 'remoting'
            };

            var ra = {};

            NX.iterate(action, function(memberName) {

                var member = action[memberName];

                if(member instanceof NX.app.module.Module) {

                    var mod = member;
                    var interface = [];

                    NX.iterate(member, function(name) {

                        if(NX.isFunction(mod[name])) {
                            interface.push({
                                name:name,
                                len: (mod[name].length - 1)
                            });
                        }

                    });

                    ra[memberName] = interface

                }

            });

            api['actions'] = ra;

            var output = [
                "Ext.ns('Ext.app');",
                "Ext.app.REMOTING_API = ",
                NX.JSON.encode(api),
                ";"
            ].join('');

            var o = {
                abort: true,
                render: {
                    ext: 'js',
                    data: output,
                    size: output.length
                }
            };

            next(o);

        }

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
