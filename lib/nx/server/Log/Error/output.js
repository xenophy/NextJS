/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.log.Error.output

module.exports = function(msg, config) {

    var me = this;

    var logFormat = "[%t] %LEVEL";
    var dir = config.paths.logs;
    var filepath = dir + '/error_log';

    var writers = config.writers || [{
        name: 'file',
        filepath: filepath
    },{
        name: 'syslog',
        filepath: '/var/log/nextjs/error_log'
    }];

    var logValue = logFormat;
    logValue = logValue.replace(/%t/g, NX.Date.format(new Date(), 'Y-m-d'));
    logValue = logValue.replace(/%LEVEL/g, '[error] ');
    logValue += msg;

    logValue += "\n";

    writers.forEach(function(o) {

        name = o.name.toLowerCase();
        name = NX.String.capitalize(name);

        NX.require('NX.server.log.writer.' + name);
        eval(NX.String.format("var writer = NX.server.log.writer.{0};", name));

        writer.write({
            filepath: o.filepath,
            logValue: logValue
        }, function() {

        });

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
