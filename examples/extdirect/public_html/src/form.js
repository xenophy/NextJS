
Ext.onReady(function() {

    Ext.app.REMOTING_API.enableBuffer = 100;
    Ext.Direct.addProvider(Ext.app.REMOTING_API);

    var form = new Ext.form.FormPanel({

        // API設定
        api: {
            load: users.readForm,
            submit: users.writeForm
        },

        // パラメータ順
        paramOrder: ['id'],

        // アイテム設定
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'Name',
            name: 'name'
        }],

        // ボタン設定
        buttons: [{
            text: 'id:0のユーザ情報取得',
            handler : function() {
                form.getForm().load({
                    params: {
                        id: 0
                    }
                });
            }
        },{
            text: 'id:1のユーザ情報取得',
            handler : function() {
                form.getForm().load({
                    params: {
                        id: 1
                    }
                });
            }
        },{
            text: 'id:2のユーザ情報取得',
            handler : function() {
                form.getForm().load({
                    params: {
                        id: 2
                    }
                });
            }
        },{
            text: '現在入力されている名前をサーバーへ送信してみる：実際DBには保存していません。',
            handler : function() {
                form.getForm().submit({
                    success: function(form, action) {
                        Ext.Msg.alert('Success', action.result.msg);
                    }
                });

            }
        }],

        title: 'Direct Form',
        height: 350,
        width: 800,
        renderTo: Ext.getBody()
    });



    /*

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

