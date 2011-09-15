/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Web.dump

module.exports = function(values, id) {

    var me = this,
        res = me.res;

    if(!me.$dump) {
        me.$dump = [];
    }

    if(!res.$dump) {
        res.$dump = [];
    }

    function customPrepareStackTrace(error, structuredStackTrace) {
        return {
            filename: structuredStackTrace[1].getFileName(),
            line:  structuredStackTrace[1].getLineNumber()
        };
    };

    var getCallerInfo = function() {

        var original = Error.prepareStackTrace;

        Error.prepareStackTrace = customPrepareStackTrace;

        var error = {};

        Error.captureStackTrace(error, getCallerInfo);

        var info = error.stack;

        Error.prepareStackTrace = original;

        return info;

    };

    var info = getCallerInfo();

    res.$dump.push({dump:NX.clone(values), id: id, line: info.line, filename: info.filename});
    me.$dump.push({dump:NX.clone(values), id: id, line: info.line, filename: info.filename});

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
