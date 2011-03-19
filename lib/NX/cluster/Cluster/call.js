/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.call

var $METHOD = module.exports = function(id, method) {

    var me = this,
        args = Array.prototype.slice.call(arguments),
        id = args.shift(),
        method = args.shift();

    me.sock.write(NX.encode({
        method: method,
        args: args,
        id: id
    }), 'ascii');

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
