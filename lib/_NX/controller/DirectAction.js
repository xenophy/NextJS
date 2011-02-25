/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');
var fs = require('fs');

// }}}
// {{{ NX.DirectAction

/**
 * @class NX.DirectAction
 */
NX.DirectAction = function() {

    var me = this;

    return NX.extend(NX.Action, {

        // {{{ constructor

        constructor : function(config) {

            var me = this;

            config = config || {};

            NX.apply(me, config);
            NX.applyIf(me, {
                descriptor : 'Ext.app.REMOTING_API'
            });

            // スーパークラスメソッドコール
            NX.DirectAction.superclass.constructor.apply(me, arguments);
        },

        // }}}
        // {{{ execute

        execute : function(req, res) {

            var me = this;
            var o = {};

            NX.applyIf(me, {
                router : req.url
            });

            if(req.method === "POST") {

                var action = me.post.action || me.post.extAction;
                var method = me.post.method || me.post.extMethod;
                var tid = me.post.tid || me.post.extTID;
                //var mod = me.controller.__modules[action];
                var mod = me.__modules[action];
                var arg = me.post.data || [];
                var isUpload = false;

                if(me.post.extUpload || me.post.extAction) {

                    var o = {};
                    o.isUpload = false;

                    NX.iterate(me.post, function(key, v) {
                        if(!key.match(/^(extTID|extAction|extMethod|extType|extUpload)/)) {
                            o[key] = v;
                        }
                    });

                    if(me.post.extUpload == 'true') {
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

                        ret = NX.sprintf('<html><body><textarea>%s</textarea></body></html>', ret);

                        res.write(ret);
                        res.end();

                    } else {

                        res.writeHead(200, {
                            "Content-Type": me.controller.mimetype['js']
                        });

                        res.end(NX.encode({
                            type: 'rpc',
                            tid: tid,
                            action: action,
                            method: method,
                            result: result,
                            status: true
                        }));
                    }

                });

                // モジュールメソッドコール
                mod[method].apply(mod, arg);

            } else {

                var modapi = {};
                var parseReady = {};

                NX.iterate(me.__modules, function(name, mod) {
                    parseReady[name] = false;
                });

                var parsed = function(name, ret) {

                    parseReady[name] = true;
                    modapi[name] = ret;

                    var fullReady = true;
                    NX.iterate(parseReady, function(key, v) {
                        if(v !== true) {
                            fullReady = false;
                        }
                    });

                    if(fullReady === true) {

                        var api = {
                            url: '%s',
                            type: 'remoting',
                            actions: modapi
                        };

                        api = NX.encode(api);

                        // ルーター設定
                        api = NX.sprintf(api, me.router);

                        res.writeHead(200, {"Content-Type": me.controller.mimetype['js']});
                        res.end(NX.sprintf('%s = %s;', me.descriptor, api));
                    }
                };

                NX.iterate(me.__modules, function(name, mod) {

                    var moduleCls = mod.__cls;
                    var file = mod.__file;
                    var ret = [];

                    fs.readFile(file, function(err, data) {

                        data = data || '';
                        var src = data.toString('utf8');
                        src = src.replace(/[\n\r|\r]/gm, "\n");

                        var ignoreMember = {};
                        NX.iterate(NX.Module.prototype, function(name) {
                            ignoreMember[name] = true;
                        })

                        var methods = [];
                        NX.iterate(moduleCls.prototype, function(name, member) {
                            if(ignoreMember[name] !== true && NX.isFunction(member)) {
                                methods.push(name);
                            }
                        });

                        NX.each(methods, function(method) {

                            var res = src.match(new RegExp(NX.escapeRe(method) + '.*?:.*?function.*?\(.*?\).*?{(.|\n)*?}', 'gm'));
                            var code = '';

                            if(res.length === 1) {

                                code = res[0];

                                // コード位置の特定
                                var pos = src.indexOf(code);

                                // コード位置より前のソース取得
                                var commentSrc = src.substring(0, pos);

                                // コメントマッチ
                                var commentRes = commentSrc.match(/\/\*\*(.|\n)*?\*\//g);

                                    var formHandler = false;
                                if(NX.isArray(commentRes) && commentRes.length > 0) {

                                    // コメント解析
                                    commentSrc = commentRes[commentRes.length - 1];

                                    var tmp = commentSrc.match(/@formHandler/);
                                    if(!NX.isNull(tmp)) {
                                        formHandler = true;
                                    }

                                }

                                // コードの中から引数を解析
                                argRes = code.match(/function.*?\(.*?\)/g);

                                var len = 0;
                                if(argRes.length > 0) {

                                    var argCode = argRes[0];

                                    argRes = argCode.match(/\(.*?\)/g);

                                    argCode = argRes[0];
                                    argCode = NX.trim(argCode);

                                    argCode = argCode.substring(1, argCode.length - 1);
                                    argCode = NX.explode(',', argCode);

                                    len = argCode.length;

                                    // 最後の引数がコールバック関数である前提
                                    len--;
                                }

                                var o = {
                                    name: method,
                                    len: len
                                };

                                if(formHandler === true) {
                                    o.formHandler = true;
                                }

                                ret.push(o);

                            }

                        });

                        parsed(name, ret);

                    });

                });

            }

            // TODO: setTemplateで実行できるように実装
            me.controller.view.template = false;

            // TODO: end(false)でもレンダリングがされないように実装
            me.end();
        }

        // }}}

    });

    // }}}

}();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
