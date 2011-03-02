/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.HashMap

/**
 * @prop map
 * @private
 */
var map = {};

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
    getData: require('./getData'),

    // }}}
    // {{{ getKey

    /**
     * @method getKey
     */
    getKey: require('./getKey'),

    // }}}
    // {{{ add

    /**
     * @method
     */
    add: require('./add'),

    // }}}
    // {{{ replace

    /**
     * @method replace
     */
    replace: require('./replace'),

    // }}}
    // {{{ remove

    /**
     * @method remove
     */
    remove: require('./remove'),

    // }}}
    // {{{ removeByKey

    /**
     * @method removeByKey
     */
    removeByKey: require('./removeByKey'),

    // }}}
    // {{{ get

    /**
     * @method get
     */
    get: require('./get'),

    // }}}
    // {{{ clear

    /**
     * @method clear
     */
    clear: require('./clear'),

    // }}}
    // {{{ containsKey

    /**
     * @method containsKey
     */
    containsKey: function(key) {
        require('./containsKey').call(this, map, key);
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
    getValues: require('./getValues'),

    // }}}
    // {{{ getArray

    /**
     * @method getArray
     * @private
     */
    getArray: require('./getArray'),

    // }}}
    // {{{ each

    /**
     * @method each
     */
    each: require('./each'),

    // }}}
    // {{{ clone

    /**
     * @method clone
     */
    clone: require('./clone'),

    // }}}
    // {{{ findKey

    /**
     * @method findKey
     * @private
     */
    findKey: require('./findKey'),

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
