/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_Array = require('../Array');
var flexSetter = require('../Function').flexSetter;

// }}}
// {{{ private

var postprocessors = {};
var defaultPostprocessors = [];
var classes = {};

// }}}
// {{{ NX.ClassManager

/**
 * @class NX.ClassManager
 */
var T_ClassManager = module.exports = {

    // {{{ private

    /**
     * @prop existCache
     * @private
     */
    existCache: {},

    // }}}
    // {{{ namespaceRewrites

    /**
     * @prop namespaceRewrites
     * @private
     */
    namespaceRewrites: require('./namespaceRewrites'),

    // }}}
    // {{{ maps

    /**
     * @prop maps
     * @private
     */
    maps: require('./maps'),

    // }}}
    // {{{ exist

    /**
     * @method exist
     */
    exist: require('./exist'),

    // }}}
    // {{{ parseNamespace

    /**
     * @method parseNamespace
     */
    parseNamespace: require('./parseNamespace'),

    // }}}
    // {{{ assignNamespace

    /**
     * @method assignNamespace
     */
    assignNamespace: require('./assignNamespace'),

    // }}}
    // {{{ createNamespaces

    /**
     * @method createNamespaces
     * @private
     */
    createNamespaces: require('./createNamespaces'),

    // }}}
    // {{{ set

    /**
     * @method set
     */
    set: function(name, value) {
        return require('./set').call(
            this,
            classes,
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
            name
        );
    },

    // }}}
    // {{{ setAlias

    /**
     * @method setAlias
     */
    setAlias: require('./setAlias'),

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
    getNameByAlias: require('./getNameByAlias'),

    // }}}
    // {{{ getNameByAlternate

    /**
     * @method getNameByAlternate
     */
    getNameByAlternate: require('./getNameByAlias'),

    // }}}
    // {{{ getAliasesByName

    /**
     * @method getAliasesByName
     */
    getAliasesByName: require('./getAliasesByName'),

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
    create: require('./create'),

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
    getNamesByExpression: require('./getNamesByExpression'),

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

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
