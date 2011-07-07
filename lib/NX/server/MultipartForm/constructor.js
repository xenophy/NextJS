/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.MultipartForm.constructor

module.exports = function(config) {

    config = config || {};

    NX.apply(this, config);
    NX.applyIf(this, {
        error: null,
        ended: false,
        maxFieldsSize: 2 * 1024 * 1024,
        keepExtensions: false,
        uploadDir: '/tmp',
        encoding: 'utf-8',
        headers: null,
        type: null,
        bytesReceived: null,
        bytesExpected: null,
        $parser: null,
        $flushing: 0,
        $fieldsSize: 0,
    });

    /*
    var emiter = require('events').EventEmitter.call(this);
    console.log(emiter);
    require("util").inherits(this, require('events').EventEmitter);
    console.log(this.on);
    */
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
