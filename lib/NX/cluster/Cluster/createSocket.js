/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var binding = process.binding('net'),
    dns = require('dns'),
    net = require('net');

// }}}
// {{{ NX.server.Cluster.createSocket

var $METHOD = module.exports = function(cb) {

    var me = this, ipv, host = me.getHost();

    if(host) {

        if(ipv = net.isIP(host)) {

            cb({ fd: binding.socket('tcp' + ipv) });

        } else {

            // DNS Lookup
            dns.lookup(host, function(err, ip, ipv) {

                if(err) {
                    cb(err)
                }

                // ホスト設定
                me.setHost(ip);

                cb({ fd: binding.socket('tcp' + ipv) });

            });

        }

    } else {
        cb({ fd: binding.socket('tcp4') });
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
