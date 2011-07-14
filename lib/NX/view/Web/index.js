/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web

NX.define('NX.view.Web', {

    // {{{ alternateClassName

    alternateClassName: 'NX.WebView',

    // }}}
    // {{{ extend

    extend: 'NX.view.Abstract',

    // }}}
    // {{{ statics

    statics: {

        // {{{ mimetype

        mimetype: require('./statics/mimetype'),

        // }}}
        // {{{ errorDocument

        errorDocument: require('./statics/errorDocument'),

        // }}}
        // {{{ etag

        etag : require('./statics/etag')

        // }}}

    },

    // }}}
    // {{{ tplExts

    tplExts: require('./tplExts'),

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ loadFile

    loadFile: require('./loadFile'),

    // }}}
    // {{{ render

    render: require('./render'),

    // }}}
    // {{{ init

    init: require('./init'),

    // }}}

    // {{{ error

    error : require('./error')

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
