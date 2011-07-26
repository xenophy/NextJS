
module.exports = {

    execute: function() {

        var ret = this.cookie.param1;

        this.set('person', ret);

        this.setCookie('param1', 'kotsutsumi', {
            path: '/',
            domain: '127.0.0.1',
            secure: true,
            httpOnly: true,
            expires: '2011/05/16'
        });

        this.end();

    }

};
