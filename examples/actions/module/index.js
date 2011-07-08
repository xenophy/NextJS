
module.exports = {

    uses: [
        'mod1',
        'mod2'
    ],

    execute : function() {

        this.set('foo', this.mod1.foo());
        this.set('bar', this.mod2.bar());
        this.end();

    }

};

