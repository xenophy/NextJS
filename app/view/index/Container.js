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

        this.html = tpl.apply(Ext.apply({
            // Use the same title as in <title>
            title: document.getElementsByTagName("title")[0].innerHTML
        }, data));

        this.callParent(arguments);
    }
});
