/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Template

NX.define('NX.util.Template', {

    // {{{ requires

    requires: [
        'NX.util.tpl.TextNode',
        'NX.util.tpl.Foreach',
        'NX.util.tpl.If',
        'NX.util.tpl.Include'
    ],

    // }}}
    // {{{ alternateClassName

    alternateClassName: 'NX.Template',

    // }}}
    // {{{ statics

    statics: {

        // {{{ isHtmlComment

        isHtmlComment: require('./statics/isHtmlComment'),

        // }}}
        // {{{ getVarName

        getVarName: require('./statics/getVarName'),

        // }}}
        // {{{ getModifier

        getModifier: require('./statics/getModifier')

        // }}}

    },

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ fetch

    fetch: require('./fetch')

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
