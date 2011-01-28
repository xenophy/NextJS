
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
                        console.log(action);
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

});

