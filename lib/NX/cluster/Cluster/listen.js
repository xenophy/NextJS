/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.listen

var $METHOD = module.exports = function() {

    var me = this;


    if(me.isMaster) {

        if(me.isChild) {


        } else {

            me.createSocket(function(err, fd) {

                if(err) {
                    throw err;
                }

                me.fd = fd;
                me.start();

            });

        }


    } else {


        console.log("worker");

    }

    //console.log(process.argv);




};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
