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
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        NX.apply(this, config);

    },

    // }}}
    // {{{ set

    set: function(name, value) {

        var result = this.controller.result;

        if(NX.isString(name)) {

            result[name] = value;

        } else if(NX.isObject(name)) {

            NX.apply(result, name);

        } else {

            return false;

        }

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
                post: this.post,
                get: this.get,
                request: this.request
            });

            // 次のアクション実行
            action.execute.call(action);

        } else {

            // アクション実行終了
            this.controller.endAction();
        }

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
