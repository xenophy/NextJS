/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.MemoryStore

NX.define('NX.data.MemoryStore', {

    // {{{ extend

    extend: 'NX.data.Store',

    // }}}
    // {{{ constructor

    constructor: function() {
        this.sessions = {};
    },

    // }}}
    // {{{ get

    get: function(sid, fn) {

        var self = this;
        process.nextTick(function(){
            var expires
            , sess = self.sessions[sid];
            if (sess) {
                sess = JSON.parse(sess);
                expires = 'string' == typeof sess.cookie.expires
                ? new Date(sess.cookie.expires)
                : sess.cookie.expires;
                if (!expires || new Date < expires) {
                    fn(null, sess);
                } else {
                    self.destroy(sid, fn);
                }
            } else {
                fn();
            }
        });


    },

    // }}}
    // {{{ set

    set: function(sid, sess, fn) {

        var self = this;
        process.nextTick(function(){
            // クラスをJSON化するのはどうか・・
            self.sessions[sid] = sess;//JSON.stringify(sess);
            fn && fn();
        });

    },

    // }}}
    // {{{ destroy

    destroy: function(sid, fn){

        var self = this;
        process.nextTick(function(){
            delete self.sessions[sid];
            fn && fn();
        });

    },

    // }}}
    // {{{ all

    all: function(fn) {
        var arr = []
        , keys = Object.keys(this.sessions);
        for (var i = 0, len = keys.length; i < len; ++i) {
            arr.push(this.sessions[keys[i]]);
        }
        fn(null, arr);
    },

    // }}}
    // {{{ clear

    clear: function(fn) {

        this.sessions = {};
        fn && fn();

    },

    // }}}
    // {{{ get

    length: function(fn) {
        fn(null, Object.keys(this.sessions).length);
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
