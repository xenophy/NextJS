/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.RedisStore.constructor

module.exports = function(config) {

    var me = this,
        redis = require('redis');

    NX.apply(me, config);
    NX.apply(me, {
        sessions: {}
    });

    NX.applyIf(me, {
        prefix: 'sess:',
        client: new redis.createClient(config.port || config.socket, config.host, config)
    });

    me.client.on("error", function (err) {
        console.log("Redis connection error to " + config.host + ":" + config.port + " - " + err);
    });

    if(config.pass) {
        me.client.auth(config.pass, function(err){
            if(err) {
                throw err;
            }
        });
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
