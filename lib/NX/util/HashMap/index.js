/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

// }}}
// {{{ NX.util.HashMap

/**
 * @class NX.util.HashMap
 */
NX.define('NX.util.HashMap', {

    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: require('./constructor'),

    // }}}
    // {{{ getCount

    /**
     * @method getCount
     */
    getCount: require('./getCount'),

    // }}}
    // {{{ getData

    /**
     * @method getData
     */
    getData: function(key, value) {

        if(value === undefined) {
            value = key;
            key = this.getKey(value);
        }

        return [key, value];
    },

    // }}}
    // {{{ getKey

    /**
     * @method getKey
     */
    getKey: function(o) {
        return o.id;
    },

    // }}}
    // {{{ add

    /**
     * @method
     */
    add: function(key, value) {

        var me = this,
            data;

        if (me.containsKey(key)) {
            throw new Error('This key already exists in the HashMap');
        }

        if (arguments.length == 1) {
            value = key;
            key = me.getKey(value);
        }

        data = me.getData(key, value);
        key = data[0];
        value = data[1];
        me.map[key] = value;
        ++me.length;
        me.fireEvent('add', me, key, value);
        return value;
    },

    // }}}
    // {{{ replace

    /**
     * @method replace
     */
    replace: function(key, value) {
        var me = this,
            map = me.map,
            old;

        if (!me.containsKey(key)) {
            me.add(key, value);
        }
        old = map[key];
        map[key] = value;
        me.fireEvent('replace', me, key, value, old);
        return value;
    },

    // }}}
    // {{{ remove

    /**
     * @method remove
     */
    remove: function(o) {

        var key = this.findKey(o);
        if (key !== undefined) {
            return this.removeByKey(key);
        }
        return false;
    },

    // }}}
    // {{{ removeByKey

    /**
     * @method removeByKey
     */
    removeByKey: function(key) {
        var me = this,
            value;

        if (me.containsKey(key)) {
            value = me.map[key];
            delete me.map[key];
            --me.length;
            me.fireEvent('remove', me, key, value);
            return true;
        }
        return false;
    },

    // }}}
    // {{{ get

    /**
     * @method get
     */
    get: function(key) {
        return this.map[key];
    },

    // }}}
    // {{{ clear

    /**
     * @method clear
     */
    clear: function() {

        var me = this;

        me.map = {};
        me.length = 0;

        return me;
    },

    // }}}
    // {{{ containsKey

    /**
     * @method containsKey
     */
    containsKey: function(key) {
        return this.map[key] !== undefined;
    },

    // }}}
    // {{{ contains

    /**
     * @method contains
     */
    contains: function(value) {
        return this.containsKey(this.findKey(value));
    },

    // }}}
    // {{{ getKeys

    /**
     * @method getKeys
     */
    getKeys: function() {
        return this.getArray(true);
    },

    // }}}
    // {{{ getValues

    /**
     * @method getValues
     */
    getValues: function() {
        return this.getArray(false);
    },

    // }}}
    // {{{ getArray

    /**
     * @method getArray
     * @private
     */
    getArray: function(isKey) {

        var arr = [],
            key,
            map = this.map;
        for (key in map) {
            if (map.hasOwnProperty(key)) {
                arr.push(isKey ? key: map[key]);
            }
        }
        return arr;
    },

    // }}}
    // {{{ each

    /**
     * @method each
     */
    each: function(fn, scope) {

        var items = Ext.apply({}, this.map),
            key,
            length = this.length;

        scope = scope || this;
        for (key in items) {
            if (items.hasOwnProperty(key)) {
                if (fn.call(scope, key, items[key], length) === false) {
                    break;
                }
            }
        }
        return this;
    },

    // }}}
    // {{{ clone

    /**
     * @method clone
     */
    clone: function() {
        var hash = new this.self(),
            map = this.map,
            key;

        hash.suspendEvents();
        for (key in map) {
            if (map.hasOwnProperty(key)) {
                hash.add(key, map[key]);
            }
        }
        hash.resumeEvents();
        return hash;
    },

    // }}}
    // {{{ findKey

    /**
     * @method findKey
     * @private
     */
    findKey: function(value) {

        var key,
            map = this.map;

        for (key in map) {
            if (map.hasOwnProperty(key) && map[key] === value) {
                return key;
            }
        }
        return undefined;
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
