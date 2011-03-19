/* vim: set expaninvokedtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.cluster.Receiver

/**
 * @class NX.cluster.Receiver
 */
NX.define('NX.cluster.Receiver', {

    // {{{ frame

    /**
     * @method frame
     */
    frame: function(chunk) {

        var me = this;

        me._buf = me._buf || '';
        me.braces = me.braces || 0;

        for (var i = 0, len = chunk.length; i < len; ++i) {

            if('{' == chunk[i]) {
                ++me.braces;
            }

            if('}' == chunk[i]) {
                --me.braces;
            }

            me._buf += chunk[i];

            if(0 == me.braces) {

                var worker, obj = JSON.parse(me._buf);

                me._buf = '';

                if(NX.isNumber(obj.id)) {
                    worker = me.children[obj.id];
                }

                me.invoke(obj.method, obj.args, worker);

            }
        }

    },

    // }}}
    // {{{ invoke

    /**
     * @method invoke
     */
    invoke: function(method, args, worker) {

        var me = this;

        if(!method) {
            return;
        }

        if(!Array.isArray(args)) {
            args = [args];
        }

        if(worker) {
            args.unshift(worker);
        }

        if(!me[method]) {
            throw new Error('method ' + method + '() does not exist');
        }

        me[method].apply(me, args);

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
