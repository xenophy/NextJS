
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

            me.user = text;
            me.recId = 100;

            me.socket.send(text);
            /*
            var defaultData = {
                name: 'SYSTEM',
                comment: text + 'さん、こんにちは。'
            };
            var recId = 100;
            var r = new store.recordType(defaultData, ++recId);
            store.insert(0, r);
            */

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
                    region: 'south',
                    xtype: 'compositefield',
                    fieldLabel: 'コメント',
                    items: [{
                        xtype: 'textfield',
                        id: 'comment',
                        enableKeyEvents: true,
                        listeners: {
                            keyup : function(field, e) {

                                if(e.getKey() === 13) {
                                    var cmp = Ext.getCmp('comment');
                                    var text = cmp.getValue();

                                    if(text !== '') {

                                        me.socket.send(text);

                                        cmp.setValue('');
                                        cmp.focus();

                                        var defaultData = {
                                            name: me.user,
                                            comment: text
                                        };
                                        var r = new store.recordType(defaultData, ++me.recId);
                                        store.insert(0, r);
                                    }
                                }
                            }
                        },
                        flex : 1
                    },{
                        xtype: 'button',
                        text: '送信',
                        width: 100,
                        handler: function() {

                            var cmp = Ext.getCmp('comment');
                            var text = cmp.getValue();

                            if(text !== '') {
                                me.socket.send(text);

                                cmp.setValue('');
                                cmp.focus();

                                var defaultData = {
                                    name: me.user,
                                    comment: text
                                };
                                var r = new store.recordType(defaultData, ++me.recId);
                                store.insert(0, r);
                            }

                        }
                    }]
                }],
                renderTo: Ext.getBody()
            });

        });

        me.socket.on('message', function(obj) {

            if(!obj.message) {
                return;
            }

            var msg = obj.message[1];
            var user = obj.message[2];

            var defaultData = {
                name: user,
                comment: msg
            };
            var r = new store.recordType(defaultData, ++me.recId);
            store.insert(0, r);

        });

        me.socket.connect();
    });

});

