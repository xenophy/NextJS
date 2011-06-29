
module.exports = {

    execute : function() {

        this.set('mysessionkey', this.session['mysessionkey']);
        this.end();
    }

};

