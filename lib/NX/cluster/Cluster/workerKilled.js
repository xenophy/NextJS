/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.workerKilled

var $METHOD = module.exports = function(worker) {

    var me = this;

    if(new Date - me.startup < 20000) {

        if(++me._killed == 20) {

            console.log([
                '',
                'Cluster detected over 20 worker deaths in the first',
                '20 seconds of life, there is most likely',
                'a serious issue with your server.',
                '',
                'aborting.',
                ''
            ].join());

            process.exit(1);
        }

    }

    me.fireEvent('workerkilled', worker, me);

    me.removeWorker(worker.id);

    switch(me.state) {

        case NX.Cluster.HARD_SHUTDOWN:
        break;

        case NX.Cluster.GRACEFUL_SHUTDONW:
            --me.pendingDeaths || me.destroy();
        break;

        default:
            this.spawnWorker(worker.id);

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
