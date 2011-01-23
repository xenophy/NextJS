/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');
var fs = require('fs');

// }}}
// {{{ namespace

NX.ns('NX.module');

// }}}
// {{{ NX.module.AbstractModule

/**
 * @class NX.module.AbstractModule
 */
NX.module.AbstractModule = NX.extend(require('events').EventEmitter, {

    // {{{ autoConnect

    autoConnect : true,

    // }}}
    // {{{ controller

    controller : null,

    // }}}
    // {{{ destructor

    destructor : function() {
        console.log("destructor called");
    },

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

        // コネクションオブジェクト生成
        me.connection = new NX.module.Connection(me.controller.config.database.connections[me.connName]);


        // アダプターメソッドをモジュールに適用
        var adapter = me.connection.adapter;
        if(adapter) {

            NX.each(['connect', 'disconnect', 'query'], function(name) {
                me[name] = function() {
                    adapter[name].apply(adapter, arguments);
                }
            });

            if(me.autoConnect === true && me.useTable !== false) {
                me.connect();
            }

        }




        // スーパークラスメソッドコール
        NX.module.AbstractModule.superclass.constructor.apply(me, arguments);

        /*
        var rundir = me.controller.path;
        var configs = path.normalize(rundir + '/configs');
        var filename = configs + '/DatabaseConfig.js';

        try{
            NX.apply(me.configs, require(filename));
        } catch(e) {};

        me.configs ={};

        NX.apply(me.configs, {
            connections : {
                default: {
                    name: 'default',
                    adapter: 'mysql',
                    charset: 'UTF8',
                    host: 'localhost',
                    user: 'root',
                    password: 'root',
                    database: 'nextjs',
                    prefix: '',
                    port: '',
                    socket: ''
                }
            }
        });

        NX.applyIf(me.configs, {
            connections : {}
        });

        /*
        // TODO: サーバー生成時に読み込むように修正
        // データベース設定読み込み
        if(NX.fs.existsSync(filename)) {
            require(filename);
        } else {
            NX.apply(NX.config.database, {
                connections : {}
            });
        }
        */

        if(me.useTable !== false) {
            me.useTable = me.name;
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
