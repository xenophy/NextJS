/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.setLocale

module.exports = NX.Function.createSequence(NX.setLocale, function(locale) {

    try {
        locale = NX.util.Format.replace(locale, '/', '');
        var file = require('path').normalize(process.NXEnv.libdir + '/locale/' + locale + '.json');
        var data = require('fs').readFileSync(file).toString();
        NX.apply(NX.$locale, NX.JSON.decode(data));
    } catch(e) {
    }

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
