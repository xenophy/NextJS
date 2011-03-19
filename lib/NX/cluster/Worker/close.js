/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Worker.close

var $METHOD = module.exports = function() {

    var me = this, server = me.server;

    if(server.connections) {

        server.watcher.stop();

        setInterval(function(){

            me.master.call('workerWaiting', server.connections);
            server.connections || me.destroy();

        }, 2000);

        if(me.timeout) {

            setTimeout(function(){
                me.master.call('workerTimeout', me.timeout);
                me.destroy();
            }, me.timeout);

        }

    } else {

        me.destroy();

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
