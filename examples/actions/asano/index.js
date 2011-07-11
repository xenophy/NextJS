
module.exports = {

    uses:[
        'mod1',
        'mod_mysql'
    ],

    execute : function() {

        var me = this;

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': me.paths.exec + '/src/'
            }
        });

        var t = NX.create('My.Teston');


        this.mod1.teston(function(str) {

            me.mod_mysql.query('SELECT name FROM users WHERE id = 1', function(err, ret) {


                me.set('name', ret[0].name);
                me.set('hoge', t.getValue());

                me.set('asano', str);

                me.end();

            });

        });


    }

};

