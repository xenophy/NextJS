/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.AbstractManager

/**
 * @class NX.AbstractManager
 */
NX.AbstractManager = NX.extend(Object, {

    // {{{ typeName

    /**
     * @prop typeName
     */
    typeName: 'type',

    // }}}
    // {{{ constructor

    /**
     * @method AbstractManager
     */
    constructor: function(config) {

        var me = this;

        NX.apply(me, config || {});

        me.all = new NX.util.MixedCollection();

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

    /**
     * @method register
     */
    register: function(item) {
        this.all.add(item);
    },

    // }}}
    // {{{ unregister

    /**
     * @method unregister
     */
    unregister: function(item) {
        this.all.remove(item);
    },

    // }}}
    // {{{ registerType

    /**
     * @method registerType
     */
    registerType : function(type, cls) {

        var me = this;

        me.types[type] = cls;

        cls[me.typeName] = type;
    },

    // }}}
    // {{{ isRegistered

    /**
     * @method isRegistered
     */
    isRegistered : function(type){

        var me = this;

        return me.types[type] !== undefined;

    },

    // }}}
    // {{{ create

    /**
     * @method create
     */
    create: function(config, defaultType) {

        var me = this,
            type = config[me.typeName] || config.type || defaultType,
            Constructor = me.types[type];

        if(Constructor == undefined) {
            throw new Error(NX.sprintf("The '%s' type has not been registered with this manager", type));
        }

        return new Constructor(config);
    },

    // }}}
    // {{{ onAvailable

    /**
     * @method onAvailable
     */
    onAvailable : function(id, fn, scope){

        var me = this,
            all = me.all;

        all.on("add", function(index, o){
            if(o.id == id) {
                fn.call(scope || o, o);
                all.un("add", fn, scope);
            }
        });
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
