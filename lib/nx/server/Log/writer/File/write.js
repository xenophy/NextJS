/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.log.writer.File.write

module.exports = function(config, next) {

    var me = this,
        filepath = config.filepath,
        logValue = config.logValue;
    var fs = NX.Fs;

    fs.open(filepath, 'a+', function(err, id) {

        if(err) {
            next();
            return;
        }

        fs.write(id, logValue, null, 'utf8', function(err) {

            fs.close(id, function(){

                next();

            });
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
