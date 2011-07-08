
module.exports = {

    execute : function() {

        this.set('nickname', this.cookie.param1);

        this.setCookie('param1', 'kotsutsumi', {
            expires: '2020/05/16'
        });

        this.end();
    }

};

