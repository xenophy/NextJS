
Ext.onReady(function() {

    Ext.Direct.addProvider(Ext.app.REMOTING_API);

    users.getList(function() {
    
        console.log("dsadsa");
    });

});

