Ext.data.JsonP.about_flow({
    "guide": [
        '<h1>内部構造と処理フロー</h1>',
        '<p>',
        'Next JSが利用するパッケージと、その関係、そして基本的なNext JSの処理フローについて説明します。',
        '</p>',
        '<img src="pages/about_flow/images/packages.png" style="margin: 20px 0 20px 0;" />',
        '<p>',
        'Next JSは、主に次の3つのパッケージを利用しています。',
        '</p>',
        '<ul>',
        '<li>',
        'Next Core',
        '</li>',
        '<li>',
        'Next Daemon',
        '</li>',
        '<li>',
        'node-iconv-jp',
        '</li>',
        '</ul>',
        '<p>',
        'これらのパッケージは、npmでNext JS(nx)をインストールすると依存関係で自動的にインストールされます。',
        '</p>',

        '<h2>Next Core</h2>',
        '<p>',
        '[URL]: <a href="https://github.com/xenophy/NextCore">https://github.com/xenophy/NextCore</a>',
        '</p>',
        '<p>',
        'JavaScriptによりExt 4ベースのクラスシステムを提供し、かつ便利なクラス群を備えるライブラリです。',
        'Next JSと切り離して利用できますので、Next JSを利用しない場面でもクラスシステム、ライブラリとして利用可能です。',
        '</p>',

        '<h2>Next Daemon</h2>',
        '<p>',
        '[URL]: <a href="https://github.com/xenophy/NextDaemon">https://github.com/xenophy/NextDaemon</a>',
        '</p>',
        '<p>',
        'Next JS、特にWebサーバー機能を提供する際に、そのプロセスをデーモン化するためのC++実装によるnodeアドオンです。',
        '</p>',

        '<h2>node-iconv-jp</h2>',
        '<p>',
        '[URL]: <a href="https://github.com/xenophy/node-iconv">https://github.com/xenophy/node-iconv</a>',
        '</p>',
        '<p>',
        '<a href="https://github.com/bnoordhuis/node-iconv">node-iconv</a>',
        'で実装されたソースをForkし、日本語パッチを適用したC++実装によるnodeアドオンです。',
        '</p>',

        '<h2>データベースドライバ</h2>',
        '<ul>',
        '<li>node-db-oracle</li>',
        '<li>node-mysql</li>',
        '<li>node-postgres</li>',
        '<li>node-mongodb-native</li>',
        '</ul>',
        '<p>',
        'Next JSは、上記のデータベースドライバをnpmの依存関係でインストールします。',
        '開発者は、MySQL,PorsgreSQL,Oracle,MongoDBに対して、Next JSのモデルインタフェースを介して統一なアクセスが行えるとともに',
        'ドライバオブジェクトを直接操作することもできます。',
        'Next JSはデータベースコネクションをJSON形式で定義して、利用するコネクションを切り替えて利用することができます。',
        'そのため、MySQL+Oracleといったような複数のデータベースシステムを利用することが容易に行えます。',
        '</p>',

        '<h2>処理フロー</h2>',
        '<p>',
        'Next JSは、先に説明した4つのメイン機能がありますが、その１つのフレームワーク機能に至るまでの流れを説明します。',
        'まず、Next JSは、2つのインタフェースが用意されています。',
        '1つは、<em>Webインタフェース</em>、もう1つは<em>コマンドラインインタフェース</em>です。',
        '</p>',

        '<h3>Webインタフェース</h3>',
        '<p>',
        'Webインタフェースは、<em>NX.service</em>メソッドを通してWebサーバーを起動して、リスンするポートに対してリクエストが行われることにより',
        'フレームワーク機能が実行されるインタフェースです。',
        '主にWebアプリケーションを作成するために利用します。',
        'もちろん、単純なWebサーバーとしても利用できます。',
        '</p>',

        '<h3>コマンドラインインタフェース</h3>',
        '<p>',
        'コマンドラインインタフェースは、<em>NX.dispatch</em>メソッドを利用して、',
        'フレームワーク機能を開始します。',
        '具体的には、アクションを指定してWebインタフェースと同様のアクション、モジュールを利用して',
        'コマンドラインスクリプトを記述することができます。',
        '主に、cron処理や、Webインタフェースと連動しブラウザのタイムアウト以上に実行時間のかかる処理を',
        'コマンドラインインタフェースに委譲することができます。',
        '</p>',


    ].join("")
});
