/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

// }}}
// {{{ NX.AbstractManager

/**
 * @class NX.AbstractManager
 */
NX.define('NX.AbstractManager', {

//    requires: ['Ext.util.HashMap'],

    // {{{ typeName

    typeName: 'type',

    // }}}
    // {{{ constructor

    constructor: function(config) {

        var me = this;

        NX.apply(me, config || {});

        me.all = new NX.util.HashMap();
        me.types = {};
    },

    // }}}
    // {{{ get

    /**
     * @method get
     */
    get : function(id) {
        return this.all.get(id);
    },

    // }}}
    // {{{ register

    register: function(item) {
        this.all.add(item);
    },

    // }}}
    // {{{ unregister

    unregister: function(item) {
        this.all.remove(item);
    },

    // }}}
    // {{{ registerType

    /**
     * @method registerType
     */
    registerType : function(type, cls) {
        this.types[type] = cls;
        cls[this.typeName] = type;
    },

    // }}}
    // {{{ isRegistered

    /**
     * @method isRegistered
     */
    isRegistered : function(type){
        return this.types[type] !== undefined;
    },

    // }}}
    // {{{ create

    /**
     * @method create
     */
    create: function(config, defaultType) {
        var type        = config[this.typeName] || config.type || defaultType,
            Constructor = this.types[type];

        if (Constructor == undefined) {
            throw new Error(Ext.String.format("The '{0}' type has not been registered with this manager", type));
        }

        return new Constructor(config);
    },

    // }}}
    // {{{ onAvailable

    /**
     * @method onAvailable
     */
    onAvailable : function(id, fn, scope){
        var all = this.all;

        all.on("add", function(index, o){
            if (o.id == id) {
                fn.call(scope || o, o);
                all.un("add", fn, scope);
            }
        });
    },

    // }}}
    // {{{ each

    /**
     * @method each
     */
    each: function(fn, scope){
        this.all.each(fn, scope || this);
    },

    // }}}
    // {{{ getCount

    getCount: function(){
        return this.all.getCount();
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


