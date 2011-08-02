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

require('./core');

// }}}
// {{{ Loader Settings

NX.Loader.setConfig('paths', {
    NX: process.NXEnv.libdir
});

// }}}
// {{{ requires

require('./server');
require('./misc');

// }}}
// {{{ Next JS Enviroment

NX.apply(process.NXEnv, {
    sessionSecret : NX.Crypto.createHash('md5').update((Math.random()).toString()).digest('hex')
});

// }}}
// {{{ global function

global._e = function(msgid) {

    if(!process.NXEnv.translations) {

        var langdir = process.NXEnv.libdir + '/resources/languages/';
        var locale = process.NXEnv.lang;
        var file = langdir + locale + '.json';

        if(require('path').existsSync(file)) {

            process.NXEnv.translations = JSON.parse(require('fs').readFileSync(file));

        } else {

            return msgid;

        };

    }

    return process.NXEnv.translations[msgid];

};

// }}}

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
