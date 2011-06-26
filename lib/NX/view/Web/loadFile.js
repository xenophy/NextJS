/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.loadFile

module.exports = function(file, callback) {

    (function(file, callback) {

        callback = callback || NX.emptyFn;

        // テンプレートファイル確認
        NX.Path.exists(file, function(exists) {

            if(!exists) {
                callback({type: 'not found'});
                return;
            }

            NX.Fs.stat(file, function(err, stat) {

                if(err) {
                    callback({type: 'not found'});
                    return;
                }


                NX.Fs.readFile(file, function(err, data) {

                    if(err) {
                        callback({type: 'not found'});
                        return;
                    }

                    var ext = NX.Path.extname(file).substr(1);

                    callback(null, data, stat, ext);

                });

            });

        });

    })(file, callback);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
