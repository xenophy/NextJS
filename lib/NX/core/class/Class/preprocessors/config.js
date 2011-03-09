/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../../core');
var T_Object = require('../../../lang/Object');
var T_String = require('../../../lang/String');

// }}}
// {{{ NX.Class.preprocessors.config

var $METHOD = module.exports = function(cls, data, fn) {

    var config = data.config;

    if(config) {

        T_Object.each(config, function(name) {

            var cName = T_String.capitalize(name),
                pName = '_' + name,
                apply = 'apply' + cName,
                setter = 'set' + cName,
                getter = 'get' + cName,
                reset = 'reset' + cName,
                prototype = cls.prototype;

            if(!(apply in prototype)) {
                prototype[apply] = function(val) {
                    return val;
                };
            }

            if(!(setter in prototype)) {
                prototype[setter] = function(val) {
                    var ret = this[apply].call(this, val, this[pName]);

                    if(ret !== undefined) {
                        this[pName] = ret;
                    }

                    return this;
                };
            }

            if(!(getter in prototype)) {
                prototype[getter] = function() {
                    return this[pName];
                };
            }

            if(!(reset in prototype)) {
                prototype[reset] = function() {
                    return this[setter].call(this, this.config[name]);
                };
            }

            if(name.search(/^is|has/) !== -1) {

                if(!(name in prototype)) {

                    prototype[name] = function() {
                        return !!this[getter].apply(this, arguments);
                    };

                }

            }

        });
    }

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
