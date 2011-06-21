/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class.preprocessor.extend

module.exports = function(cls, data) {
    var extend = data.extend,
        base = NX.Base,
        basePrototype = base.prototype,
        prototype = function() {},
        parent, i, k, ln, staticName, parentStatics,
        parentPrototype, clsPrototype;

    if (extend && extend !== Object) {
        parent = extend;
    } else {
        parent = base;
    }

    parentPrototype = parent.prototype;

    prototype.prototype = parentPrototype;
    clsPrototype = cls.prototype = new prototype();

    if (!('$class' in parent)) {
        for (i in basePrototype) {
            if (!parentPrototype[i]) {
                parentPrototype[i] = basePrototype[i];
            }
        }
    }

    clsPrototype.self = cls;

    cls.superclass = clsPrototype.superclass = parentPrototype;

    delete data.extend;

    parentStatics = parentPrototype.$inheritableStatics;

    if (parentStatics) {
        for (k = 0, ln = parentStatics.length; k < ln; k++) {
            staticName = parentStatics[k];

            if (!cls.hasOwnProperty(staticName)) {
                cls[staticName] = parent[staticName];
            }
        }
    }

    if (parentPrototype.config) {
        clsPrototype.config = NX.Object.merge({}, parentPrototype.config);
    }
    else {
        clsPrototype.config = {};
    }

    if (clsPrototype.$onExtended) {
        clsPrototype.$onExtended.call(cls, cls, data);
    }

    if (data.onClassExtended) {
        clsPrototype.$onExtended = data.onClassExtended;
        delete data.onClassExtended;
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
