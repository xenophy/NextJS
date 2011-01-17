
Ext.onReady(function() {

    var me = this;

    me.socket = new Ext.ux.util.SocketIO(null, {port: 3000, rememberTransport: false});

    me.socket.connect();


    /*
    var vp = new Ext.Viewport({




    });
    */


});

