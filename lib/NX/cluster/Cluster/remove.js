/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.remove

var $METHOD = module.exports = function(n, signal) {

    var me = this, len = this.children.length, worker;

    if(n > len) {
        n = len;
    }

    while(n--) {

        worker = me.children.pop();

        worker.proc.kill(signal || NX.Cluster.signs.SIGQUIT);

        me.fireEvent('workerremoved', worker, me);

        me.removeWorker(worker.id);
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
