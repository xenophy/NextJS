/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var fs = require('fs');
var util = require('util');

// }}}
// {{{ NX.util.FileSystem

/**
 * @class NX.util.FileSystem
 */
NX.util.FileSystem = NX.apply(Object, {

    // {{{ rename

    /**
     * @method rename
     */
    rename : function(path1, path2, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.rename(path1, path2, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.rename(path1, path2, function(err) {

            if(NX.isNull(err)) {
                deferred.call();
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ renameSync

    /**
     * @method renameSync
     */
    renameSync : fs.renameSync,

    // }}}
    // {{{ truncate

    /**
     * @method truncate
     */
    truncate : function(fd, len, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.truncate(fd, len, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.truncate(fd, len, function(e) {

            if(NX.isNull(e)) {
                deferred.call();
            } else {
                deferred.fail(e);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ truncateSync

    /**
     * @method truncateSync
     */
    truncateSync : fs.trancateSync,

    // }}}
    // {{{ chmod

    /**
     * @method chmod
     */
    chmod : function(path, mode, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {

            fs.chmod(path, mode, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.chmod(path, mode, function(err) {

            if(NX.isNull(err)) {
                deferred.call();
            } else {
                deferred.fail(err);
            }
        });

        return deferred;
    },

    // }}}
    // {{{ chmodSync

    /**
     * @method chmodSync
     */
    chmodSync : fs.chmodSync,

    // }}}
    // {{{ stat

    /**
     * @method stat
     */
    stat : function(path, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.stat(path, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.stat(path, function(err, stat) {

            if(NX.isNull(err)) {
                deferred.call(stat);
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ statSync

    /**
     * @method statSync
     */
    statSync : fs.statSync,

    // }}}
    // {{{ lstat

    /**
     * @method lstat
     */
    lstat : function(path, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.lstat(path, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.lstat(path, function(err, stat) {

            if(NX.isNull(err)) {
                deferred.call(stat);
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ lstatSync

    /**
     * @method lstatSync
     */
    lstatSync : fs.lstatSync,

    // }}}
    // {{{ fstat

    /**
     * @method fstat
     */
    fstat : function(fd, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.fstat(fd, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.fstat(fd, function(err, stat) {

            if(NX.isNull(err)) {
                deferred.call(stat);
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ fstatSync

    /**
     * @method fstatSync
     */
    fstatSync : fs.fstatSync,

    // }}}
    // {{{ link

    /**
     * @method link
     */
    link : function(srcpath, dstpath, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.link(srcpath, dstpath, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.link(srcpath, dstpath, function(err) {

            if(NX.isNull(err)) {
                deferred.call();
            } else {
                deferred.fail(err);
            }

        });

        return deferred;

    },

    // }}}
    // {{{ linkSync

    /**
     * @method linkSync
     */
    linkSync : fs.linkSync,

    // }}}
    // {{{ symlink

    /**
     * @method symlink
     */
    symlink : function(linkdata, path, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.symlink(linkdata, path, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.symlink(linkdata, path, function(err) {

//            if(NX.isNull(err)) {
                deferred.call();
//            } else {
//                deferred.fail(err);
//            }

        });

        return deferred;

    },

    // }}}
    // {{{ symlinkSync

    /**
     * @method symlinkSync
     */
    symlinkSync : fs.symlinkSync,

    // }}}
    // {{{ readlink

    /**
     * @method readlink
     */
    readlink : function(path, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.readlink(path, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.readlink(path, function(err, resolvedPath) {

//            if(NX.isNull(err)) {
                deferred.call(resolvedPath);
//            } else {
//                deferred.fail(err);
//            }

        });

        return deferred;
    },

    // }}}
    // {{{ readlinkSync

    /**
     * @method readlinkSync
     */
    readlinkSync : fs.readlinkSync,

    // }}}
    // {{{ realpath

    /**
     * @method realpath
     */
    realpath : function(path, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.realpath(path, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.realpath(path, function(err, resolvedPath) {

//            if(NX.isNull(err)) {
                deferred.call(resolvedPath);
//            } else {
//                deferred.fail(err);
//            }

        });

        return deferred;
    },

    // }}}
    // {{{ realpathSync

    /**
     * @method realpathSync
     */
    realpathSync : fs.realpathSync,

    // }}}
    // {{{ unlink

    /**
     * @method unlink
     */
    unlink : function(path, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.unlink(path, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.unlink(path, function(err) {

            if(NX.isNull(err)) {
                deferred.call();
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ unlinkSync

    /**
     * @method unlinkSync
     */
    unlinkSync : fs.unlinkSync,

    // }}}
    // {{{ rmdir

    /**
     * @method rmdir
     */
    rmdir : function(path, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.rmdir(path, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.rmdir(path, function(err) {

            if(NX.isNull(err)) {
                deferred.call();
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ rmdirSync

    /**
     * @method rmdirSync
     */
    rmdirSync : fs.rmdirSync,

    // }}}
    // {{{ mkdir

    /**
     * @method mkdir
     */
    mkdir : function(path, mode, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.mkdir(path, mode, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.mkdir(path, mode, function(e) {

            if(NX.isNull(e)) {
                deferred.call();
            } else {
                deferred.fail(e);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ mkdirSync

    /**
     * @method mkdirSync
     */
    mkdirSync : fs.mkdirSync,

    // }}}
    // {{{ readdir

    /**
     * @method readdir
     */
    readdir : function(path, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.readdir(path, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.readdir(path, function(err, files) {

            if(NX.isNull(err)) {
                deferred.call(files);
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ readdirSync

    /**
     * @method readdirSync
     */
    readdirSync : fs.readdirSync,

    // }}}
    // {{{ close

    /**
     * @method close
     */
    close : function(fd, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.close(fd, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.close(fd, function(err) {

            if(NX.isNull(err)) {
                deferred.call();
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ closeSync

    /**
     * @method closeSync
     */
    closeSync : fs.closeSync,

    // }}}
    // {{{ open

    /**
     * @method open
     */
    open : function(path, flag, mode, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.open(path, flag, mode, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.open(path, flag, mode, function(e, fd) {

            if(NX.isNull(e)) {
                deferred.call(fd);
            } else {
                deferred.fail(e);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ openSync

    /**
     * @method openSync
     */
    openSync : fs.openSync,

    // }}}
    // {{{ write

    /**
     * @method write
     */
    write : function(fd, buffer, offset, length, position, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.write(fd, buffer, offset, length, position, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.write(fd, buffer, offset, length, position, function(err, written) {

            if(NX.isNull(err)) {
                deferred.call(written);
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ writeSync

    /**
     * @method writeSync
     */
    writeSync : fs.writeSync,

    // }}}
    // {{{ read

    /**
     * @method read
     */
    read : function(fd, buffer, offset, length, position, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.read(fd, buffer, offset, length, position, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.read(fd, buffer, offset, length, position, function(err, bytesRead) {

            if(NX.isNull(err)) {
                deferred.call(bytesRead);
            } else {
                deferred.fail(err);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ readSync

    /**
     * @method readSync
     */
    readSync : fs.readSync,

    // }}}
    // {{{ readFile

    /**
     * @method readFile
     */
    readFile : function(filename, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.readFile(filename, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.readFile(filename, function(e, data) {

            if(NX.isNull(e)) {
                deferred.call(data);
            } else {
                deferred.fail(e);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ readFileSync

    /**
     * @method readFileSync
     */
    readFileSync : fs.readFileSync,

    // }}}
    // {{{ writeFile

    /**
     * @method writeFile
     */
    writeFile : function(filename, data, encoding, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.writeFile(filename, data, encoding, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.writeFile(filename, data, encoding, function(e) {

            if(NX.isNull(e)) {
                deferred.call();
            } else {
                deferred.fail(e);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ watchFile

    /**
     * @method watchFile
     */
    watchFile : function(filename, options, listener) {

        if(NX.isDefined(listener) && NX.isFunction(listener) && !NX.isFunction(options)) {
            fs.watchFile(filename, options, listener, callback);
            return;
        } else if(NX.isDefined(options) && NX.isFunction(options)) {
            fs.watchFile(filename, listener, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        if(NX.isDefined(options)) {

            fs.watchFile(filename, options, function(e) {

                if(NX.isNull(e)) {
                    deferred.call();
                } else {
                    deferred.fail(e);
                }

            });

        } else {

            fs.watchFile(filename, function(e) {

                if(NX.isNull(e)) {
                    deferred.call();
                } else {
                    deferred.fail(e);
                }

            });

        }

        return deferred;
    },

    // }}}
    // {{{ unwatchFile

    /**
     * @method unwatchFile
     */
    unwatchFile : function(filename, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {
            fs.unwatchFile(filename, callback);
            return;
        }

        var deferred = new NX.util.Deferred();

        fs.unwatchFile(filename, function(e) {

            if(NX.isNull(e)) {
                deferred.call();
            } else {
                deferred.fail(e);
            }

        });

        return deferred;
    },

    // }}}
    // {{{ writeFileSync

    /**
     * @method writeFileSync
     */
    writeFileSync : fs.writeFileSync,

    // }}}
    // {{{ createReadStream

    /**
     * @method createReadStream
     */
    createReadStream : fs.createReadStream,

    // }}}
    // {{{ createWriteStream

    /**
     * @method createWriteStream
     */
    createWriteStream : fs.createWriteStream,

    // }}}
    // {{{ basename

    /**
     * @method basename
     */
    basename : require('path').basename,

    // }}}
    // {{{ dirname

    /**
     * @method dirname
     */
    dirname : require('path').dirname,

    // }}}
    // {{{ extname

    /**
     * @method extname
     */
    extname : require('path').extname,

    // }}}
    // {{{ exists

    /**
     * @method exists
     */
    exists : function(path, callback) {

        if(NX.isDefined(callback) && NX.isFunction(callback)) {

            require('path').exists(path, callback);

            return;
        }

        var deferred = new NX.util.Deferred();

        require('path').exists(path, function(exists) {
            deferred.call(exists);
        });

        return deferred;

    },

    // }}}
    // {{{ existsSync

    /**
     * @method existsSync
     */
    existsSync : function(path) {

        var me = NX.util.FileSystem;

        try {
            me.statSync(path);
        } catch(e) {
            return false;
        }

        return true;
    },

    // }}}
    // {{{ isReadable

    /**
     * @method isReadable
     */
    isReadable : function(path, callback) {

        var me = NX.util.FileSystem,
            scope = this;

        var deferred = new NX.util.Deferred();

        me.exists(path, function(ret) {

            if(NX.isDefined(callback) && NX.isFunction(callback)) {
                if(!ret) {
                    callback.call(scope, false);
                } else {
                    fs.open(path, 'r', function(e, fd) {
                        if(NX.isNull(e)) {
                            fs.close(fd, function() {
                                callback.call(scope, true);
                            });
                        } else {
                            callback.call(scope, false);
                        }
                    });
                }
            } else {
                if(!ret) {
                    deferred.call(false);
                } else {
                    fs.open(path, 'r', function(e, fd) {
                        if(NX.isNull(e)) {
                            fs.close(fd, function() {
                                deferred.call(true);
                            });
                        } else {
                            deferred.call(false);
                        }
                    });
                }
            }
        });

        if(!NX.isDefined(callback) || !NX.isFunction(callback)) {
            return deferred;
        }

    },

    // }}}
    // {{{ isReadableSync

    /**
     * @method isReadableSync
     */
    isReadableSync : function(path) {

        var me = NX.util.FileSystem;

        if(!me.existsSync(path)) {
            return false;
        }

        try {
            var fp = me.openSync(path, 'r');
            me.closeSync(fp);
        } catch(e) {
            return false;
        }

        return true;
    },

    // }}}
    // {{{ isWritable

    /**
     * @method isWritable
     */
    isWritable : function(path, callback) {

        var me = NX.util.FileSystem,
            scope = this;

        var deferred = new NX.util.Deferred();

        me.exists(path, function(ret) {

            if(NX.isDefined(callback) && NX.isFunction(callback)) {
                if(!ret) {
                    callback.call(scope, false);
                } else {
                    me.open(path, 'w', function(e, fd) {
                        if(NX.isNull(e)) {
                            me.close(fd, function() {
                                callback.call(scope, true);
                            });
                        } else {
                            callback.call(scope, false);
                        }
                    });
                }
            } else {
                if(!ret) {
                    deferred.call(false);
                } else {
                     me.open(path, 'w', function(e, fd) {
                        if(NX.isNull(e)) {
                            me.close(fd, function() {
                                deferred.call(true);
                            });
                        } else {
                            deferred.call(false);
                        }
                    });
                }
            }
        });

        if(!NX.isDefined(callback) || !NX.isFunction(callback)) {
            return deferred;
        }
    },

    // }}}
    // {{{ isWritableSync

    /**
     * @method isWritableSync
     */
    isWritableSync : function(path) {

        var me = NX.util.FileSystem;

        if(!me.existsSync(path)) {
            return false;
        }

        try {
            var fp = me.openSync(path, 'w');
            me.closeSync(fp);
        } catch(e) {
            return false;
        }

        return true;
    },

    // }}}
    // {{{ touch

    /**
     * @method touch
     */
    touch : function(path, time, atime, callback) {

        var callback;
        var cmd = ['touch ' + path];

        if(NX.isDefined(time) && NX.isFunction(time)) {
            callback = time;
        } else if(NX.isDefined(time) && NX.isDefined(atime) && NX.isFunction(atime)) {
            callback = atime;
            cmd.push('-t ' + time);
        } else if(NX.isDefined(time) && NX.isDefined(atime) && NX.isDefined(callback) && NX.isFunction(callback)) {
            cmd.push('-t ' + time);
            cmd.push('-a ' + atime);
            callback = callback;
        } else {
            callback = false;
        }

        cmd = NX.implode(' ', cmd);

        var exec = require('child_process').exec,
            child;

        if(callback !== false) {
            child = exec(cmd, callback);
        } else {

            var deferred = new NX.util.Deferred();
            child = exec(cmd, function(error, stdout, stderr) {

                if(!NX.isNull(error)) {
                    deferred.fail(error);
                } else {
                    deferred.call();
                }

            });

            return deferred;
        }

    },

    // }}}
    // {{{ touchSync

    /**
     * @method touchSync
     */
    /*
    touchSync : function(path, time, atime) {

        var cmd = ['touch ' + path];

        if(NX.isDefined(time)) {
            cmd.push('-t ' + time);
        } else if(NX.isDefined(time) && NX.isDefined(atime)) {
            cmd.push('-t ' + time);
            cmd.push('-a ' + atime);
        }

        cmd = NX.implode(' ', cmd);

        var exec = require('child_process').exec,
            child;

        var loop = true;

        child = exec(cmd, function(error, stdout, stderr) {
            loop = false;
        });

        while(loop) {

            // JSだけで同期化できないので、ペンディング

        }

    },

    */

    // }}}
    // {{{ iterate

    /**
     * @method iterate
     */
    iterate : function(path, callback, scope) {

        scope = scope || this;
        callback = callback || NX.emptyFn;

        var status = function(pi , s) {

            this.isDir = function() {
                return s.isDirectory();
            };

            this.isFile = function() {
                return s.isFile();
            };

            this.getFilename = function() {
                return pi['basename'];
            };
            this.getFileName = this.getFilename;

            this.getPath = function() {
                return require('path').normalize('/' + pi['dirname'].substr(path.length));
            };

            this.getFullPath = function() {
                return pi['dirname'];
            };

        };

        var iterator = function(path) {

            var dirList = NX.fs.readdirSync(path);

            NX.each(dirList, function(file) {

                var s = NX.fs.statSync(path + file);
                var pi = NX.fs.pathinfo(path + file);

                if(s.isDirectory() === true) {

                    if(callback.call(scope, new status(pi, s)) === false) {
                        return false;
                    }

                    iterator(path + file + '/');

                } else if(s.isFile() === true) {

                    if(callback.call(scope, new status(pi, s)) === false) {
                        return false;
                    }

                }

            });

        };

        iterator(path);
    },

    // }}}
    // {{{ pathinfo

    /**
     * @method pathinfo
     */
    pathinfo : function(path, options) {

        var me = this,
            opt = '',
            optName = '',
            optTemp = 0,
            tmp_arr = {},
            cnt = 0,
            i = 0,
            have_basename = false,
            have_extension = false,
            have_filename = false;

        if(!path) {
            return false;
        }

        if(!options) {
            options = 'PATHINFO_ALL';
        }

        var OPTS = {
            'PATHINFO_DIRNAME': 1,
            'PATHINFO_BASENAME': 2,
            'PATHINFO_EXTENSION': 4,
            'PATHINFO_FILENAME': 8,
            'PATHINFO_ALL': 0
        };

        for(optName in OPTS) {
            OPTS.PATHINFO_ALL = OPTS.PATHINFO_ALL | OPTS[optName];
        }

        if(typeof options !== 'number') {

            options = [].concat(options);

            for(i=0; i < options.length; i++) {

                if(OPTS[options[i]]) {
                    optTemp = optTemp | OPTS[options[i]];
                }

            }

            options = optTemp;
        }

        if(options & OPTS.PATHINFO_DIRNAME) {
            tmp_arr.dirname = me.dirname(path);
        }

        if(options & OPTS.PATHINFO_BASENAME) {

            if (false === have_basename) {
                have_basename = me.basename(path);
            }

            tmp_arr.basename = have_basename;
        }

        if(options & OPTS.PATHINFO_EXTENSION) {

            if(false === have_basename) {
                have_basename = me.basename(path);
            }

            if(false === have_extension) {
                have_extension = me.extname(have_basename);
            }

            tmp_arr.extension = have_extension;
        }

        if(options & OPTS.PATHINFO_FILENAME) {

            if(false === have_basename) {
                have_basename = me.basename(path);
            }

            if(false === have_extension) {
                have_extension = me.extname(have_basename);
            }

            if(false === have_filename) {
                have_filename = have_basename.substr(
                    0,
                    (have_basename.length - have_extension.length)
                );
            }

            tmp_arr.filename = have_filename;
        }

        cnt = 0;

        for(opt in tmp_arr) {
            cnt++;
        }

        if(cnt == 1) {
            return tmp_arr[opt];
        }

        return tmp_arr;
    }

    // }}}

});

// }}}
// {{{ shorthand

NX.fs = NX.util.FileSystem;

// }}}
// {{{ register deferred

NX.each([
    'close',
    'readdir',
    'unlink',
    'rmdir',
    'mkdir',
    'open',
    'read',
    'write',
    'readFile',
    'writeFile',
    'watchFile',
    'unwatchFile',
    'chmod',
    'isReadable',
    'isWritable',
    'touch',
    'rename',
    'truncate',
    'stat',
    'lstat',
    'fstat',
    'link',
    'symlink',
    'readlink',
    'realpath'

],function(name) {
    NX.util.Deferred.register(name, NX.fs[name]);
});

// }}}
// {{{ NX class shorthand

/**
 * @class NX
 */

// }}}
// {{{ NX.rename

/**
 * @method rename
 */
NX.rename = NX.fs.rename;

// }}}
// {{{ NX.renameSync

/**
 * @method renameSync
 */
NX.renameSync = NX.fs.renameSync;

// }}}
// {{{ NX.truncate

/**
 * @method truncate
 */
NX.truncate = NX.fs.truncate;

// }}}
// {{{ NX.truncateSync

/**
 * @method truncateSync
 */
NX.truncateSync = NX.fs.truncateSync;

// }}}
// {{{ NX.chmod

/**
 * @method chmod
 */
NX.chmod = NX.fs.chmod;

// }}}
// {{{ NX.chmodSync

/**
 * @method chmodSync
 */
NX.chmodSync = NX.fs.chmodSync;

// }}}
// {{{ NX.stat

/**
 * @method stat
 */
NX.stat = NX.fs.stat;

// }}}
// {{{ NX.statSync

/**
 * @method statSync
 */
NX.statSync = NX.fs.statSync;

// }}}
// {{{ NX.lstat

/**
 * @method lstat
 */
NX.lstat = NX.fs.lstat;

// }}}
// {{{ NX.lstatSync

/**
 * @method lstatSync
 */
NX.lstatSync = NX.fs.lstatSync;

// }}}
// {{{ NX.fstat

/**
 * @method fstat
 */
NX.fstat = NX.fs.fstat;

// }}}
// {{{ NX.fstatSync

/**
 * @method fstatSync
 */
NX.fstatSync = NX.fs.fstatSync;

// }}}
// {{{ NX.link

/**
 * @method link
 */
NX.link = NX.fs.link;

// }}}
// {{{ NX.linkSync

/**
 * @method linkSync
 */
NX.linkSync = NX.fs.linkSync;

// }}}
// {{{ NX.symlink

/**
 * @method symlink
 */
NX.symlink = NX.fs.symlink;

// }}}
// {{{ NX.symlinkSync

/**
 * @method symlinkSync
 */
NX.symlinkSync = NX.fs.symlinkSync;

// }}}
// {{{ NX.readlink

/**
 * @method readlink
 */
NX.readlink = NX.fs.readlink;

// }}}
// {{{ NX.readlinkSync

/**
 * @method readlinkSync
 */
NX.readlinkSync = NX.fs.readlinkSync;

// }}}
// {{{ NX.realpath

/**
 * @method realpath
 */
NX.realpath = NX.fs.realpath;

// }}}
// {{{ NX.realpathSync

/**
 * @method realpathSync
 */
NX.realpathSync = NX.fs.realpathSync;

// }}}
// {{{ NX.unlink

/**
 * @method unlink
 */
NX.unlink = NX.fs.unlink;

// }}}
// {{{ NX.unlinkSync

/**
 * @method unlinkSync
 */
NX.unlinkSync = NX.fs.unlinkSync;

// }}}
// {{{ NX.rmdir

/**
 * @method rmdir
 */
NX.rmdir = NX.fs.rmdir;

// }}}
// {{{ NX.rmdirSync

/**
 * @method rmdirSync
 */
NX.rmdirSync = NX.fs.rmdirSync;

// }}}
// {{{ NX.mkdir

/**
 * @method mkdir
 */
NX.mkdir = NX.fs.mkdir;

// }}}
// {{{ NX.mkdirSync

/**
 * @method mkdirSync
 */
NX.mkdirSync = NX.fs.mkdirSync;

// }}}
// {{{ NX.readdir

/**
 * @method readdir
 */
NX.readdir = NX.fs.readdir;

// }}}
// {{{ NX.readdirSync

/**
 * @method readdirSync
 */
NX.readdirSync = NX.fs.readdirSync;

// }}}
// {{{ NX.close

/**
 * @method close
 */
NX.close = NX.fs.close;

// }}}
// {{{ NX.closeSync

/**
 * @method closeSync
 */
NX.closeSync = NX.fs.closeSync;

// }}}
// {{{ NX.open

/**
 * @method open
 */
NX.open = NX.fs.open;

// }}}
// {{{ NX.openSync

/**
 * @method openSync
 */
NX.openSync = NX.fs.openSync;

// }}}
// {{{ NX.write

/**
 * @method write
 */
NX.write = NX.fs.write;

// }}}
// {{{ NX.writeSync

/**
 * @method writeSync
 */
NX.writeSync = NX.fs.writeSync;

// }}}
// {{{ NX.read

/**
 * @method read
 */
NX.read = NX.fs.read;

// }}}
// {{{ NX.readSync

/**
 * @method readSync
 */
NX.readSync = NX.fs.readSync;

// }}}
// {{{ NX.readFile

/**
 * @method readFile
 */
NX.readFile = NX.fs.readFile;

// }}}
// {{{ NX.readFileSync

/**
 * @method readFileSync
 */
NX.readFileSync = NX.fs.readFileSync;

// }}}
// {{{ NX.writeFile

/**
 * @method writeFile
 */
NX.writeFile = NX.fs.writeFile;

// }}}
// {{{ NX.writeFileSync

/**
 * @method writeFileSync
 */
NX.writeFileSync = NX.fs.writeFileSync;

// }}}
// {{{ NX.watchFile

/**
 * @method watchFile
 */
NX.watchFile = NX.fs.watchFile;

// }}}
// {{{ NX.unwatchFile

/**
 * @method unwatchFile
 */
NX.unwatchFile = NX.fs.unwatchFile;

// }}}
// {{{ NX.touch

/**
 * @method touch
 */
NX.touch = NX.fs.touch;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
