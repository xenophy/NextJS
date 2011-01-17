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

    // {{{ results

    results : {},

    // }}}
    // {{{ bindModule

    bindModule : function(mod) {

        var me = this;
        var modName = mod;
        var connName = 'default';

        if(NX.isObject(modName)) {
            var o = name;
            modName = o.name;
            connName = o.connection || 'default';
        }

        var file = path.normalize(me.modules + '/' + modName + '.js');

        // コントローラーキャッシュクリア
        NX.moduleCacheClear(file);

        // モジュールファイル読み込み
        moduleCls = require(file);
        cmod = new moduleCls({
            controller: me,
            connName: connName,
            modName: modName
        });
        cmod.__cls = moduleCls;

        me.fireEvent('bindmodule', modName, cmod);
    },

    // }}}
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
