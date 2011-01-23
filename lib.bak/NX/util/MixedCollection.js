/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.MixedCollection

/**
 * @class NX.util.MixedCollection
 * @extend NX.util.Observable
 */
NX.util.MixedCollection = NX.extend(NX.util.Observable, {

    // {{{ items

    items : [],

    // }}}
    // {{{ map

    map : {},

    // }}}
    // {{{ keys

    keys : [],

    // }}}
    // {{{ length

    length : 0,

    // }}}
    // {{{ allowFunctions

    allowFunctions : false,

    // }}}
    // {{{ constructor

    /**
     * @method MixedCollection
     */
    constructor : function(allowFunctions, keyFn) {

        var me = this;

        me.items = [];
        me.map = {};
        me.keys = [];
        me.length = 0;

        me.addEvents(

            /**
             * @event clear
             */
            'clear',

            /**
             * @event add
             */
            'add',

            /**
             * @event replace
             */
            'replace',

            /**
             * @event remove
             */
            'remove',

            /**
             * @event sort
             */
            'sort'
        );

        me.allowFunctions = allowFunctions === true;

        if(NX.isFunction(keyFn)) {
            me.getKey = keyFn;
        }

        // スーパークラスメソッドコール
        NX.util.MixedCollection.superclass.constructor.call(me);
    },

    // }}}
    // {{{ add

    /**
     * @method add
     */
    add : function(key, obj) {

        var me = this,
            myObj = obj,
            myKey = key;

        if(arguments.length == 1) {
            myObj = myKey;
            myKey = me.getKey(myObj);
        }

        if(NX.isDefined(myKey) && !NX.isNull(myKey)) {

            if(NX.isDefined(me.map[myKey])) {
                return me.replace(myKey, myObj);
            }

            me.map[myKey] = myObj;
        }

        me.length++;
        me.items.push(myObj);
        me.keys.push(myKey);

        // イベント発火
        me.fireEvent('add', me.length - 1, myObj, myKey);

        return myObj;

    },

    // }}}
    // {{{ getKey

    /**
     * @method getKey
     */
    getKey : function(o) {

        o = o || {};
        return o.id;
    },

    // }}}
    // {{{ replace

    /**
     * @method replace
     */
    replace : function(key, o) {

        var me = this;

        if(arguments.length == 1) {
            o = arguments[0];
            key = me.getKey(o);
        }

        var old = me.map[key];

        if(!NX.isDefined(key) || NX.isNull(key) || !NX.isDefined(old)) {
             return me.add(key, o);
        }

        var index = me.indexOfKey(key);

        me.items[index] = o;
        me.map[key] = o;

        // イベント発火
        me.fireEvent('replace', key, old, o);

        return o;
    },

    // }}}
    // {{{ allAll

    /**
     * @method addAll
     */
    addAll : function(objs) {

        var me = this;

        if(arguments.length > 1 || NX.isArray(objs)) {

            var args = arguments.length > 1 ? arguments : objs;

            for(var i = 0, len = args.length; i < len; i++) {
                me.add(args[i]);
            }

        } else {

            for(var key in objs) {

                if(me.allowFunctions || !NX.isFunction(objs[key])) {
                    me.add(key, objs[key]);
                }

            }
        }
    },

    // }}}
    // {{{ each

    /**
     * @method each
     */
    each : function(fn, scope) {

        var me = this,
            items = [].concat(me.items);

        for(var i = 0, len = items.length; i < len; i++) {
            if(fn.call(scope || items[i], items[i], i, len) === false) {
                break;
            }
        }
    },

    // }}}
    // {{{ eachKey

    /**
     * @method eachKey
     */
    eachKey : function(fn, scope) {

        var me = this;

        for(var i = 0, len = me.keys.length; i < len; i++) {
            fn.call(scope || global, me.keys[i], me.items[i], i, len);
        }

    },

    // }}}
    // {{{ find

    /**
     * @method find
     */
    find : function(fn, scope) {

        var me = this;

        for(var i = 0, len = me.items.length; i < len; i++){

            if(fn.call(scope || global, me.items[i], me.keys[i])){
                return me.items[i];
            }

        }

        return null;
    },

    // }}}
    // {{{ insert

    /**
     * @method insert
     */
    insert : function(index, key, obj) {

        var me = this,
            myKey = key,
            myObj = obj;

        if(arguments.length == 2) {
            myObj = myKey;
            myKey = me.getKey(myObj);
        }

        if(me.containsKey(myKey)) {
            me.suspendEvents();
            me.removeKey(myKey);
            me.resumeEvents();
        }

        if(index >= me.length){
            return me.add(myKey, myObj);
        }

        me.length++;
        me.items.splice(index, 0, myObj);

        if(typeof myKey != 'undefined' && myKey !== null){
            me.map[myKey] = myObj;
        }

        me.keys.splice(index, 0, myKey);
        me.fireEvent('add', index, myObj, myKey);

        return myObj;
    },

    // }}}
    // {{{ remove

    /**
     * @method remove
     */
    remove : function(o) {

        var me = this;

        return me.removeAt(me.indexOf(o));
    },

    // }}}
    // {{{ removeKey

    /**
     * @method removeKey
     */
    removeKey : function(key) {

        var me = this;

        return me.removeAt(me.indexOfKey(key));
    },

    // }}}
    // {{{ removeAt

    /**
     * @method removeAt
     */
    removeAt : function(index) {

        var me = this;

        if(index < me.length && index >= 0) {

            me.length--;

            var o = me.items[index];

            me.items.splice(index, 1);

            var key = me.keys[index];

            if(typeof key != 'undefined') {
                delete me.map[key];
            }

            me.keys.splice(index, 1);
            me.fireEvent('remove', o, key);

            return o;
        }

        return false;
    },

    // }}}
    // {{{ getCount

    /**
     * @method getCount
     */
    getCount : function() {

        var me = this;

        return me.length;
    },

    // }}}
    // {{{ indexOf

    /**
     * @method indexOf
     */
    indexOf : function(o) {

        var me = this;

        return me.items.indexOf(o);
    },

    // }}}
    // {{{ indexOfKey

    /**
     * @method indexOfKey
     */
    indexOfKey : function(key) {

        var me = this;

        return me.keys.indexOf(key);
    },

    // }}}
    // {{{ item

    /**
     * @method item
     */
    item : function(key) {

        var me = this,
            mk = me.map[key],
            item = mk !== undefined ? mk : (typeof key == 'number') ? me.items[key] : undefined;

        return typeof item != 'function' || me.allowFunctions ? item : null;

    },

    // }}}
    // {{{ itemAt

    /**
     * @method itemAt
     */
    itemAt : function(index) {

        var me = this;

        return me.items[index];

    },

    // }}}
    // {{{ key

    /**
     * @method key
     */
    key : function(key) {

        var me = this;

        return me.map[key];

    },

    // }}}
    // {{{ contains

    /**
     * @method contains
     */
    contains : function(o){

        var me = this;

        return me.indexOf(o) != -1;

    },

    // }}}
    // {{{ containsKey

    /**
     * @method containsKey
     */
    containsKey : function(key) {

        var me = this;

        return NX.isDefined(me.map[key]);

    },

    // }}}
    // {{{ clear

    /**
     * @method clear
     */
    clear : function(){

        var me = this;

        me.length = 0;
        me.items = [];
        me.keys = [];
        me.map = {};
        me.fireEvent('clear');

    },

    // }}}
    // {{{ first

    /**
     * @method first
     */
    first : function() {
        return this.items[0];
    },

    // }}}
    // {{{ last

    /**
     * @method last
     */
    last : function(){

        var me = this;

        return me.items[me.length-1];
    },

    // }}}
    // {{{ _sort

    _sort : function(property, dir, fn) {

        var me = this,
            i,
            len,
            dsc   = String(dir).toUpperCase() == 'DESC' ? -1 : 1,
            c     = [],
            keys  = me.keys,
            items = me.items;

        fn = fn || function(a, b) {
            return a - b;
        };

        for(i = 0, len = items.length; i < len; i++) {

            c[c.length] = {
                key  : keys[i],
                value: items[i],
                index: i
            };

        }

        c.sort(function(a, b) {

            var v = fn(a[property], b[property]) * dsc;

            if(v === 0) {
                v = (a.index < b.index ? -1 : 1);
            }

            return v;
        });

        for(i = 0, len = c.length; i < len; i++) {

            items[i] = c[i].value;
            keys[i]  = c[i].key;

        }

        me.fireEvent('sort', me);
    },

    // }}}
    // {{{ sort

    /**
     * @method sort
     */
    sort : function(dir, fn) {

        var me = this;

        me._sort('value', dir, fn);

    },

    // }}}
    // {{{ reorder

    /**
     * @method reorder
     */
    reorder: function(mapping) {

        var me = this;

        me.suspendEvents();

        var items = me.items,
            index = 0,
            length = items.length,
            order = [],
            remaining = [],
            oldIndex;

        for(oldIndex in mapping) {
            order[mapping[oldIndex]] = items[oldIndex];
        }

        for(index = 0; index < length; index++) {
            if(mapping[index] == undefined) {
                remaining.push(items[index]);
            }
        }

        for(index = 0; index < length; index++) {
            if(order[index] == undefined) {
                order[index] = remaining.shift();
            }
        }

        me.clear();
        me.addAll(order);

        me.resumeEvents();
        me.fireEvent('sort', me);

    },

    // }}}
    // {{{ keySort

    /**
     * @method keySort
     */
    keySort : function(dir, fn) {

        var me = this;

        me._sort('key', dir, fn || function(a, b){

            var v1 = String(a).toUpperCase(),
                v2 = String(b).toUpperCase();

            return v1 > v2 ? 1 : (v1 < v2 ? -1 : 0);
        });
    },

    // }}}
    // {{{ getRange

    /**
     * @method getRange
     */
    getRange : function(start, end) {

        var me = this,
            items = me.items;

        if(items.length < 1) {
            return [];
        }

        start = start || 0;
        end = Math.min(typeof end == 'undefined' ? this.length-1 : end, this.length-1);

        var i, r = [];

        if(start <= end) {

            for(i = start; i <= end; i++) {
                r[r.length] = items[i];
            }

        } else {

            for(i = start; i >= end; i--) {
                r[r.length] = items[i];
            }

        }

        return r;
    },

    // }}}
    // {{{ filter

    /**
     * @method filter
     */
    filter : function(property, value, anyMatch, caseSensitive, exactMatch) {

        var me = this;

        if(NX.isEmpty(value, false)) {
            return me.clone();
        }

        value = me.createValueMatcher(value, anyMatch, caseSensitive, exactMatch);

        return me.filterBy(function(o) {
            return o && value.test(o[property]);
        });

    },

    // }}}
    // {{{ filterBy

    /**
     * @method filterBy
     */
    filterBy : function(fn, scope) {

        var me = this,
            r = new NX.util.MixedCollection();

        r.getKey = me.getKey;

        var k = me.keys,
            it = me.items;

        for(var i = 0, len = it.length; i < len; i++) {
            if(fn.call(scope||me, it[i], k[i])) {
                r.add(k[i], it[i]);
            }
        }

        return r;
    },

    // }}}
    // {{{ findIndex

    /**
     * @method findIndex
     */
    findIndex : function(property, value, start, anyMatch, caseSensitive, exactMatch) {

        var me = this;

        if(NX.isEmpty(value, false)) {
            return -1;
        }

        value = me.createValueMatcher(value, anyMatch, caseSensitive, exactMatch);

        return me.findIndexBy(function(o){
            return o && value.test(o[property]);
        }, null, start);

    },

    // }}}
    // {{{ findIndexBy

    /**
     * @method findIndexBy
     */
    findIndexBy : function(fn, scope, start) {

        var me = this,
            k = me.keys,
            it = me.items;

        for(var i = (start||0), len = it.length; i < len; i++) {

            if(fn.call(scope||me, it[i], k[i])) {
                return i;
            }

        }
        return -1;
    },

    // }}}
    // {{{ crateValueMatcher

    createValueMatcher : function(value, anyMatch, caseSensitive, exactMatch) {

        if(!value.exec) {

            var er = NX.escapeRe;
            value = String(value);

            if(anyMatch === true) {

                value = er(value);

            } else {

                value = '^' + er(value);

                if(exactMatch === true) {
                    value += '$';
                }
            }

            value = new RegExp(value, caseSensitive ? '' : 'i');
         }

         return value;
    },

    // }}}
    // {{{ clone

    /**
     * @method clone
     */
    clone : function() {

        var me = this,
            r = new NX.util.MixedCollection(),
            k = me.keys,
            it = me.items;

        for(var i = 0, len = it.length; i < len; i++) {
            r.add(k[i], it[i]);
        }

        r.getKey = me.getKey;

        return r;
    }

    // }}}

});

// }}}
// {{{ get

/**
 * @method get
 */
NX.util.MixedCollection.prototype.get = NX.util.MixedCollection.prototype.item;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
