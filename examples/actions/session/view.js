
module.exports = {

    execute : function() {

        console.log(this.session);
        this.set('mysessionkey', this.session['mysessionkey']);
        this.end();
    }

};

