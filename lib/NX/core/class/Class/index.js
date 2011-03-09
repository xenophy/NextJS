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
    registerPreprocessor: require('./registerPreprocessor'),

    // }}}
    // {{{ getPreprocessor

    /**
     * @method getPreprocessor
     */
    getPreprocessor: require('./getPreprocessor'),

    // }}}
    // {{{ getDefaultPreprocessors

    /**
     * @method getDefaultPreprocessors
     */
    getDefaultPreprocessors: require('./getDefaultPreprocessors'),

    // }}}
    // {{{ setDefaultPreprocessors

    /**
     * @method setDefaultPreprocessors
     */
    setDefaultPreprocessors: require('./setDefaultPreprocessors'),

    // }}}
    // {{{ insertDefaultPreprocessor

    /**
     * @method insertDefaultPreprocessor
     */
    insertDefaultPreprocessor: require('./insertDefaultPreprocessor')

    // }}}

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
    statics: require('./preprocessors/statics'),

    // }}}
    // {{{ className

    /**
     * @method className
     * @private
     */
    className: require('./preprocessors/className')

    // }}}

});

// }}}
// {{{ setDefaultPreprocessors

T_Class.setDefaultPreprocessors([
    'className',
    'extend',
    'mixins',
    'config',
    'statics'
]);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
