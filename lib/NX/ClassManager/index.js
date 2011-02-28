/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../core');
var T_Array = require('../Array');
var T_Function = require('../Function');
var T_Class = require('../Class');

// }}}
// {{{ NX.ClassManager

var T_ClassManager = module.exports = {

    // {{{ classes

    /**
     * @prop classes
     * @private
     */
    classes: {},

    // }}}
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
     */
    createNamespaces: require('./createNamespaces'),

    // }}}
    // {{{ set

    /**
     * @method set
     */
    set: require('./set'),

    // }}}
    // {{{ get

    /**
     * @method get
     */
    get: require('./get'),

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
    // {{{ postprocessor

    /**
     * @prop postprocessor
     * @private
     */
    postprocessors: {},

    // }}}
    // {{{ registerPostprocessor

    /**
     * @method registerPostprocessor
     */
    registerPostprocessor: require('./registerPostprocessor'),

    // }}}
    // {{{ getPostprocessor

    /**
     * @method getPostprocessor
     */
    getPostprocessor: require('./getPostprocessor'),

    // }}}
    // {{{ getDefaultPostprocessors

    /**
     * @method getDefaultPostprocessors
     */
    getDefaultPostprocessors: require('./getDefaultPostprocessors'),

    // }}}
    // {{{ setDefaultPreprocessors

    /**
     * @method setDefaultPostprocessors
     */
    setDefaultPostprocessors: require('./setDefaultPreprocessors'),

    // }}}
    // {{{ insertDefaultPreprocessor

    /**
     * @method insertDefaultPreprocessor
     */
    insertDefaultPostprocessor: require('./insertDefaultPreprocessor'),

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
