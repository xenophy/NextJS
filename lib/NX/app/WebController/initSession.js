/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.WebController.initSession

module.exports = function(config) {

    var defaultFingerprint = function(req) {
        return req.headers['user-agent'] || '';
    };

    var req = config.req;
    var res = config.res;
    var store = config.store || NX.create('NX.data.MemoryStore');
    var ignore = config.ignore;
    var key = config.key;
    var secret = config.secret;
    var cookie = config.cookie;
    var fingerprint = config.fingerprint || defaultFingerprint;
    var url = NX.Url.parse(req.url), path = url.pathname;

    if(~ignore.indexOf(path)) {
       return;
    }

    console.log("========");
    console.log(store);

    req.sessionStore = store;

    var writeHead = res.writeHead;
    res.writeHead = function(status, headers) {

        if(req.session) {

            var cookie = req.session.cookie,
                secured = cookie.secure && (req.connection.secure || req.connection.proxySecure);

            if(secured || !cookie.secure) {
                res.setHeader('Set-Cookie', cookie.serialize(key, req.sessionID));
            }
        }

        res.writeHead = writeHead;

        return res.writeHead(status, headers);

    };

    var end = res.end;
    res.end = function(data, encoding) {

        res.end = end;

        if(req.session) {

            if(!res._header) {
                res._implicitHeader();
            }

            req.session.resetMaxAge();
            req.session.save(function() {
                res.end(data, encoding);
            });

        } else {

            res.end(data, encoding);

        }

    };

    function hash(base) {
        return NX.Crypto.createHmac('sha256', secret).update(base + fingerprint(req)).digest('base64').replace(/=*$/, '');
    }

    var generate = store.generate = function() {

        var base = NX.uid(24);
        var sessionID = base + '.' + hash(base);

        req.sessionID = sessionID;
        req.session = new NX.util.Session(req);
        req.session.cookie = new NX.util.Cookie(cookie);

    };

    req.sessionID = req.cookies[key];

    if(!req.sessionID) {
        generate();
        return;
    }

    var parts = req.sessionID.split('.');

    if(parts[1] != hash(parts[0])) {
        generate();
        return;
    }

    var pause = utils.pause(req);

    store.get(req.sessionID, function(err, sess) {

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

            var expires = sess.cookie.expires, orig = sess.cookie.originalMaxAge;

            sess.cookie = new Cookie(sess.cookie);

            if('string' == typeof expires) {
                sess.cookie.expires = new Date(expires);
            }

            sess.cookie.originalMaxAge = orig;
            req.session = new Session(req, sess);
            req.session.resetLastAccess();

            pause.resume();
        }
    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
