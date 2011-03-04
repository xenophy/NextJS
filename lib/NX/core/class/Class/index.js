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
var T_Class = module.exports = require('./constructor');

T_NX.apply(T_Class, {

    // {{{ preprocessors

    /**
     * @prop preprocessors
     * @private
     */
    preprocessors : {},

    // }}}
    // {{{ defaultPreprocessors

    /**
     * @prop defaultPreprocessors
     * @private
     */
    defaultPreprocessors : [],

    // }}}
    // {{{ registerPreprocessor

    /**
     * @method registerPreprocessor
     */
    registerPreprocessor: flexSetter(function(name, fn) {
        this.preprocessors[name] = fn;
        return this;
    }),

    // }}}
    // {{{ getPreprocessor

    /**
     * @method getPreprocessor
     */
    getPreprocessor: function(name) {
        return this.preprocessors[name];
    },

    // }}}
    // {{{ getDefaultPreprocessors

    /**
     * @method getDefaultPreprocessors
     */
    getDefaultPreprocessors: function() {
        return this.defaultPreprocessors || [];
    },

    // }}}
    // {{{ setDefaultPreprocessors

    /**
     * @method setDefaultPreprocessors
     */
    setDefaultPreprocessors: function(preprocessors) {
        this.defaultPreprocessors = T_Array.from(preprocessors);
        return this;
    },

    // }}}
    // {{{ insertDefaultPreprocessor

    /**
     * @method insertDefaultPreprocessor
     */
    insertDefaultPreprocessor: function(name, offset, relativeName) {

        var defaultPreprocessors = this.defaultPreprocessors,
            index;

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
    extend: require('./preprocessors/extend'),

    // }}}
    // {{{ mixins

    /**
     * @method mixins
     * @private
     */
    mixins: require('./preprocessors/mixins'),

    // }}}
    // {{{ config

    /**
     * @method config
     * @private
     */
    config: require('./preprocessors/config'),

    // }}}
    // {{{ statics

    /**
     * @method statics
     * @private
     */
    statics: require('./preprocessors/statics')

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

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
