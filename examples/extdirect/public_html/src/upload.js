
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

        // ファイルアップロード設定
        fileUpload: true,

        // アイテム設定
        items: [{
            xtype: 'fileuploadfield',
            anchor: '100%',
            emptyText: '画像を選択してください。',
            fieldLabel: '写真',
            name: 'photo',
            buttonText: '参照...',
        }],

        // ボタン設定
        buttons: [{
            text: 'アップロード',
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

});

