# 0.8.4
======================


# 0.8.3
======================
  * Add     MongoDB createDatabase/dropDatabase/createCollection/dropCollectionメソッド実装
  * Add     MongoDB insert/update/findAndModify/save/removeメソッド実装
  * Add     MongoDBサポート開始、findメソッド実装
  * Add     モジュールでMySQL使用時に利用できるsetメソッドを実装
  * Add     モジュールでMySQL使用時に利用できるinsert/update/deleteメソッドを実装
  * Add     モジュールでMySQL使用時に利用できるinsert/update/deleteメソッドを実装
  * Add     モジュールでMySQL使用時に利用できるbeginTrans/commit/rollbackメソッドを実装
  * Fixed   this.dumpで配列を指定した場合に、正常に出力されないバグを修正
  * Add     アクション内でthis.isSSL()メソッドを追加しました。リクエストがHTTPS/HTTPかを判定することができます。
  * Fixed   NX.app.action.Directを初期状態でロードされるように修正しました。
  * Fixed   テンプレート内のincludeするファイルが存在しない場合、テンプレート内にエラーメッセージを表示するようにし、
            500エラーが発生しないようにしました。


# 0.8.2
======================
  * Change  アクション内でthis.dumpを行うとHTML出力ではなく、クライアント側のconsole.dirでサーバーサイドのオブジェクトを確認できるように変更
  * Change  リクエストされる全てのファイルに対してアクションが動作していたため、サーバー設定で、action.allowExtに配列で
            アクションを動作させる許可拡張子を登録するように変更しました。
            デフォルトでアクションが動作するのは、.html, .htm, .js, .json です。
  * Add     アクション内で、this.forbidden(true);とすることで、403を返すと同時にthis.abortと同じく以降の処理を中断することができるようになりました。
  * Fixed   アクション内で、this.end(false);とすることでビュー処理を行わない仕様は、変更ありませんが、
            これをエクテントアクション、グローバルアクションで利用した場合、後発のアクションで指定されていないと
            ビュー処理が実行されてしまう不具合を修正
  * Change  Next JS格納ディレクトリ内にあるリソースディレクトリ（特殊ディレクトリ）にサクセスされた場合、アクションを実行しないように変更
  * Fixed   アクションチェーンにカスタムクラスを指定した時、カスタムクラス内のエラーが表示されなかった不具合を修正
  * Add     virtualrootに関数オブジェクトを指定することができるようになりました。
  * Fixed   virtualhost指定時、グローバルアクション、エクテントアクションファイルの読み込みが
            node 0.5.6で正常に行われないバグを修正。
            実行パスを予め、リアルパスに変換するように修正しました。
  * Change  node 0.5.6でnew.SocketにfileDescriptorを渡してもopenできないので（未実装のため）、
            node 0.5.6ではworkerの利用を拒否するようにしました。
            node 0.5.7以降で利用できるようになるまでの制限事項です。


# 0.8.1
======================
  * Fixed   Linux上でディレクトリの大文字小文字問題によりモジュールが正常にロードできない不具合を修正
  * Fixed   nx-daemonがサブモジュールとしてしかインストールされていない場合に読み込めない不具合を修正


# 0.8.0
======================
  * Change  node-mysql 0.9.3形式に対応
  * Add     NX.util.MarkDown クラス作成
  * Add     NX.util.UA ユーザーエージェントクラス作成、
            またアクション内に自動的にisMacなどの判定メソッドが実装されるようになりました。
  * Add     バーチャルホスト設定に対応しました。
  * Change  NXDをnext-daemonパッケージに分離しました。


# 0.7.6
======================
  * Add     ExtDirect APIの出力とインタフェースになるNX.app.action.Direct(NX.DirectAction)を実装しました。
  * Add     ベーシック認証を行うための、this.basicAuthを実装
  * Add     ベーシック認証キャンセル時に、401 Unauthorizedを返却するようになりました。
  * Add     ベーシック認証失敗時に、403 Forbiddenを返却するようになりました。
  * Add     this.templateで動的に出力テンプレートを変更できるようになりました。
  * Add     this.redirectを実装しました。
  * Add     this.abortで以降の悪ショーンチェーンと停止するメソッドを実装しました。
  * Change  globalアクション、extentアクションもユーザーアクションチェーンに対応しました。
  * Change  this.dumpで深い階層のオブジェクト表示レベルを20階層までに制限しました。
  * Fixed   this.dumpでオブジェクトのキーと値が反対に表示されていたバグを修正
  * Add     Worker動作時、NX.Loader設定の自動継承実装
  * Add     アクションタイムアウト実装（デフォルト3秒）
  * Add     ユーザーアクションチェーン実装


# 0.7.5
======================
  * Add     アクセスログ出力
  * Add     SSLのWorker対応
  * Add     Http設定（serviceコンフィグオプション）でworker:0を指定できるようになりました。
  * Change  SSL設定で、ca指定が可能になりました。
  * Fixed   Workerで起動できなかった不具合を修正
  * Change  セッションを強制的にNX.data.FileStoreになるようになりました。(今後改善予定)
  * Add     NX.dispatcherの実装によりコマンドラインでアクションの実行が可能になりました。
  * Add     NX.app.controller.CLIクラスが実装されました。
  * Change  NX.server.AbstractServerがNX.server.Abstractに変更されました。
  * Change  NX.app.ActionがNX.app.action.Webに変更されました。
  * Change  NX.app.ModuleがNX.app.action.Moduleに変更されました。
  * Change  NX.app.ConfigがNX.app.config.Configに変更されました。
  * Change  NX.app.AbstractControllerがNX.app.controller.Abstractに変更されました。
  * Change  NX.app.WebControllerがNX.app.controller.Webに変更されました。


# 0.7.4
======================
  * Info    NX.smtp.*が実装されました。


# 0.7.3
======================

  * Fixed   NX.util.Templateにてliteralを利用するとエラーが発生するバグを修正
  * Change  Next Coreにコアパッケージを分離


# 0.7.2
======================

  * Change  デーモン起動プログラムnxdをnode-wafで各自コンパイルしたものを利用するように変更
  * Fixed   起動時にセッションファイルのクリアを行う処理時間を子プロセスで行うことで短縮
  * Change  ファイルセッションの権限を0777で生成されるように変更


# 0.7.1
======================

  * Info    examplesディレクトリを削除して、NXSamplesリポジトリに移動しました。
  * Change  NX.util.Tempalteの初期デリミタ変更。
            左デリミタ: '<!--{'
            右デリミタ: '}-->'
  * Change  [NX.util.Tempalte]
            HTMLコメントを強制的に削除していたが、削除しないようにしました。
  * Change  [NX.util.Tempalte]
            fetch処理の結果は、戻り値ではなくコールバックで取得するように変更
  * Fixed   [NX.util.Template]
            elseifが正常に動作しないバグを修正


# 0.7.0
======================

  * Info すべてを投げ捨てて、再構築完了


