

module.exports = {

    execute : function() {

        this.set('nickname', this.post.nickname_post);

        this.end();
    }

};

