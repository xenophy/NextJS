/**
 * List of classes on front page.
 * Together with links to guides and icons legend.
 */
Ext.define('Docs.view.index.Container', {
    extend: 'Ext.container.Container',
    alias : 'widget.indexcontainer',
    cls: 'class-list',

    initComponent: function() {
        var data = this.classData;

        var tpl = new Ext.XTemplate(
            '<h1 class="pb">Next JS is Application Server on node</h1>',
            '<h2>SSJS時代のアプリケーションサーバー</h2>',
            '<p>',
                'Next JS は、node上でのサーバーサイドアプリケーション開発を加速させます。',
                'Ext JS / Sencha Touch の記法に慣れ親しんだユーザーが、クライアントコードを記述するように',
                'サーバーサイドプログラミングを行える機能を提供します。',
            '</p>',
            '<p>',
                'Webサーバーとしての基本的な機能、そしてMVCフレームワークとしてのクラス群の提供を行います。',
                'nodeを導入してみて、かなりシンプルで高速、そして無限の可能性を感じませんでしたか？',
                'しかし、同時に実際にアプリケーションを作成するには、Webサーバーとしての機能から自分で実装していく必要があることに気がついたでしょう。',
                'Next JSは、そういったプラットフォームを提供するとともに、Ext JS / Sencha Touchの最適なバックエンド（サーバーサイド）となるために開発が進められています。',
                'もちろん、HTMLベースの開発だってPHPでよく利用されるSmartyライクなテンプレートエンジンを備えているので問題ありません。',
            '</p>',
            '<p>',
                'Next JSを利用することでクライアントサイド、サーバーサイド、そしてデータベースアダプタとしてMongoDBのアダプタを実装しているので、',
                'データベース操作までもがJavaScriptだけで完結します。',
                '当然ながら、データベースをMySQLやPostgreSQLなどに切り替えた利用も行えます。',
                '思いついたアプリケーションを、手軽に実装できるアプリケーションサーバー＆フレームワークを目的として開発を進めています。',
            '</p>',

            '<h2>更新情報</h2>',
            '<ul>',
                '<li><em>2011.07.19</em>当サイト作成開始</li>',
                '<li><em>2011.07.19</em>v0.7.4 リリース</li>',
            '</ul>',

            '<h2>概要</h2>',
            '<p>',
                'ExtJSと初めてであった時とてもわくわくしたのを覚えていますか？',
                'そして ExtJS でアプリケーションを組み上げる時に、サーバーサイドでは別の言語を使わねばならないことにがっかりしたことを。',
                'ご安心ください。あのわくわくがサーバーサイドにもやって来ました。',
            '</p>',
            '<p>',
                'NextJS は、node上で動作するフレームワークですが、それ自身が Webサーバーでありアプリケーション サーバーでもあります。',
                'これからはサーバーサイドを書くのに、PHP や Java はいりません。驚くべきことに Apache すらいらないのです。',
                '(もちろん、開発用途により多言語を利用することがダメということではありません。)',
                'nodeと NextJS をインストールすれば、クライアントサイドと同じようにサーバーサイドでも JavaScript で書くことができます。',
                'しかも、Sencha Touch /ExtJS と同じ記法が使えます。',
            '</p>',

            '<h3>ExtJS / Sencha Touch との強い連携</h3>',
            '<p>',
                '小さなプロジェクトの場合だと、ひとりのプログラマがクライアントサイドだけでなくサーバーサイドのコーディングも引き受けるということはよくあります。',
                'さっきまでクライアントで JavaScript を書いていた人間は、ついついPHPの変数名の$を忘れてしまい不毛なエラーを発生させたりします。',
                'NextJS であればサーバーサイドも同じ言語ですからそんな心配はいりません。',
                'しかも ExtJS の設計思想を踏襲しているため、ExtJS の技術者であればなんの違和感もなくコーディングすることができます。',
                '特にExt JS 4から導入された新クラスシステムに、Next JS(正確にはNext Core)は完全に対応しています。',
                'Extというグローバルオブジェクトに作成される変数を<em>NX</em>に置き換えて考えるだけです。',
            '</p>',
            '<p>',
                'ExtJS と素晴らしい連携が取れることも特徴です。',
                'ExtJS の長所の一つである、ExtDirect によるサーバーサイドの呼び出しに完全に対応しています。',
                'サーバーサイドも JavaScript であるため、全く違和感なくデータの受け渡しができます。',
            '</p>',

            '<h3>MVCモデル</h3>',
            '<p>',
                'NextJS は、サーバーサイドで MVC(Model-View-Controller)を実現しています。',
                'Module はデータベースのテーブルと結びつき、他のテーブルとアソシエーションを結ぶこともできます。',
                'Contoroller は、セッションを管理したり複数の Module を扱うことができます。',
                'そして Contoroller の Action メソッド一つ一つがあなたのサイトの１ページになります。',
                'View では、Smarty ライクな書式でテンプレートを作成することができます。',
                'ExtDirect と連携する ExtDirect アクションでは，MVC のMの部分をサーバーサイドに置き、',
                '他はすべてクライアントサイドで解決するというシングル ページ アプリケーション の王道をゆく構成をとることができます。',
                'ExtDirect コントローラーを使えば、Module の public メソッドが、そのまま ExtDirect からコールできるようになります。',
                'そして、現在のところ本家 Sencha でもサポートされていない、Sencha Touch からの Direct アクセスに関してもサポートする予定です。',
            '</p>',

            '<h3>次世代へ</h3>',
            '<p>',
                'HTML5 の中でも注目されている WebSocet も NextJS で使えます。',
                'WebSocet を使えば，真の双方向通信が可能になります。サーバー側の状態変化を知るために、',
                'まだですかまだですかと何度もHTTPリクエストを送る必要はありません。',
            '</p>',
            '<p>',
                'ごく普通のWebサーバーとしての機能から、Ext.Direct，WebSocet にいたるまで、',
                '多くの通信方法でクライアントと通信できます。',
                'このことは多くのユーザーが訪れる、一般的なサイトから、',
                '深く業務に根ざした複雑な Webアプリケーションまで幅広く構築できることを意味します。',
            '</p>',

            '<h2>クイックスタート</h2>',
            '<p>',
                'インストールは、npmから行ってください。',
                'nodeやnpmのインストールが完了していない方は、Next JS 環境構築ガイド を参照してください。',
            '</p>',
            '<code>',
                'npm install nx',
            '</code>',
            '<p>',
                '現在提供されている最新版が依存するパッケージとともに配置されます。',
            '</p>',

            '<h2>ライセンス</h2>',
            '<p>',
                'Next JSはMIT ライセンスで提供されているため、気軽に利用することができます。',
                'また、GitHubでオープンソースプロジェクトとして開発されています。',
                '開発に興味を持った方は、我々と一緒に開発を行ってみませんか？',
                'まだまだ、開発環境や手順は未熟ですが、様々な開発者とともに作り上げていくことができたら、私たちはうれしく思います。',
            '</p>',

            {}
        );


        var html = this.html = tpl.apply(Ext.apply({
        }, data));

        this.callParent(arguments);
    }
});