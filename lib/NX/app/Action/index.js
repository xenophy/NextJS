/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Action

NX.define('NX.app.Action', {

    // {{{ get

    get: {},

    // }}}
    // {{{ post

    post: {},

    // }}}
    // {{{ request

    request: {},

    // }}}
    // {{{ result

    result: {},

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        NX.apply(this, config);

    },

    // }}}
    // {{{ set

    set: function(name, value) {

        var result = this.result;

        if(NX.isString(name)) {

            result[name] = value;

        } else if(NX.isObject(name)) {

            NX.apply(result, name);

        } else {

            return false;

        }
        console.log("Set");

        return result;

    },

    // }}}
    // {{{ end

    end: function() {

        if(this.next && this.next.define && this.next.define.execute) {

            var action = this.next.define;

            // コントローラー設定
            action.controller = this.controller;

            NX.apply(action, {
                controller: this.controller,
                post: NX.clone(this.post),
                cookie: NX.clone(this.cookie),
                get: NX.clone(this.get),
                result: NX.clone(this.result),
                request: NX.clone(this.request)
            });

            // 次のアクション実行
            action.execute.call(action);

        } else {

            // アクション実行終了
            this.controller.endAction(this.result);
        }

    },

    // }}}
    // {{{ setCookie

    setCookie : function(name) {

        return this.controller.setCookie.apply(this.controller, arguments);

    },

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
