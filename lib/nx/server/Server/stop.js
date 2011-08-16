/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.stop

module.exports = function(config) {

    var me = this,
        fs = NX.Fs,
        path = NX.Path,
        lock = config.lockFile;

        /*
    // ワーカーロックファイルからpidを取得してプロセスを終了
    var files = fs.readdirSync(path.dirname(lock));
    var ln = files.length;

    for(var i = 0; i < ln; i++) {

        var filename = path.basename(lock) + '.worker' + i;

        if(NX.Array.contains(files, filename)) {

            var filepath = path.dirname(lock) + '/' + filename;
            var pid = parseInt(fs.readFileSync(filepath).toString());
            process.kill(pid);

            fs.unlinkSync(filepath);
        }
    }
    */

    NX.daemon.Daemon.kill(lock, function(err, pid) {

        if(err) {
            console.log(err.message);
            return;
        }

        console.log('Successfully stopped daemon with pid: ' + pid);

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
