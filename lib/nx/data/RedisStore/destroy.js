/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.RedisStore.destroy

module.exports = function(sid, fn) {

    var me = this;

    process.nextTick(function(){

        var file = '/tmp/' + [
            sid.replace(/\//g, '%2f').
                replace(/:/g,  '%3a').
                replace(/\*/g, '%2a').
                replace(/\?/g, '%3f').
                replace(/"/g,  '%22').
                replace(/</g,  '%3c').
                replace(/>/g,  '%3e').
                replace(/\|/g, '%7c').
                replace(/\\/g, '%5c'),
            me.serverPort,
            me.sessionKey
        ].join('.');

//        NX.Fs.unlinkSync(file);

        delete me.sessions[sid];

        fn && fn();

    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
