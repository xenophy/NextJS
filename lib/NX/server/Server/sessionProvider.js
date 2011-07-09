/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.sessionProvider

module.exports = function(config) {

    config = config || {};

    var defaultFingerprint = function(req) {
        var ua = req.headers['user-agent'] || '';
        return ua.replace(/;?\schromeframe\/[\d\.]+/, '');
    };

    NX.applyIf(config, {
        store: NX.create('NX.data.MemoryStore'),
        //store: NX.create('NX.data.FileStore'),
        fingerprint: defaultFingerprint
    });

    var key = config.key;
    var secret = config.secret;
    var store = config.store;
    var fingerprint = config.fingerprint;
    var cookie = config.cookie;

    store.sessionKey = key;
    store.serverPort = config.serverPort;

    store.hash = function(req, base) {

        return NX.Crypto.
               createHmac('sha256', secret).
               update(base + fingerprint(req)).
               digest('base64').
               replace(/=*$/, '');
    };

    store.generate = function(req) {

        var base = NX.uid(24),
            sessionId = base + '.' + store.hash(req, base);

        req.sessionId = sessionId;
        req.session = NX.create('NX.Session', req);
        req.session.cookie = NX.create('NX.Cookie', cookie);

    };

    return function(req, res, next) {

        var url = NX.Url.parse(req.url), path = url.pathname;

        req.sessionStore = store;

        var writeHead = res.writeHead;
        res.writeHead = function(status, headers) {

            if(req.session) {

                var cookie = req.session.cookie,
                    secured = cookie.secure && (req.connection.encrypted || req.connection.proxySecure);

                if(secured || !cookie.secure) {
                    res.setHeader('Set-Cookie', cookie.serialize(key, req.sessionId));
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

        function hash(base) {

            return store.hash(req, base);

        }

        function generate() {

            store.generate(req);

        }

        req.sessionId = req.cookies[key];

        if(!req.sessionId) {

            generate();
            next();

            return;
        }

        var parts = req.sessionId.split('.');

        if(parts[1] != hash(parts[0])) {

            generate();
            next();

            return;
        }

        var pause = (function(obj) {

            var onData, onEnd, events = [];

            obj.on('data', onData = function(data, encoding) {
                events.push(['data', data, encoding]);
            });

            obj.on('end', onEnd = function(data, encoding) {
                events.push(['end', data, encoding]);
            });

            return {

                end: function() {

                    obj.removeListener('data', onData);
                    obj.removeListener('end', onEnd);

                },

                resume: function() {

                    this.end();

                    for(var i = 0, len = events.length; i < len; ++i) {
                        obj.emit.apply(obj, events[i]);
                    }
                }

            };

        })(req);

        store.get(req.sessionId, function(err, sess) {

            var $next = next;

            next = function(err) {

                $next(err);

                pause.resume();

            }

            if(err) {

                if('ENOENT' == err.code) {

                    generate();
                    next();

                } else {

                    next(err);

                }

            } else if(!sess) {

                generate();
                next();

            } else {

                store.createSession(req, sess);
                next();

            }
        });

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
