
Ext.onReady(function() {

    Ext.Direct.addProvider(Ext.app.REMOTING_API);

    // ストア生成
    var store = new Ext.data.DirectStore({

        // Ext.Direct関数設定
        directFn: users.getGridList,

        // レストフル設定
        restful: true,

        // 自動読み込み設定
        autoLoad: true,

        // パラメータ順設定
        paramOrder: 'start|limit|sort|dir|query',

        // リモートソート設定
        remoteSort: true,

        // パラメータハッシュ設定
        paramsAsHash: false,

        // IDプロパティ設定
        idProperty: 'id',

        // ルート設定
        root: 'users',

        // ベースパラメーター設定
        baseParams: {

            // 開始
            start: 0,

            // リミット
            limit: 50,

            // ソート
            sort: 'modified',

            // 並び順
            dir: 'DESC',

            // クエリー設定
            query: ''

        },

        // フィールド設定
        fields: [{
            name: 'name'
        }]
    });

    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [{
            id       :'company',
            header   : 'ユーザ名',
            sortable : true,
            dataIndex: 'name'
        }],
        stripeRows: true,
        height: 350,
        width: 600,
        title: 'Direct Grid',
        stateful: true,
        stateId: 'grid',
        renderTo: Ext.getBody()
    });

});

