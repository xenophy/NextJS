/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('../lib/NX');

// }}}
// {{{ HTTP Server

NX.service({

    // [ポート指定]
    // デフォルト3000ポート、未指定でも3000ポートになります。
    // 0-1024の Well-known port を指定する場合は、ルート権限が必要になります。
    port: 3000,

    // [ホスト指定]
    // デフォルトで0.0.0.0となり、接続元を限定しません。
    //host: '0.0.0.0',

    // [ワーカー]
    // デフォルトでCPU数(コア)を取得して自動的に最適なワーカー数を設定します。
    // falseに設定するとworkerを使用せずmasterでのみ動作します。
    workers: false,

    // [デーモン化]
    // デフォルトでNXDを利用しプロセスをデーモン化します。
    enableDaemon: false,

    // [SSL設定]
    ssl: {

        // [ポート指定]
        // 0-1024の Well-known port を指定する場合は、ルート権限が必要になります。
        port: 3001,

        // [秘密鍵パス設定]
        key: './certs/privatekey.pem',

        // [証明書パス設定]
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
