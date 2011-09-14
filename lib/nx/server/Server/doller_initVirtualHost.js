/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.$initVirtualHost

module.exports = function() {

    return function(req, res, next) {

        var config = req.config;
        var vh = config.virtualhost;

        if(!vh || vh.length < 1) {
            next();
            return;
        }

        var isSSL = false;

        if(req.connection.pair && req.connection.pair._secureEstablished) {
            isSSL = true;
        }

        var host = req.headers.host;
        var urlBase = isSSL ? 'https://' : 'http://';

        var purl = NX.Url.parse(urlBase + req.headers.host);
        var rhost = purl.hostname;
        var target;
        var ppart = [];

        // 完全一致
        vh.forEach(function(item) {
            if(item['server'] === rhost && item['port'] == purl.port) {
                target = item;
            } else if(item['server'] === '*') {
                target = item;
            }
        });

        // エイリアス一致
        if(!target) {

            var tppart = [];

            vh.forEach(function(item) {

                if(!NX.isString(item.alias)) {
                    return;
                }

                ppart.push(rhost);

                var alias = item.alias.split('.').reverse();
                var host = rhost.split('.').reverse();
                var match = true;

                alias.forEach(function(part, i) {

                    tppart.push(host[i]);

                    if(part === '*') {
                        return;
                    }

                    if(part !== host[i]) {
                        match = false;
                    }

                });

                if(match === true && item['port'] == purl.port) {
                    target = item;
                }

            });

            tppart = tppart.reverse();
            ppart = ppart.concat(tppart);

        }

        if(target && (target.root || target.virtualroot)) {

            var execPath;

            if(NX.isString(target.virtualroot)) {

                ppart.unshift(target.virtualroot);
                execPath = NX.String.format.apply(this, ppart);

            } else if(NX.isFunction(target.virtualroot)) {

                execPath = target.virtualroot(req, res);

            } else {
                execPath = target.root;
            }

            // 実行パスをリアルパスに変換
            execPath = NX.Fs.realpathSync(execPath);

            NX.apply(req.config.paths, {
                exec: execPath,
                logs: execPath + '/logs',
                configs: execPath + '/configs',
                modules: execPath + '/modules',
                contents: execPath + '/public',
                public: execPath + '/public',
                controllers: execPath + '/controllers',
                templates: execPath + '/templates',
                actions: execPath + '/actions'
            });

            [
                'configs',
                'modules',
                'contents',
                'public',
                'controllers',
                'templates',
                'actions'
            ].forEach(function(key) {

                if(target.paths && target.paths[key]) {
                    req.config.paths[key] = target.paths[key];
                }

            });

            for(idx in req.config.paths) {
                req.config.paths[idx] = NX.Path.normalize(req.config.paths[idx]);
            }

        }

        // 次へ
        next();

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
