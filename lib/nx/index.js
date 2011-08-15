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

[
    'NX.util.Mime',
    'NX.util.Encode'

].forEach(function(item) {
    NX.Loader.require(item);
});

// }}}
// {{{ Next JS Enviroment

NX.apply(process.NXEnv, {
    sessionSecret : NX.Crypto.createHash('md5').update((Math.random()).toString()).digest('hex')
});

// }}}
// {{{ apply NX more Methods

NX.apply(NX, {
    dispatch: require('./dispatch'),
    setLocale: require('./setLocale'),
    service: require('./service')
});

// }}}
// {{{ locale setting

var locale = process.env.LANG || 'en';
if(NX.isString(process.env.LANG)) {
    var tmp = process.env.LANG.split('_');
    if(NX.isArray(tmp)) {
        locale = tmp[0];
    }
}
NX.setLocale(locale);

// }}}
// {{{ module exports

module.exports = NX;

// }}}

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
