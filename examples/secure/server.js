/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('../../lib/NX');

// }}}
// {{{ HTTP Server

NX.server({

    // ポート指定(デフォルト3000ポート、未指定でも3000ポートになります)
    port: 3000,

    ssl: {

        // ポート指定
        port: 3001,

        // 秘密鍵パス設定
        key: './certs/privatekey.pem',

        // 証明書パス設定
        cert: './certs/certificate.pem'

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
