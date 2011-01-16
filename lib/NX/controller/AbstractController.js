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
        var cmod;
        var moduleCls;
        NX.each(me.use, function(name) {

            if(NX.isString(name)) {

                var file = path.normalize(me.modules + '/' + name + '.js');

                // コントローラーキャッシュクリア
                NX.moduleCacheClear(file);

                // モジュールファイル読み込み
                moduleCls = require(file);
                cmod = mods[name] = new moduleCls({
                    controller: me,
                    connName: 'default',
                    modName: name
                });
                cmod.__cls = moduleCls;

            } else if(NX.isObject(name)) {

                var o = name;
                var neme = o.name;
                var connName = o.connection || 'default';

                var file = path.normalize(me.modules + '/' + name + '.js');

                // コントローラーキャッシュクリア
                NX.moduleCacheClear(file);

                // モジュールファイル読み込み
                moduleCls = require(file);
                cmod = mods[name] = new moduleCls({
                    controller: me,
                    connName: connName,
                    modName: name
                });
                cmod.__cls = moduleCls;

            }

            var ignoreMember = {};
            NX.iterate(NX.Module.prototype, function(name) {
                ignoreMember[name] = true;
            })

            // モジュールのメソッドをラッピング
            var wrapMember = {};
            NX.iterate(moduleCls.prototype, function(name, member) {
                if(ignoreMember[name] !== true && NX.isFunction(member)) {
                    wrapMember[name] = true;
                }
            });

            NX.iterate(moduleCls.prototype, function(name, member) {
                if(wrapMember[name] === true) {

                    var org = cmod[name];
                    cmod[name] = function() {



                        org.apply(this, arguments);
                        return cmod;
                    };
                }
            })

//            NX.each(wrapMember, )



        });


        NX.iterate(mods, function(name, mod) {
            /*
            console.log(
            mod.getList
            );
            */
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
    execute : NX.emptyFn,

    // }}}
    // {{{ set

    /**
     * @method set
     */
    set : function(key, v) {

        var me = this;

        me.results[key] = v;
    },

    // }}}
    // {{{ end

    end : function(render) {

        var me = this;

        me.fireEvent('end', render);
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
