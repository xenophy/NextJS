
module.exports = {

    uses: [
        'mod1'
    ],

    execute : function() {

        this.set('foo', this.mod1.foo());
        this.end();

    }

};

