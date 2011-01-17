
Ext.onReady(function() {

    var me = this;

    var store = new Ext.data.ArrayStore({
        fields: ['name', 'comment']
    });

    var tpl = new Ext.XTemplate(
        '<tpl for=".">',
        '    <div class="msg">{name} : {comment}</div>',
        '</tpl>'
    );


    Ext.Msg.prompt('ログイン', 'ハンドル名を入力してください。', function(btn, text) {

        me.socket = new Ext.ux.util.SocketIO(null, {port: 3000, rememberTransport: false});
        me.socket.on('connect', function() {

            me.socket.send(text);

            var rt = Ext.data.Record.create([{
                name: 'SYSTEM', comment: text + 'さん、こんにちは。'}
            ]);

            var defaultData = {
                name: 'SYSTEM',
                comment: text + 'さん、こんにちは。'
            };
            var recId = 100;
            var r = new store.recordType(defaultData, ++recId);
            store.insert(0, r);

            new Ext.Viewport({
                layout: 'border',
                items: [{
                    region: 'center',
                    title: 'メッセージ一覧',
                    items:[{
                        xtype: 'dataview',
                        store: store,
                        tpl: tpl,
                        autoHeight:true
                    }]
                },{
                    title: 'コメント入力',
                    height: 150,
                    region: 'south',
                    layout: 'fit',
                    items: [{
                        xtype: 'textarea'
                    }],
                    buttons: [{
                        text: '送信'
                    }]
                }],
                renderTo: Ext.getBody()
            });

        });

        me.socket.on('message', function(obj) {
            console.log(obj);
        });

        me.socket.connect();
    });

});

