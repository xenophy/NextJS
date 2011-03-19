/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.attemptRestart

var $METHOD = module.exports = function() {

    var me = this,
        uptime = new Date - me.startup,
        threshold = me.options.restartThreshold,
        timeout = me.options.restartTimeout;

    if(me.__restarting) {
        return;
    }

    if(uptime < threshold) {

        me.__restarting = true;

        // イベント発火
        me.fireEvent('cyclicrestart', me);

        setTimeout(function(self){
            self.restart(sig);
        }, timeout, me);

    } else {

        me.restart(sig);

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
