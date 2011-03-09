/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');
var T_Array = require('../../lang/Array');
var T_Class = require('../Class');
var flexSetter = require('../../lang/Function').flexSetter;

// }}}
// {{{ NX.ClassManager

/**
 * @class NX.ClassManager
 */

/**
 * @prop postprocessors
 * @private
 */
var postprocessors = {};

/**
 * @prop defaultPostprocessors
 * @private
 */
var defaultPostprocessors = [];

/**
 * @prop classes
 * @private
 */
var classes = {};

/**
 * @prop existCache
 * @private
 */
var existCache = {};

/**
 * @prop maps
 * @private
 */
var maps = require('./maps');

/**
 * @prop namespaceRewrites
 * @private
 */
var namespaceRewrites = require('./namespaceRewrites');

/**
 * @method parseNamespace
 * @private
 */
var parseNamespace = require('./parseNamespace');

var T_ClassManager = module.exports = {

    // {{{ maps

    /**
     * @prop maps
     */
    maps : maps,

    // }}}
    // {{{ exist

    /**
     * @method exist
     */
    exist: function(className) {
        return require('./exist').call(
            this,
            classes,
            existCache,
            parseNamespace,
            namespaceRewrites,
            className
        );
    },

    // }}}
    // {{{ assignNamespace

    /**
     * @method assignNamespace
     */
    assignNamespace: function(name, value) {
        return require('./assignNamespace').call(
            this,
            parseNamespace,
            namespaceRewrites,
            name,
            value
        );
    },

    // }}}
    // {{{ createNamespaces

    /**
     * @method createNamespaces
     */
    createNamespaces: function() {
        return require('./createNamespaces').call(
            this,
            parseNamespace,
            namespaceRewrites,
            arguments
        );
    },

    // }}}
    // {{{ set

    /**
     * @method set
     */
    set: function(name, value) {
        return require('./set').call(
            this,
            classes,
            maps,
            name,
            value
        );
    },

    // }}}
    // {{{ get

    /**
     * @method get
     */
    get: function(name) {
        return require('./get').call(
            this,
            classes,
            parseNamespace,
            namespaceRewrites,
            name
        );
    },

    // }}}
    // {{{ setAlias

    /**
     * @method setAlias
     */
    setAlias: function(cls, alias) {
        return require('./setAlias').call(
            this,
            maps,
            cls,
            alias
        );
    },

    // }}}
    // {{{ getByAlias

    /**
     * @method getByAlias
     */
    getByAlias: require('./getByAlias'),

    // }}}
    // {{{ getNameByAlias

    /**
     * @method getNameByAlias
     */
    getNameByAlias: function(alias) {
        return require('./getNameByAlias').call(
            this,
            maps,
            alias
        );
    },

    // }}}
    // {{{ getNameByAlternate

    /**
     * @method getNameByAlternate
     */
    getNameByAlternate: function(alternate) {
        return require('./getNameByAlternate').call(
            this,
            maps,
            alternate
        );
    },

    // }}}
    // {{{ getAliasesByName

    /**
     * @method getAliasesByName
     */
    getAliasesByName: function(name) {
        return require('./getAliasesByName').call(
            this,
            maps,
            name
        );
    },

    // }}}
    // {{{ getName

    /**
     * @method getName
     */
    getName: require('./getName'),

    // }}}
    // {{{ getClass

    /**
     * @method getClass
     */
    getClass: require('./getClass'),

    // }}}
    // {{{ create

    /**
     * @method create
     */
    create: function(className, data, createdFn) {
        return require('./create').call(
            this,
            className,
            data,
            createdFn
        );
    },

    // }}}
    // {{{ instantiateByAlias

    /**
     * @method instantiateByAlias
     */
    instantiateByAlias: require('./instantiateByAlias'),

    // }}}
    // {{{ instantiate

    /**
     * @method instantiate
     */
    instantiate: require('./instantiate'),

    // }}}
    // {{{ registerPostprocessor

    /**
     * @method registerPostprocessor
     */
    registerPostprocessor: flexSetter(function(name, fn) {
        postprocessors[name] = fn;
        return this;
    }),

    // }}}
    // {{{ getPostprocessor

    /**
     * @method getPostprocessor
     */
    getPostprocessor : function(name) {
        return postprocessors[name];
    },

    // }}}
    // {{{ getDefaultPostprocessors

    /**
     * @method getDefaultPostprocessors
     */
    getDefaultPostprocessors: function() {
        return defaultPostprocessors;
    },

    // }}}
    // {{{ setDefaultPreprocessors

    /**
     * @method setDefaultPostprocessors
     */
    setDefaultPostprocessors: function(postprocessors) {
        defaultPostprocessors = T_Array.from(postprocessors);
        return this;
    },

    // }}}
    // {{{ insertDefaultPreprocessor

    /**
     * @method insertDefaultPreprocessor
     */
    insertDefaultPostprocessor: function(name, offset, relativeName) {
        return require('./insertDefaultPreprocessor').call(
            this,
            defaultPostprocessors,
            name,
            offset,
            relativeName
        );
    },

    // }}}
    // {{{ getNamesByExpression

    /**
     * @method getNamesByExpression
     */
    getNamesByExpression: function(expression) {
        return require('./getNamesByExpression').call(
            this,
            maps,
            expression
        );
    }

    // }}}

};

// }}}
// {{{ registerPostprocessor

T_ClassManager.registerPostprocessor({

    // {{{ alias

    alias: require('./postprocessors/alias'),

    // }}}
    // {{{ singleton

    singleton: require('./postprocessors/singleton'),

    // }}}
    // {{{ alternateClassName

    alternateClassName: require('./postprocessors/alternateClassName'),

    // }}}

});

// }}}
// {{{ setDefaultPreprocessors

T_ClassManager.setDefaultPostprocessors([
    'alias',
    'singleton',
    'alternateClassName'
]);

// }}}
// {{{ registerPreprocessor

T_Class.registerPreprocessor(
    'loader',
    require('../Class/preprocessors/loader')
).insertDefaultPreprocessor(
    'loader',
    'after',
    'className'
);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
