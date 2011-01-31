
Ext.onReady(function() {

    Ext.Direct.addProvider(Ext.app.REMOTING_API);

    var tree = new Ext.tree.TreePanel({

        // ローダー設定
        loader: new Ext.tree.TreeLoader({
            directFn: users.getNode
        }),

        // ルートノード設定
        root: {
            nodeType: 'async',
            expanded: true,
            text: 'Next JS',
            draggable: false,
            id: 'root'
        },

        title: 'Direct Tree',
        height: 350,
        width: 300,
        renderTo: Ext.getBody()
    });

});

