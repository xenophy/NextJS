/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.WebController.initSession

module.exports = function() {

    (function(ctrl) {

        var defaultFingerprint = function(req) {
            var ua = req.headers['user-agent'] || '';
            return ua.replace(/;?\schromeframe\/[\d\.]+/, '');
        };

        var me = ctrl,
            req = me.req,
            res = me.res,
            share = me.share,
            config = me.config,
            store = config.session.store || NX.create('NX.data.MemoryStore'),
            key = config.session.key,
            secret = config.session.secret,
            cookie = config.session.cookie,
            fingerprint = config.session.fingerprint || defaultFingerprint;

        fingerprint = fingerprint(req);
        var sessionId = req.cookies[key];
        var writeHead = res.writeHead;
        res.writeHead = function(status, headers) {

            if(req.session) {

                var cookie = req.session.cookie,
                secured = cookie.getSecure() && (req.connection.secure || req.connection.proxySecure);

                if(secured || !cookie.getSecure()) {
                    me.setCookie(key, sessionId, cookie);
                }

            }

            res.writeHead = writeHead;

            return res.writeHead(status, headers);
        };

        var end = res.end;
        res.end = function(data, encoding) {

            res.end = end;

            if(req.session) {

                req.session.resetMaxAge();
                req.session.save(function() {
                    res.end(data, encoding);
                });

            } else {

                res.end(data, encoding);

            }

        };

        if(!share.sessionStore) {

            store.generate = function(req, fp) {

                var base = NX.uid(24);
                var id = base + '.' + hash(fp, base);

                req.sessionStore = store;
                req.session = new NX.util.Session(req, {});
                req.session.cookie = new NX.util.Cookie(cookie);
                req.session.id = id;
                req.session.resetLastAccess();
                sessionId = id;

            };
            share.sessionStore = store;

        } else {
            store = share.sessionStore;
        }

        // {{{ hash

        var hash = function(fp, base) {
            return NX.Crypto.createHmac('sha256', secret).update(base + fp).digest('base64').replace(/=*$/, '');
        }

        // }}}
        // {{{ generate

        var generate = function() {
            store.generate(req, fingerprint);
        };

        // }}}

        if(!sessionId) {
            generate();
            return;
        }

        /*
        var parts = sessionId.split('.');

        if(parts[1] != hash(fingerprint, parts[0])) {
            generate();
            return;
        }
        */

        store.get(sessionId, function(data) {

            req.session = new NX.util.Session(req, data || {});
            req.session.cookie = new NX.util.Cookie(cookie);
            req.session.id = sessionId;
            req.session.resetLastAccess();
            req.sessionStore = store;

        });

    })(this);














    /*

    var defaultFingerprint = function(req) {
        return req.headers['user-agent'] || '';
    };

    var me = this,
        req = me.req,
        res = me.res,
        share = me.share,
        config = me.config,
        store = config.session.store || NX.create('NX.data.MemoryStore'),
        ignore = config.session.ignore;
        key = config.session.key,
        secret = config.session.secret,
        cookie = config.session.cookie,
        fingerprint = config.session.fingerprint || defaultFingerprint,
        url = NX.Url.parse(req.url),
        path = url.pathname;

    if(~ignore.indexOf(path)) {
       return;
    }

    if(!share.sessionStore) {
        share.sessionStore = store;
    } else {
        store = share.sessionStore;
    }

    var writeHead = res.writeHead;
    res.writeHead = function(status, headers) {

        if(share.session) {

            var cookie = share.session.cookie,
                secured = cookie.getSecure() && (req.connection.secure || req.connection.proxySecure);

            if(secured || !cookie.getSecure()) {
                me.setCookie(key, share.sessionID);
            }
        }

        res.writeHead = writeHead;

        return res.writeHead(status, headers);

    };

    var end = res.end;
    res.end = function(data, encoding) {

        res.end = end;

        if(share.session) {

            console.log("保存します：");
            console.log(share.session.values);

            share.session.resetMaxAge();
            share.session.save(function() {
                res.end(data, encoding);
            });

        } else {

            res.end(data, encoding);

        }

    };


    var generate = store.generate = function() {

        var base = NX.uid(24);
        var sessionID = base + '.' + hash(base);

        share.sessionID = sessionID;
        share.session = new NX.util.Session(share);
        share.session.cookie = new NX.util.Cookie(cookie);

    };

    if(!share.sessionID) {
        generate();
        return;
    }

    var parts = share.sessionID.split('.');

    if(parts[1] != hash(parts[0])) {
        generate();
        return;
    }

    var pause = function(obj) {

        var onData, onEnd, events = [];

        obj.on('data', onData = function(data, encoding){
            events.push(['data', data, encoding]);
        });

        obj.on('end', onEnd = function(data, encoding){
            events.push(['end', data, encoding]);
        });

        return {
            end: function(){
                obj.removeListener('data', onData);
                obj.removeListener('end', onEnd);
            },
            resume: function(){

                this.end();

                for(var i = 0, len = events.length; i < len; ++i) {
                    obj.emit.apply(obj, events[i]);
                }

            }
        };

    }(share);


    
    console.log("SESSIONID:" + share.sessionID);


    store.get(share.sessionID, function(err, sess) {

        if(err) {

            if('ENOENT' == err.code) {

                generate();
                pause.resume();

            } else {

                pause.resume();

            }

        } else if (!sess) {

            generate();
            pause.resume();

        } else {

            console.log("ストア");
            console.log(share.sessionStore);

            console.log("取得したセッションデータ:");
            console.log(sess);
            share.session.values = sess;
            sess = share.session;

            var expires = sess.cookie.getExpires(), orig = sess.cookie.getOriginalMaxAge();

            sess.cookie = new NX.util.Cookie(sess.cookie);

            if('string' == typeof expires) {
                sess.cookie.setExpires(new Date(expires));
            }

            sess.cookie.originalMaxAge = orig;
            share.session = new NX.util.Session(share, sess);
            share.session.resetLastAccess();

            pause.resume();
        }
    });

            */
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
