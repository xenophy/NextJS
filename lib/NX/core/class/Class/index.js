/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');
var T_Array = require('../../lang/Array');
var T_String = require('../../lang/String');
var T_Base = require('../Base');
var T_Object = require('../../lang/Object');
var flexSetter = require('../../lang/Function').flexSetter;

// }}}
// {{{ NX.Class

/**
 * @class NX.Class
 */

/**
 * @prop preprocessors
 * @private
 */
var preprocessors = {};

/**
 * @prop defaultPreprocessors
 * @private
 */
var defaultPreprocessors = [];


var T_Class = module.exports = function(classData, createdFn) {

    var self = this.constructor,
        newClass = function() {
            return this.constructor.apply(this, arguments);
        },
        preprocessors = T_Array.from(classData.preprocessors || self.getDefaultPreprocessors()),
        staticProp, process;

    for(staticProp in T_Base) {
        if (T_Base.hasOwnProperty(staticProp)) {
            newClass[staticProp] = T_Base[staticProp];
        }
    }

    delete classData.preprocessors;

    process = function(cls, data) {
        var name = preprocessors.shift();

        if(!name) {
            cls.implement(data);

            if(T_NX.isFunction(createdFn)) {
                createdFn.call(cls);
            }

            return;
        }

        this.getPreprocessor(name).call(this, cls, data, process);
    };

    process.call(self, newClass, classData);

    return newClass;
};

T_NX.apply(T_Class, {

    // {{{ registerPreprocessor

    /**
     * @method registerPreprocessor
     */
    registerPreprocessor: flexSetter(function(name, fn) {
        preprocessors[name] = fn;
        return this;
    }),

    // }}}
    // {{{ getPreprocessor

    /**
     * @method getPreprocessor
     */
    getPreprocessor: function(name) {
        return preprocessors[name];
    },

    // }}}
    // {{{ getDefaultPreprocessors

    /**
     * @method getDefaultPreprocessors
     */
    getDefaultPreprocessors: function() {
        return defaultPreprocessors || [];
    },

    // }}}
    // {{{ setDefaultPreprocessors

    /**
     * @method setDefaultPreprocessors
     */
    setDefaultPreprocessors: function(preprocessors) {
        defaultPreprocessors = T_Array.from(preprocessors);
        return this;
    },

    // }}}
    // {{{ insertDefaultPreprocessor

    /**
     * @method insertDefaultPreprocessor
     */
    insertDefaultPreprocessor: function(name, offset, relativeName) {

        var index;

        if(T_NX.isString(offset)) {

            if(offset === 'first') {
                defaultPreprocessors.unshift(name);
                return this;
            } else if(offset === 'last') {
                defaultPreprocessors.push(name);
                return this;
            }

            offset = (offset === 'after') ? 1 : -1;
        }

        index = T_Array.indexOf(defaultPreprocessors, relativeName);

        if(index !== -1) {
            defaultPreprocessors.splice(Math.max(0, index + offset), 0, name);
        }

        return this;
    }
});

// }}}
// {{{ registerPreprocessor

T_Class.registerPreprocessor({

    // {{{ extend

    /**
     * @method extend
     * @private
     */
    extend: function(cls, data, fn) {

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

    },

    // }}}
    // {{{ mixins

    /**
     * @method mixins
     * @private
     */
    mixins: function(cls, data, fn) {

        var mixins = data.mixins;

        if(mixins) {
            cls.mixin(mixins);
        }

        delete data.mixins;

        if(fn) {
            fn.call(this, cls, data);
        }
    },

    // }}}
    // {{{ config

    /**
     * @method config
     * @private
     */
    config: function(cls, data, fn) {

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
    },

    // }}}
    // {{{ statics

    /**
     * @method statics
     * @private
     */
    statics: function(cls, data, fn) {

        if(T_NX.isObject(data.statics)) {
            var name, statics = data.statics;

            for(name in statics) {
                if(statics.hasOwnProperty(name)) {
                    cls[name] = statics[name];
                }
            }
        }

        delete data.statics;

        if(fn) {
            fn.call(this, cls, data);
        }
    }

    // }}}

});

// }}}
// {{{ setDefaultPreprocessors

T_Class.setDefaultPreprocessors([
    'extend',
    'mixins',
    'config',
    'statics'
]);

// }}}
// {{{ registerPreprocessor

T_Class.registerPreprocessor('className', function(cls, data, fn) {

    if(data.$className) {
        cls.$className = data.$className;
        cls.displayName = cls.$className;
    }

    if(fn) {
        fn.call(this, cls, data);
    }

}).insertDefaultPreprocessor('className', 'first');

// }}}

//    console.log("loader");
//}).insertDefaultPreprocessor('loader', 'after', 'className');

// }}}


/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */