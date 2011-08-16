# 0.7.5
======================
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


