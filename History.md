# 0.6.2 / (開発中)
======================



# 0.6.1 / (2011/02/15)
======================

  * Fixed 例外発生時、スタックが存在しない例外もきちんと表示されるように修正
  * Fixed DBを利用しないモジュールでスタックオーバーフローが発生していたのを修正
  * Changed "module"サンプルのuseTable変更に伴う修正
  * Fixed アクション終了時に、モジュールが接続しているDBを自動的に切断するように修正（MongoDB変更に伴う対応）
  * Fixed モジュールの準備ハンドラによるメモリリーク解消
  * Changed サーバー起動型のテストケースをassert.responseに切り替え
  * Added NX.Module.createCollection追加
  * Added NX.Module.collectionName追加
  * Added NX.Module.dropCollection追加
  * Added NX.Module.dropDatabase追加
  * Added NX.Module.listDatabase追加
  * Added NX.Module.renameCollection追加

