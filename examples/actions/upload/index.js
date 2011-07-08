
module.exports = {

    execute : function() {

        var me = this;
        var upfile = me.req.files.upfile;
        var dir = me.paths.public + '/upload/data/';

        NX.Fs.rename(
            upfile.path,
            dir + upfile.name,
            function (err) {

                if(err) {
                    throw err;
                }

                console.log(upfile.name);
                me.set('upfilename', upfile.name);
                me.end();
            }
        );

    }

};

