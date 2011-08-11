/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address

NX.define('NX.smtp.Address', {

    // {{{ statics

    statics: {

        // {{{ SPACE

        SPACE: ' ',

        // }}}
        // {{{ EMPTYSTRING

        EMPTYSTRING: '',

        // }}}
        // {{{ COMMASPACE

        COMMASPACE: ', ',

        // }}}
        // {{{ quote

        quote: require('./statics/quote'),

        // }}}
        // {{{ parse

        parse: require('./statics/parse')

        // }}}

    },

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ gotoNext

    gotoNext: require('./gotoNext'),

    // }}}
    // {{{ getList

    getList: require('./getList'),

    // }}}
    // {{{ get

    get: require('./get'),

    // }}}
    // {{{ getPhraseList

    getPhraseList: require('./getPhraseList'),

    // }}}
    // {{{ getAtom

    getAtom: require('./getAtom'),

    // }}}
    // {{{ getDomainLiteral

    getDomainLiteral: require('./getDomainLiteral'),

    // }}}
    // {{{ getComment

    getComment: require('./getComment'),

    // }}}
    // {{{ getQuote

    getQuote: require('./getQuote'),

    // }}}
    // {{{ getDelimited

    getDelimited: require('./getDelimited'),

    // }}}
    // {{{ getSpec

    getSpec: require('./getSpec'),

    // }}}
    // {{{ getRoute

    getRoute: require('./getRoute'),

    // }}}
    // {{{ getDomain

    getDomain: require('./getDomain')

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
