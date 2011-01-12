/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ NX.module.AbstractModule

/**
 * @class NX.module.AbstractModule
 */
NX.module.AbstractModule = NX.extend(NX.util.Observable, {

    // {{{ useTable

    useTable : false,

    // }}}
    // {{{ autoConnect

    autoConnect : true,

    // }}}
    // {{{ controller

    controller : null,

    // }}}
    // {{{ constructor

    /**
     * @method AbstractModule
     */
    constructor : function(config) {

        var me = this;

        config  = config || {};

        // 設定適用
        NX.apply(me, config);

        // スーパークラスメソッドコール
        NX.module.AbstractModule.superclass.constructor.apply(me, arguments);

        var rundir = me.controller.path;
        var configs = path.normalize(rundir + '/configs');
        var filename = configs + '/DatabaseConfig.js';

        // データベース設定読み込み
        if(NX.fs.existsSync(filename)) {
            require(filename);
        } else {
            NX.apply(NX.config.database, {
                connections : {}
            });
        }

        if(me.useTable === false) {
            me.useTable = me.modName;
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
