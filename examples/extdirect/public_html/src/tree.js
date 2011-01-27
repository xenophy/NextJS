
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



    /*

    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [{
            id       :'company',
            header   : 'ユーザ名',
            sortable : true,
            dataIndex: 'name'
        }],
        stripeRows: true,
        title: 'Direct Grid',
        stateful: true,
        stateId: 'grid',
        renderTo: Ext.getBody()
    });







    /*
    users.getList(function(ret) {

        var lis = [];

        Ext.each(ret, function(r) {
            lis.push({
                tag: 'li',
                html: r.name
            });
        });

        Ext.DomHelper.append(Ext.getBody(), {
            tag: 'ul',
            cn: lis
        });

    });
    */

});

