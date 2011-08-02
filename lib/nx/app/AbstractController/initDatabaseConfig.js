/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.AbstractController.initDatabaseConfig

module.exports = function(req, res, next) {

    var me = this,
        paths = me.paths;
        path = paths.configs + '/database.js';

    NX.Path.exists(path, function(exists) {

        if(exists === false) {
            next();
            return;
        }

        NX.Fs.stat(path, function(err, stat) {

            // モジュールキャッシュクリア
            NX.moduleCacheClear(path, stat.mtime);

            req.dbconf = NX.create('NX.Config', require(path));

            next();
        });

    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
