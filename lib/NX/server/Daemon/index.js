/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var fs = require('fs');
var NXD = require('../../../../build/default/nxd');

// }}}
// {{{ NX.server.Daemon

/**
 * @class NX.server.Daemon
 */
NX.define('NX.server.Daemon', {

    // {{{ singleton

    /**
     * @prop singleton
     */
    singleton: true,

    // }}}
    // {{{ mixins

    /**
     * @prop mixins
     */
    mixins: [
        'NX.util.Observable'
    ],

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: function() {

        var me = this;

        // イベント定義
        me.addEvents(

            // {{{ destroy

            /**
             * @event destroy
             */
            'destroy'

            // }}}

        );

        // スーパークラスメソッドコール
        me.callParent();

    },

    // }}}
    // {{{ init

    /**
     * @method init
     * @private
     */
    init: function(out, lock, cb) {

        var me = this;

        me.all = new NX.util.HashMap();

        if(arguments.length === 1) {
            return me.init(out);
        }

        fs.open(out, 'w+', 0666, function (err, fd) {

            if(err) {
                return cb(err);
            }

            try {

                var pid = NXD.start(fd);

                NXD.lock(lock);

                cb(null, pid);

            } catch(e) {
                cb(e);
            }

        });

    },

    // }}}
    // {{{ kill

    /**
     * @method kill
     * @private
     */
    kill: function(lock, cb) {

        fs.readFile(lock, function (err, data) {

            if(err) {
                return cb(err);
            }

            try {

                var pid = parseInt(data.toString());
                process.kill(pid);

                fs.unlink(lock, function (err) {

                    if(err) {
                        return cb(err);
                    }

                    cb(null, pid);

                });

            } catch(e) {

                cb(e);

            }

        });

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
