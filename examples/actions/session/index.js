
module.exports = {

    execute : function() {

        this.session['mysessionkey'] = this.post.setvalue;

        this.end();
    }

};

