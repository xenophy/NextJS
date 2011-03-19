/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var fs = require('fs'),
    binding = process.binding('net');

// }}}
// {{{ NX.server.Cluster.startListening

var $METHOD = module.exports = function(bind) {

    var me = this;

    if(NX.isString(me.getPort()) && bind) {

        fs.unlink(me.getPort(), function(err){

            if(require('constants').ENOENT != err.errno) {
                throw err;
            }

            listen();

        });

    } else {

        listen();

    }

    function listen() {

        if(bind) {
            binding.bind(me.fd, me.getPort(), me.getHost());
            binding.listen(me.fd, me.options.backlog);
        }

        me.callback && me.callback();

        me.fireEvent('listening', me);
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
