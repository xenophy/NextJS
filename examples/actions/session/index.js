
module.exports = {

    execute : function() {

        this.session['mysessionkey'] = this.post.setvalue;
        console.log("[設定した値]");
        console.log(this.session);

        this.end();
    }

};

