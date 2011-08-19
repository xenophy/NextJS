/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.log.writer.Syslog.write

module.exports = function(config, next) {

    var me = this,
        filepath = config.filepath,
        logValue = config.logValue;

    var dgram = NX.Dgram;
    var message = new Buffer(logValue);
    var client = dgram.createSocket("unix_dgram");

    client.send(message, 0, message.length, filepath, function(err, bytes) {

        if(err) {
            next();
            return;
        }
        console.log("Wrote " + bytes + " bytes to socket.");
        next();
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
