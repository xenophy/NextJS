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
        '<em>service</em>メソッドはこれらの設定を行うことができます。',
        '設定は、オブジェクトで行います。直接オブジェクトリテラルで指定することがほとんどです。',
        'serviceメソッドで設定できる項目を一つずつ確認していきます。',
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
        '<td><em>NX.empty</em></td>',
        '<td>リクエスト終了後のコールバック関数</td>',
        '</tr>',

        '<tr>',
        '<td>paths</td>',
        '<td><em>Object(詳細は、次項参照)</em></td>',
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
        '<td><em>Object(詳細は、次項参照)</em></td>',
        '<td>セッション設定</td>',
        '</tr>',

        '<tr>',
        '<td>ssl</td>',
        '<td><em>Object(詳細は、次項参照)</em></td>',
        '<td>SSL設定</td>',
        '</tr>',

        '<tr>',
        '<td>virtualhost</td>',
        '<td><em>Object(詳細は、次項参照)</em></td>',
        '<td>バーチャルホスト設定</td>',
        '</tr>',

        '<tr>',
        '<td>workers</td>',
        '<td><em>require(\'os\').cpus().length</em></td>',
        '<td>ワーカー数</td>',
        '</tr>',

        '</table>',


        '<h3>パス設定オブジェクト</h3>',

        '<table>',
        '<tr>',
        '<th>オプション名</th>',
        '<th>初期値</th>',
        '<th>説明</th>',
        '</tr>',

        '<tr>',
        '<td>exec</td>',
        '<td>server.jsが実行されているディレクトリ</td>',
        '<td>初期値は、nodeコマンドを実行したディレクトリになります。以降の設定はすべて、このexecパス以下の設定がデフォルトです。</td>',
        '</tr>',

        '<tr>',
        '<td>logs</td>',
        '<td><em>[execディレクトリ]/logs</em></td>',
        '<td>ログ出力ディレクトリパス</td>',
        '</tr>',

        '<tr>',
        '<td>configs</td>',
        '<td><em>[execディレクトリ]/configs</em></td>',
        '<td>設定ファイルディレクトリパス</td>',
        '</tr>',

        '<tr>',
        '<td>modules</td>',
        '<td><em>[execディレクトリ]/modules</em></td>',
        '<td>モジュールディレクトリパス</td>',
        '</tr>',

        '<tr>',
        '<td>public</td>',
        '<td><em>[execディレクトリ]/public</em></td>',
        '<td>コンテンツディレクトリパス</td>',
        '</tr>',

        '<tr>',
        '<td>controllers</td>',
        '<td><em>[execディレクトリ]/controllers</em></td>',
        '<td>コントローラーディレクトリパス</td>',
        '</tr>',

        '<tr>',
        '<td>templates</td>',
        '<td><em>[execディレクトリ]/templates</em></td>',
        '<td>テンプレートディレクトリパス</td>',
        '</tr>',

        '<tr>',
        '<td>actions</td>',
        '<td><em>[execディレクトリ]/actions</em></td>',
        '<td>アクションディレクトリパス</td>',
        '</tr>',

        '</table>',


        '<h3>セッション設定</h3>',

        '<table>',
        '<tr>',
        '<th>オプション名</th>',
        '<th>初期値</th>',
        '<th>説明</th>',
        '</tr>',

        '<tr>',
        '<td>key</td>',
        '<td><em>\'nextjs.sid\'</em></td>',
        '<td>セッションキー名</td>',
        '</tr>',

        '<tr>',
        '<td>secret</td>',
        '<td><em>process.NXEnv.sessionSecret</em>の値</td>',
        '<td>ハッシュキー生成時に利用するシークレットコード</td>',
        '</tr>',

        '<tr>',
        '<td>cookie</td>',
        '<td><em>Object(詳細は、次項参照)</em></td>',
        '<td>セッションのハッシュキーを保存する際のCookie設定</td>',
        '</tr>',

        '<tr>',
        '<td>gc</td>',
        '<td><em>Object(詳細は、次項参照)</em></td>',
        '<td>ガーベージコレクションオブジェクト設定</td>',
        '</tr>',

        '</table>',


        '<h3>セッション用Cookie設定</h3>',

        '<table>',
        '<tr>',
        '<th>オプション名</th>',
        '<th>初期値</th>',
        '<th>説明</th>',
        '</tr>',

        '<tr>',
        '<td>path</td>',
        '<td><em>\'/\'</em></td>',
        '<td>サーバ上での、クッキーを有効としたいパス \'/\' をセットすると、クッキーは domain 配下の全てで有効となります。</td>',
        '</tr>',

        '<tr>',
        '<td>httpOnly</td>',
        '<td><em>true</em></td>',
        '<td>true を設定すると、HTTP を通してのみクッキーにアクセスできるようになります。 つまり、JavaScript のようなスクリプト言語からはアクセスできなくなるということです。 この設定を使用すると、XSS 攻撃によって ID を盗まれる危険性を減らせる (が、すべてのブラウザがこの設定をサポートしているというわけではありません) と言われています。</td>',
        '</tr>',

        '<tr>',
        '<td>maxAge</td>',
        '<td><em>14400000</em></td>',
        '<td>クッキーの有効期限</td>',
        '</tr>',

        '</table>',


        '<h3>セッション用ガーベージコレクションオブジェクト設定</h3>',

        '<table>',
        '<tr>',
        '<th>オプション名</th>',
        '<th>初期値</th>',
        '<th>説明</th>',
        '</tr>',

        '<tr>',
        '<td>probability</td>',
        '<td><em>1</em></td>',
        '<td></td>',
        '</tr>',

        '<tr>',
        '<td>divisor</td>',
        '<td><em>1000</em></td>',
        '<td></td>',
        '</tr>',

        '<tr>',
        '<td>maxAge</td>',
        '<td><em>14400000</em></td>',
        '<td></td>',
        '</tr>',

        '</table>',


        '<h3>SSL設定</h3>',
        '<p>',
        'すべての設定、初期値は<em>serviceメソッドに設定可能なコンフィグオプション</em>と同様ですが、いくつか追加されています。',
        '</p>',

        '<table>',
        '<tr>',
        '<th>オプション名</th>',
        '<th>初期値</th>',
        '<th>説明</th>',
        '</tr>',

        '<tr>',
        '<td>port</td>',
        '<td><em>3001</em></td>',
        '<td>ポート番号</td>',
        '</tr>',

        '<tr>',
        '<td>key</td>',
        '<td>-</td>',
        '<td>秘密鍵パス設定(例:<em>\'./certs/server.key\'</em>)</td>',
        '</tr>',

        '<tr>',
        '<td>cert</td>',
        '<td>-</td>',
        '<td>証明書パス設定(例:<em>\'./certs/server.crt\'</em>)</td>',
        '</tr>',

        '<tr>',
        '<td>ca</td>',
        '<td><em>-</em></td>',
        '<td>CA証明書(例:<em>\'./certs/server.cer\'</em>)</td>',
        '</tr>',

        '</table>',


        '<h3>バーチャルホスト設定</h3>',

        '<table>',
        '<tr>',
        '<th>オプション名</th>',
        '<th>初期値</th>',
        '<th>説明</th>',
        '</tr>',

        '<tr>',
        '<td>server</td>',
        '<td>-</td>',
        '<td>サーバー名設定(例:<em>nxtest1.com</em>)</td>',
        '</tr>',

        '<tr>',
        '<td>alias</td>',
        '<td>-</td>',
        '<td>サーバーエイリアス(例:<em>\'*.nxtest1.com\'</em>)</td>',
        '</tr>',

        '<tr>',
        '<td>port</td>',
        '<td><em>3000</em></td>',
        '<td>ポート番号</td>',
        '</tr>',

        '<tr>',
        '<td>virtualroot</td>',
        '<td>-</td>',
        '<td>バーチャルルート設定</td>',
        '</tr>',

        '<tr>',
        '<td>root</td>',
        '<td><em>execパス</em></td>',
        '<td>ルート設定</td>',
        '</tr>',

        '</table>',

        '<address>Copyright &copy; 2006 - 2011 <a href="http://www.xenophy.com/">Xenophy.CO.,LTD</a> All rights Reserved.</address>',

    ].join("")
});
