/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../../core');
var T_Base = require('../../Base');

// }}}
// {{{ NX.Class.preprocessors.extend

var $METHOD = module.exports = function(cls, data, fn) {

    var parent = (typeof data.extend === 'function' && data.extend !== Object) ? data.extend : T_Base,
        temp = function(){};

    temp.prototype = parent.prototype;
    cls.prototype = new temp();
    cls.prototype.self = cls;

    if(data.hasOwnProperty('constructor')) {
        cls.prototype.constructor = cls;
    } else {
        cls.prototype.constructor = parent.prototype.constructor;
    }

    cls.superclass = cls.prototype.superclass = parent.prototype;

    T_NX.merge(cls.prototype.config, parent.prototype.config || {});

    delete data.extend;

    if(fn) {
        fn.call(this, cls, data);
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
