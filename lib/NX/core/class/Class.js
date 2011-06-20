/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class

NX.Class = Class = require('./Class/constructor');
NX.$implements(__dirname + '/Class/', NX.Class);


/*
NX.Class = Class = NX.apply(require('./Class/constructor'), {

    // {{{ preprocessors

    preprocessors: {},

    // }}}
    // {{{ registerPreprocessor

    registerPreprocessor: function(name, fn, always) {

        this.preprocessors[name] = {
            name: name,
            always: always ||  false,
            fn: fn
        };

        return this;
    },

    // }}}
    // {{{ getPreprocessor

    getPreprocessor: function(name) {
        return this.preprocessors[name];
    },

    // }}}

    getPreprocessors: function() {
        return this.preprocessors;
    },

    getDefaultPreprocessors: function() {
        return this.defaultPreprocessors || [];
    },

    setDefaultPreprocessors: function(preprocessors) {
        this.defaultPreprocessors = NX.Array.from(preprocessors);

        return this;
    },

    setDefaultPreprocessorPosition: function(name, offset, relativeName) {
        var defaultPreprocessors = this.defaultPreprocessors,
        index;

        if (typeof offset === 'string') {
            if (offset === 'first') {
                defaultPreprocessors.unshift(name);

                return this;
            }
            else if (offset === 'last') {
                defaultPreprocessors.push(name);

                return this;
            }

            offset = (offset === 'after') ? 1 : -1;
        }

        index = NX.Array.indexOf(defaultPreprocessors, relativeName);

        if (index !== -1) {
            NX.Array.splice(defaultPreprocessors, Math.max(0, index + offset), 0, name);
        }

        return this;
    }
});

Class.registerPreprocessor('extend', function(cls, data) {

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

}, true);

Class.registerPreprocessor('statics', function(cls, data) {

    var statics = data.statics, name;

    for (name in statics) {

        if (statics.hasOwnProperty(name)) {
            cls[name] = statics[name];
        }
    }

    delete data.statics;
});

Class.registerPreprocessor('inheritableStatics', function(cls, data) {

    var statics = data.inheritableStatics,
        inheritableStatics,
        prototype = cls.prototype,
        name;

    inheritableStatics = prototype.$inheritableStatics;

    if (!inheritableStatics) {
        inheritableStatics = prototype.$inheritableStatics = [];
    }

    for (name in statics) {
        if (statics.hasOwnProperty(name)) {
            cls[name] = statics[name];
            inheritableStatics.push(name);
        }
    }

    delete data.inheritableStatics;
});

Class.registerPreprocessor('mixins', function(cls, data) {

    cls.mixin(data.mixins);

    delete data.mixins;
});

Class.registerPreprocessor('config', function(cls, data) {

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
});

Class.setDefaultPreprocessors(['extend', 'statics', 'inheritableStatics', 'mixins', 'config']);

*file/Preporocessors

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
