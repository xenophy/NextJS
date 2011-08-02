/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.loadFile

module.exports = function(file, callback) {

    (function(file, me, callback) {

        callback = callback || NX.emptyFn;

        // テンプレートファイル確認
        NX.Path.exists(file, function(exists) {

            if(!exists) {

                var paths = me.paths;
                var nxrd = "(-_-)v";
                var tmp = file.substr(paths.public.length + 1, nxrd.length);

                if(process.NXEnv.libdir.indexOf(nxrd) === -1 && tmp === nxrd) {

                    var tmp = file.substr(paths.public.length + 1 + nxrd.length);

                    file = NX.Path.normalize(process.NXEnv.libdir + '/resources/' + tmp);

                    me.loadFile(file, callback);

                } else {

                    callback({type: 'not found'});

                }

                return;
            }

            NX.Fs.stat(file, function(err, stat) {

                if(err) {
//#JSCOVERAGE_IF 0
                    callback({type: 'not found'});
                    return;
//#JSCOVERAGE_ENDIF
                }

                NX.Fs.readFile(file, function(err, data) {

                    if(err) {
//#JSCOVERAGE_IF 0
                        callback({type: 'not found'});
                        return;
//#JSCOVERAGE_ENDIF
                    }

                    var ext = NX.Path.extname(file).substr(1);

                    callback(null, data, stat, ext);

                });

            });

        });

    })(file, this, callback);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
