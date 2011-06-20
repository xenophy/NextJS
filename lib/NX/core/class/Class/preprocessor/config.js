/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class.preprocessor.config

module.exports = function(cls, data) {

    var prototype = cls.prototype;

    NX.Object.each(data.config, function(name) {
        var cName = name.charAt(0).toUpperCase() + name.substr(1),
        pName = name,
        apply = 'apply' + cName,
        setter = 'set' + cName,
        getter = 'get' + cName;

        if (!(apply in prototype) && !data.hasOwnProperty(apply)) {
            data[apply] = function(val) {
                return val;
            };
        }

        if (!(setter in prototype) && !data.hasOwnProperty(setter)) {
            data[setter] = function(val) {
                var ret = this[apply].call(this, val, this[pName]);

                if (ret !== undefined) {
                    this[pName] = ret;
                }

                return this;
            };
        }

        if (!(getter in prototype) && !data.hasOwnProperty(getter)) {
            data[getter] = function() {
                return this[pName];
            };
        }
    });

    NX.Object.merge(prototype.config, data.config);
    delete data.config;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
