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

/**
 * WELL KNOWN PORT NUMBERS(0-1023)を指定する場合はroot権限が必要かも知れません。
 * 次のコマンドで起動するしてください。
 *
 * sudo node server.js start
 *
 * http://localhost/
 * https://localhost/
 *
 * で動作確認が行えます。
 * また、Apache / Skypeなどとポートがかぶる場合は起動できませんのでご注意ください。
 */
NX.regServer([{

    // ポート指定
    port: 80

},{

    // SSL設定、ポート番号は設定しないと自動的に443になります。
    ssl: {

        // 秘密鍵パス設定
        key: './certs/privatekey.pem',

        // 証明書パス設定
        cert: './certs/certificate.pem'

    }

}]);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
