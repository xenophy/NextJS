/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Parser

module.exports = function(config) {

    config = config || {};

    NX.apply(this, config);
    NX.applyIf(this, {
        boundary: null,
        boundaryChars: null,
        lookbehind: null,
        state: NX.server.multipart.Parser.PARSER_UNINITIALIZED,
        index: null,
        flags: 0
    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
