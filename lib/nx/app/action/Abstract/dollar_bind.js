/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Abstract.$bind

module.exports = function(name, req, fn) {

    var uses = [];

    if(!NX.isFunction(fn)) {
        fn = NX.emptyFn;
    }

    if(NX.isArray(name)) {
        uses = name;
    } else {
        uses.push(name);
    }

    uses.forEach(function(item) {

        NX.Path.exists(item.path, function(exists) {

            if(!exists) {
                item.ready = true;
                return;
            }

            NX.Fs.stat(item.path, function(err, stat) {

                // モジュールキャッシュクリア
                NX.moduleCacheClear(item.path, stat.mtime);

                // モジュール生成
                item.define = NX.create('NX.app.module.Module', require(item.path));

                if(!NX.isString(item.define.useTable)) {

                    var TableName = NX.Path.basename(item.path);
                    TableName = TableName.substr(0, TableName.lastIndexOf('.'));
                    item.define.useTable = TableName;

                }

                // コネクション名設定
                item.define.setConnName(item.conn);

                // 初期化
                item.define.init(req, function() {

                    item.ready = true;
                    fn();

                });

            });

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
