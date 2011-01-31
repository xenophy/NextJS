
Ext.onReady(function() {

    Ext.Direct.addProvider(Ext.app.REMOTING_API);

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

});

