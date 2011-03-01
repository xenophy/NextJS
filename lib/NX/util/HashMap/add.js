/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var containsKey = require('./containsKey');
var getKey = require('./getKey');
var getData = require('./getData');

// }}}
// {{{ NX.util.HashMap.add

var $METHOD = module.exports = function(key, value) {

    var me = this, data;

    if(containsKey(key)) {
        throw new Error('This key already exists in the HashMap');
    }

    if(arguments.length == 1) {
        value = key;
        key = getKey(value);
    }

    data = getData(key, value);
    key = data[0];
    value = data[1];
    me.map[key] = value;
    ++me.length;

    return value;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */