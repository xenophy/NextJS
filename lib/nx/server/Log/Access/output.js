/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.log.Access.output

module.exports = function(server, config) {

    var me = this;

    var logFormat = config.logFormat || "%a %t \"%r\" %>s %b";
    var dir = config.paths.logs;
    var filepath = dir + '/access_log';

    var writers = config.writers || [{
        name: 'file',
        filepath: filepath
    },{
        name: 'syslog',
        filepath: '/var/log/nextjs/syslog'
    }];

    return function(req, res, next) {

        var keyRegex = 'a-zA-Z\-\.\*\+\?';

        // 初期化
        me.init(req, res, function() {

            var logValue = logFormat,
                matches;

            logValue = logValue.replace(/%%/g, '%');
            logValue = logValue.replace(/%a/g, me.info.remoteAddress);
            logValue = logValue.replace(/%A/g, me.info.localAddress);
            logValue = logValue.replace(/%B/g, me.info.responseByte);
            logValue = logValue.replace(/%b/g, me.info.responseByteCLF);

            matches = logValue.match(new RegExp("%\{[" + keyRegex + "]+\}C", "g"));

            if(matches && me.info.cookies) {
                matches.forEach(function(key) {
                    key = key.substr(2, key.length -4);
                    logValue = logValue.replace(new RegExp("%\{" + key + "\}C", "g"), me.info.cookies[key]);
                });
            }

            logValue = logValue.replace(/%D/g, me.info.requestTime);


            matches = logValue.match(new RegExp("%\{[" + keyRegex + "]+\}e", "g"));

            if(matches && me.info.cookies) {
                matches.forEach(function(key) {
                    key = key.substr(2, key.length -4);
                    logValue = logValue.replace(new RegExp("%\{" + key + "\}e", "g"), process.env[key]);
                });
            }

            logValue = logValue.replace(/%f/g, NX.Path.basename(me.info.requestFile));

            logValue = logValue.replace(/%H/g, me.info.requestProtocol);


            matches = logValue.match(new RegExp("%\{[" + keyRegex + "]+\}i", "g"));

            if(matches && me.info.cookies) {
                matches.forEach(function(key) {
                    key = key.substr(2, key.length -4);
                    console.log(key);
                    logValue = logValue.replace(new RegExp("%\{" + key + "\}i", "g"), req.headers[key]);
                });
            }

            logValue = logValue.replace(/%m/g, req.method);

            matches = logValue.match(new RegExp("%\{[" + keyRegex + "]+\}o", "g"));

            if(matches && me.info.cookies) {
                matches.forEach(function(key) {
                    key = key.substr(2, key.length -4);
                    console.log(key);
                    logValue = logValue.replace(new RegExp("%\{" + key + "\}o", "g"), res._headers[key]);
                });
            }

            logValue = logValue.replace(/%p/g, me.info.serverPort);
            logValue = logValue.replace(/%P/g, me.info.pid);
            logValue = logValue.replace(/%q/g, me.info.qs);

            var val = NX.String.format('{0} {1} {2}', req.method, me.info.requestFile, me.info.requestProtocol);
            logValue = logValue.replace(/%r/g, val);

            logValue = logValue.replace(/%s/g, me.info.statusCore);
            logValue = logValue.replace(/%>s/g, me.info.statusCore);

            logValue = logValue.replace(/%t/g, me.info.requestTimeCLF);
            logValue = logValue.replace(/%T/g, (me.info.requestTime / 1000 / 1000));
            logValue = logValue.replace(/%U/g, me.info.requestFile);

            // %v

            // %X
            var val = 'X';

            if(res.finished) {
                if(req.headers['connection'] === 'keep-alive') {
                    val = '+';
                } else {
                    val = '-';
                }
            }
            logValue = logValue.replace(/%X/g, val);

            logValue += "\n";


            //writers.

            writers.forEach(function(o) {

                name = o.name.toLowerCase();
                name = NX.String.capitalize(name);

                NX.require('NX.server.log.writer.' + name);
                eval(NX.String.format("var writer = NX.server.log.writer.{0};", name));

                writer.write({
                    filepath: o.filepath,
                    logValue: logValue
                }, next);

            });

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
