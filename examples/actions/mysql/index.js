
module.exports = {

    uses: [{
        name: 'mod_mysql',
        conn: 'default'
    }],

    execute : function() {

        var me = this;

        me.mod_mysql.query('SELECT * FROM users' ,function(err, results, fields) {

            me.set('users', results);

            me.end();
        });

    }

};

