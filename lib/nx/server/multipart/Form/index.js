/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Form

NX.define('NX.server.multipart.Form',  {

    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ mixins

    mixins: [
        require('events').EventEmitter
    ],

    // }}}
    // {{{ pause

    pause: require('./pause'),

    // }}}
    // {{{ resume

    resume: require('./resume'),

    // }}}
    // {{{ parse

    parse: require('./parse'),

    // }}}
    // {{{ write

    write: require('./write'),

    // }}}
    // {{{ writeHeaders

    writeHeaders: require('./writeHeaders'),

    // }}}
    // {{{ onPart

    onPart: require('./onPart'),

    // }}}
    // {{{ handlePart

    handlePart: require('./handlePart'),

    // }}}
    // {{{ $maybeEnd

    $maybeEnd: require('./dollar_maybeEnd'),

    // }}}
    // {{{ $uploadPath

    $uploadPath: require('./dollar_uploadPath'),

    // }}}
    // {{{ $error

    $error: require('./dollar_error'),

    // }}}
    // {{{ $parseContentLength

    $parseContentLength: require('./dollar_parseContentLength'),

    // }}}
    // {{{ $parseContentType

    $parseContentType: require('./dollar_parseContentType')

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
