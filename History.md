# 0.7.6
======================
  * [WORK]  ベーシック認証を行うための、this.auth.user / this.auth.pw 変数を実装
  * [WORK]  ベーシック認証キャンセル時に、401 Unauthorizedを返却するようになりました。
  * [WORK]  ベーシック認証失敗時に、403 Forbiddenを返却するようになりました。
  * [WORK]  ExtDirect APIの出力とインタフェースになるNX.app.action.Direct(NX.DirectAction)を実装しました。

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


