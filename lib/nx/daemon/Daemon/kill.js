/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.daemon.Daemon.kill

module.exports = function(lock, fn) {

    NX.Fs.readFile(lock, function (err, data) {

        if(err) {
            return fn(err);
        }

        try {

            var pid = parseInt(data.toString());

            if(pid > 0) {
                process.kill(pid);
            }

            NX.Fs.unlink(lock, function (err) {

                if(err) {
                    return fn(err);
                }

                fn(null, pid);

            });

        } catch(e) {

            fn(e);

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
