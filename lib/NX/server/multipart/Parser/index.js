/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Parser

NX.define('NX.server.multipart.Parser',  {

    // {{{ statics

    statics: {
        PARSER_UNINITIALIZED: 0,
        START: 1,
        START_BOUNDARY: 2,
        HEADER_FIELD_START: 3,
        HEADER_FIELD: 4,
        HEADER_VALUE_START: 5,
        HEADER_VALUE: 6,
        HEADER_VALUE_ALMOST_DONE: 7,
        HEADERS_ALMOST_DONE: 8,
        PART_DATA_START: 9,
        PART_DATA: 10,
        PART_END: 11,
        END: 12,
        PART_BOUNDARY: 1,
        LAST_BOUNDARY: 1 * 2,
        LF: 10,
        CR: 13,
        SPACE: 32,
        HYPHEN: 45,
        COLON: 58,
        A: 97,
        Z: 122,
        lower: function(c) {
            return c | 0x20;
        }
    },

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ end

    end: require('./end'),

    // }}}
    // {{{ write

    write: require('./write'),

    // }}}
    // {{{ initWithBoundary

    initWithBoundary: require('./initWithBoundary'),

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
