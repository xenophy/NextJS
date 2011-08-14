/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

(function() {

var path = require('path');

// {{{ Next JS Enviroment

process.NXEnv = {
    lang: 'ja_JP',
    dirname: path.dirname(process.argv[1]),
    basename: path.dirname(process.argv[1]),
    libdir: __dirname
};

// }}}
// {{{ NX Core

require('nx-core');

// }}}
// {{{ Loader Settings

NX.Loader.setConfig('paths', {
    NX: process.NXEnv.libdir
});

// }}}
// {{{ requires

require('./util/Mime');
require('./util/Encode');
require('./server');

// }}}
// {{{ Next JS Enviroment

NX.apply(process.NXEnv, {
    sessionSecret : NX.Crypto.createHash('md5').update((Math.random()).toString()).digest('hex')
});

// }}}
// {{{ ロケール設定

NX.setLocale = NX.Function.createSequence(NX.setLocale, function(locale) {

    try {
        locale = NX.util.Format.replace(locale, '/', '');
        var file = require('path').normalize(process.NXEnv.libdir + '/locale/' + locale + '.json');
        var data = require('fs').readFileSync(file).toString();
        NX.apply(NX.$locale, NX.JSON.decode(data));
    } catch(e) {
    }

});

var locale = process.env.LANG || 'en';
if(NX.isString(process.env.LANG)) {
    var tmp = process.env.LANG.split('_');
    if(NX.isArray(tmp)) {
        locale = tmp[0];
    }
}
NX.setLocale(locale);

// }}}

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
