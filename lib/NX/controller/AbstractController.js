/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ NX.controller.AbstractController

/**
 * @class NX.controller.AbstractController
 */
NX.controller.AbstractController = NX.extend(NX.util.Observable, {

    // {{{ constructor

    /**
     * @method AbstractController
     */
    constructor : function() {

        var me = this;

        // スーパークラスメソッドコール
        NX.controller.AbstractController.superclass.constructor.apply(me, arguments);

        // モジュール生成
        if(!NX.isArray(me.use)) {
            me.use = [];
        }

        var mods = {};
        NX.each(me.use, function(name) {

            if(NX.isString(name)) {

                var file = path.normalize(me.modules + '/' + name + '.js');

                // コントローラーキャッシュクリア
                NX.moduleCacheClear(file);

                // モジュールファイル読み込み
                var moduleCls = require(file);
                mods[name] = new moduleCls({
                    controller: me,
                    connName: 'default',
                    modName: name
                });

            } else if(NX.isObject(name)) {

                var o = name;
                var neme = o.name;
                var connName = o.connection || 'default';

                var file = path.normalize(me.modules + '/' + name + '.js');

                // コントローラーキャッシュクリア
                NX.moduleCacheClear(file);

                // モジュールファイル読み込み
                var moduleCls = require(file);
                mods[name] = new moduleCls({
                    controller: me,
                    connName: connName,
                    modName: name
                });

            }

        });

        // モジュールバインド
        NX.applyIf(me, mods);
    },

    // }}}
    // {{{ error

    /**
     * @method error
     */
    error : function(e) {

        // 例外出力
        console.log(e);

    },

    // }}}
    // {{{ execute

    /**
     * @method execute
     */
    execute : NX.emptyFn

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
