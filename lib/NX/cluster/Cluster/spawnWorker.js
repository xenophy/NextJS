/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.spawnWorker

var $METHOD = module.exports = function(id) {

    var me = this, worker;

    if(NX.isNumber(id)) {

        worker = new NX.Worker(me).spawn(id);
        me.children[id] = worker;
        worker.id = id;

    } else {

        worker = new NX.Worker(me).spawn(me.children.length);
        me.children.push(worker);

    }

    worker.sock.write(NX.encode({
        method: 'connect',
        args: [worker.id, this.options]
    }), 'ascii', me.fd);

    me.fireEvent('worker', worker, me);

    return worker;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
