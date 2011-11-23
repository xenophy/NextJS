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

            var finmods = {}, single, fin;

            NX.apply(post, req.body);

            if(!post['0']) {
                post = {
                    '0': post
                };
                single = true;
            }

            fin = function(tid, o) {

                finmods[tid] = o;

                var finall = true;
                NX.iterate(finmods, function(k, v) {
                    if(!v) {
                        finall = false;
                        return false;
                    }
                });

                if(finall) {

                    if(single) {

                        next(o);

                    } else {

                        var ret = [];

                        NX.iterate(finmods, function(k, v) {
                            ret.push(NX.JSON.decode(v.render.data));
                        });

                        var output = NX.JSON.encode(ret);
                        var o = {
                            abort: true,
                            render: {
                                ext: 'json',
                                size: output.length,
                                data: output
                            }
                        };

                        next(o);

                    };

                } else {

                    finmods[tid] = o;

                }

            };

            NX.iterate(post, function(k, post) {
                finmods[post.tid || post.extTID] = false;
            });

            NX.iterate(post, function(k, post) {
                console.log(arguments);

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

                        fin(tid, o);
                        //next(o);

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

                        fin(tid, o);
                        //next(o);

                    }

                });

                NX.apply(mod, {
                    req: req,
                    res: res,
                    cookie: req.cookies,
                    session: req.session.values
                });

                // モジュールメソッドコール
                mod[method].apply(mod, arg);


            });

        } else {

            var api = {
                url: req.url,
                namespace: action.namespace || undefined,
                type: 'remoting'
            };

            var ra = {};

            NX.iterate(action, function(memberName) {

                var member = action[memberName];

                if(member instanceof NX.app.module.Module) {

                    var mod = member;
                    var interface = [];

                    NX.iterate(member, function(name) {

                        var formHandler = false

                        if(NX.isFunction(mod[name])) {

                            if(name.substr(0, 1) === '$') {
                                formHandler = true;
                            }

                            var o = {
                                name:name,
                                len: (mod[name].length - 1)
                            };

                            if(formHandler) {
                                o.formHandler = true;
                            }

                            interface.push(o);
                        }

                    });

                    ra[memberName] = interface

                }

            });

            api['actions'] = ra;

            var addNS = '';
            if(action.namespace) {
                addNS = "Ext.ns('" + action.namespace + "');";
            }

            var output = [
                "Ext.ns('Ext.app');",
                addNS,
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
