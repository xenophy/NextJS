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

    NX.apply(me, {

        // {{{ parseModule

        parseModule : function(file, callback) {

            var ret = [];

            fs.readFile(file, function(err, data) {

                var src = data.toString();
                src = src.replace(/[\n\r|\r]/gm, "\n");

                moduleCls = require(file);

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

                        if(commentRes.length > 0) {

                            // コメント解析
                            commentSrc = commentRes[commentRes.length - 1];

                            // TODO:formHandler解析

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

                        ret.push({
                            name: method,
                            len: len
                        });

                    }

                });

                callback(ret);

            });

        },

        // }}}
        // {{{ parseModules

        parseModules : function(use, mods, modroot, callback) {

            var me = this,
                ret = {},
                actions = {},
                parseInfo = {};

            use = use || [];

            NX.each(use, function(mod, i) {

                var name = mod;

                if(NX.isObject(mod)) {
                    name = mod.name;
                }

                if(!mods[name]) {
                    // TODO:例外発生でコントローラーにモジュールが設定されていないことを表示
                    return;
                }

                parseInfo[name] = parseModule(
                    path.normalize(modroot + '/' + name + '.js'),
                    function(methods) {

                        actions[name] = methods;

                        if(i === use.length - 1) {

                            ret = {
                                url: '%s',
                                type: 'remoting',
                                actions: actions
                            }

                            callback(NX.encode(ret));
                        }
                    }
                );
            });

        }

        // }}}

    });

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

                var mod = me.controller.__modules[me.post.action];
                var arg = me.post.data;

                arg = arg || [];

                arg.push(function(result) {

                    res.writeHead(200, {
                        "Content-Type": me.controller.mimetype['js']
                    });

                    res.end(NX.encode({
                        type: 'rpc',
                        tid: me.post.tid,
                        action: me.post.action,
                        method: me.post.method,
                        result: result,
                        status: true
                    }));

                });

                // モジュールメソッドコール
                mod[me.post.method].apply(mod, arg);

            } else {

                // モジュール解析
                parseModules(me.use, me.controller.__modules, me.controller.modulePath, function(api) {

                    // ルーター設定
                    api = NX.sprintf(api, me.router);

                    res.writeHead(200, {
                        "Content-Type": me.controller.mimetype['js']
                    });
                    res.end(
                        NX.sprintf(
                            '%s = %s;',
                            me.descriptor,
                            api
                    )
                    );
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
