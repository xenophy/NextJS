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
                'Next JSを利用することでクライアントサイド、サーバーサイド、そして標準データベースとしてMongoDBのアダプタを実装しているので、データベース操作までもがJavaScriptだけで完結します。 当然ながら、データベースをMySQLやPostgreSQLなど（標準アダプターとしての実装は予定されています）に切り替えた利用も行えます。 思いついたアプリケーションを、手軽に実装できるアプリケーションサーバー＆フレームワークを目的として開発を進めています。',
            '</p>',

            /*
            '<div class="legend icons">',
                '<h4>アイコン凡例</h4>',
                '<ul>',
                  '<li class="icn icon-pkg">パッケージ</li>',
                  '<li class="icn icon-class">クラス</li>',
                  '<li class="icn icon-singleton">シングルトン</li>',
                  '<li class="icn icon-component">コンポーネント</li>',
                  '<li class="icn icon-book">ガイド</li>',
                '</ul>',
              '</div>',
              '<div class="legend guides">',
                '<h1>ガイド</h1>',
                '<div class="lft">',
                  '<a class="guide getting_started" rel="getting_started" href="guides/getting_started/index.html">さあ、はじめよう</a>',
                  '<a class="guide class_system" rel="class_system" href="guides/class_system/index.html">クラスシステム</a>',
                  '<a class="guide application_architecture" rel="application_architecture" href="guides/application_architecture/index.html">MVCアーキテクチャー</a>',
                  '<a class="guide layouts_and_containers" rel="layouts_and_containers" href="guides/layouts_and_containers/index.html">レイアウトとコンテナー</a>',
                '</div>',
                '<div class="mid">',
                  '<a class="guide data" rel="data" href="guides/data/index.html">データ</a>',
                  '<a class="guide grid" rel="grid" href="guides/grid/index.html">グリッド</a>',
                  '<a class="guide tree" rel="tree" href="guides/tree/index.html">ツリー</a>',
                  '<a class="guide drawing_and_charting" rel="drawing_and_charting" href="guides/drawing_and_charting/index.html">チャート</a>',
                '</div>',
                '<div class="right">',
                  '<a class="guide components" rel="components" href="guides/components/index.html">コンポーネント</a>',
                  '<a class="guide theming" rel="theming" href="guides/theming/index.html">テーマ</a>',
                  '<a class="guide direct" rel="direct" href="guides/direct/index.html">Ext.Direct</a>',
                  '<a class="guide accessibility" rel="accessibility" href="guides/accessibility/index.html">アクセシビリティ</a>',
                '</div>',
                '<div class="egLink"><a href="http://dev.sencha.com/deploy/ext-4.0.2/examples/index.html">Ext 4.0.2 のサンプルを見る &rarr;</a></div>',
              '</div>',
            '</div>',
            '<tpl for="organisation">',
                '<div class="category">',
                    '<h1>{name}</h1>',
                    '<tpl for="categories">',
                        '<div class="{align}">',
                        '<tpl for="items">',
                            '<h3>{.}</h3>',
                            '<div class="links">',
                                '{[this.renderClasses(values)]}',
                            '</div>',
                        '</tpl>',
                        '</div>',
                    '</tpl>',
                    '<div style="clear:both"></div>',
                '</div>',
            '</tpl>',
            */
            {
                renderClasses: function(category) {
                    return Ext.Array.map(data.categories[category].classes, function(cls) {
                        return Ext.String.format('<a href="#/api/{0}" rel="{0}" class="docClass">{0}</a>', cls);
                    }).join("\n");
                }
            }
        );

        this.html = tpl.apply(Ext.apply({
            // Use the same title as in <title>
            title: document.getElementsByTagName("title")[0].innerHTML
        }, data));

        this.callParent(arguments);
    }
});
