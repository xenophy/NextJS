Ext.data.JsonP.tutorial_webserver({
    "guide": [

        '<h1>Webサーバーの起動</h1>',

        '<p>',
        'まずは、Next JSでWebサーバーを起動してみましょう。',
        'Webサーバーを起動するためには、<em>server.js</em>というファイルを作るところから始めます。',
        '任意のディレクトリに(ここでは/home/www/として)server.jsを作成します。',
        '</p>',

        '<h2>server.jsの準備</h2>',

        '<p>',
        'server.jsに次の内容を記載します。',
        '</p>',

        '<pre>',
        'require(<span style="color:#009900;">\'nx\'</span>).service();',
        '</pre>',

        '<h2>サーバー起動</h2>',
        '<p>',
        'コマンドラインから、server.jsを起動します。',
        '</p>',

        '<pre>',
        'node server start',
        '</pre>',

        '<p>',
        'nodeコマンドの後ろに指定するファイル名は、特に<em>.js</em>を記載しなくてもよいです。',
        'さらには、server.jsというファイル名でなくても動作しますが、わかりやすくserver.jsを標準とします。',
        '</p>',

        '<p>',
        '最後の<em>start</em>は、サーバーに対する動作指定です。指定できるのは、次の二つです。',
        '</p>',

        '<ul>',
        '<li>start</li>',
        '<li>stop</li>',
        '</ul>',

        '<p>',
        '動作指定が未指定の場合、次の様に表示されます。',
        '</p>',

        '<pre>',
        'Usage: [start|stop]',
        '</pre>',


        '<h2>HTML作成</h2>',
        '<p>',
        '既にサーバーは、起動しているのですがブラウザで表示するためのHTMLがありませんので、HTMLを作成します。',
        '/home/www/public/と<em>public</em>というディレクトリをserver.jsと同階層に作成し、その中にindex.htmlを作成します。',
        '</p>',

        '<pre>',
        '<span style="color:#0000FF;">&lt;html&gt;</span>' + "\n",
        '<span style="color:#0000FF;">&lt;head&gt;</span>' + "\n",
        '    <span style="color:#0000FF;">&lt;meta <span style="color:#000000;">http-equiv=</span><span style="color:#009900;">&quot;Content-Type&quot;</span> <span style="color:#000000;">content=</span><span style="color:#009900;">&quot;text/html; charset=utf8&quot;</span>&gt;</span>' + "\n",
        '    <span style="color:#0000FF;">&lt;title&gt;</span>Next JS HTML表示テスト<span style="color:#0000FF;">&lt;/title&gt;</span>' + "\n",
        '<span style="color:#0000FF;">&lt;/head&gt;</span>' + "\n",
        '<span style="color:#0000FF;">&lt;body&gt;</span>' + "\n",
        '    Next JS HTML表示テスト' + "\n",
        '<span style="color:#0000FF;">&lt;/body&gt;</span>' + "\n",
        '<span style="color:#0000FF;">&lt;/html&gt;</span>' + "\n",
        '</pre>',


        '<h2>ブラウザからアクセス</h2>',

        '<p>',
        '先ほど作ったHTMLをブラウザから参照してみましょう。',
        'ブラウザから次のURLへアクセスします。',
        'ここでは、Webサーバーを実行している環境とブラウザを開いている環境が一緒である前提ですので、',
        'Webサーバーを実行している環境が別の場合は、IPやそのIPをDNSで指定してアクセスしてください。',
        '</p>',

        '<pre>',
        'http://localhost:3000/',
        '</pre>',

        '<p>',
        'ブラウザに<em>Next JS HTML表示テスト</em>と表示されましたか？',
        '確認できたらstopで一度Webサーバーを終了させましょう。',
        '</p>',

        '<pre>',
        'node server stop',
        '</pre>',

        '<h2>Webサーバーの設定</h2>',
        '<p>',
        'あなたは、サーバーを起動するために<em>service</em>メソッドを呼び出しただけで、Webサーバーとして機能させることに成功しました。',
        'しかも、ポートは3000ポートでリスンしています。',
        '<em>service</em>メソッドはこれらの設定を行うことができます。serviceメソッドで設定できる項目を一つずつ確認していきます。',
        '</p>',

        '<h3>serviceメソッドに設定可能なコンフィグオプション</h3>',
        '<table>',
        '<tr>',
        '<th>オプション名</th>',
        '<th>初期値</th>',
        '<th>説明</th>',
        '</tr>',

        '<tr>',
        '<td>actionName</td>',
        '<td><em>\'index\'</em></td>',
        '<td>デフォルトアクション名</td>',
        '</tr>',

        '<tr>',
        '<td>controllerType</td>',
        '<td><em>\'Web\'</em></td>',
        '<td>コントローラータイプ</td>',
        '</tr>',

        '<tr>',
        '<td>enableDaemon</td>',
        '<td><em>true</em></td>',
        '<td>デーモン化フラグ</td>',
        '</tr>',

        '<tr>',
        '<td>host</td>',
        '<td><em>\'0.0.0.0\'</em></td>',
        '<td>受付ホストアドレス</td>',
        '</tr>',

        '<tr>',
        '<td>lockFile</td>',
        '<td><em>\'/tmp/nxd.pid\'</em></td>',
        '<td>デーモン化時のプロセスロックファイル名<br />(初期値)</td>',
        '</tr>',

        '<tr>',
        '<td>logFile</td>',
        '<td><em>\'/tmp/nxd.log\'</em></td>',
        '<td>デーモン化時標準出力ファイル名</td>',
        '</tr>',

        '<tr>',
        '<td>next</td>',
        '<td>NX.empty</td>',
        '<td>リクエスト終了後のコールバック関数</td>',
        '</tr>',

        '<tr>',
        '<td>paths</td>',
        '<td>Object(詳細は、次項参照)</td>',
        '<td>パス設定オブジェクト</td>',
        '</tr>',

        '<tr>',
        '<td>port</td>',
        '<td><em>3000</em></td>',
        '<td>リスンポート</td>',
        '</tr>',

        '<tr>',
        '<td>serverId</td>',
        '<td><em>NX.uid(24)</em></td>',
        '<td>サーバーID</td>',
        '</tr>',

        '<tr>',
        '<td>session</td>',
        '<td>Object(詳細は、次項参照)</td>',
        '<td>セッション設定</td>',
        '</tr>',

        '<tr>',
        '<td>ssl</td>',
        '<td>Object(詳細は、次項参照)</td>',
        '<td>SSL設定</td>',
        '</tr>',

        '<tr>',
        '<td>virtualhost</td>',
        '<td>Object(詳細は、次項参照)</td>',
        '<td>バーチャルホスト設定</td>',
        '</tr>',

        '<tr>',
        '<td>workers</td>',
        '<td><em>require(\'os\').cpus().length</em></td>',
        '<td>ワーカー数</td>',
        '</tr>',

        '</table>',

        '<address>Copyright &copy; 2006 - 2011 <a href="http://www.xenophy.com/">Xenophy.CO.,LTD</a> All rights Reserved.</address>',

    ].join("")
});
