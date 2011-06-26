
module.exports = {

    execute : function() {

        this.set('foo', 'bar');
        console.log("indexAction");

        this.end();
    }

};
