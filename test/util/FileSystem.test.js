/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX.util.FileSystem Class Tests

module.exports = {

    // {{{ test basename#standard

    'test basename#standard': function() {

        var ret;

        ret = NX.fs.basename('/www/site/home.htm', '.htm');

        assert.equal(ret, 'home');

        ret = NX.fs.basename('ecra.php?p=1');

        assert.equal(ret, 'ecra.php?p=1');

    },

    // }}}
    // {{{ test dirname#standard

    'test dirname#standard': function() {

        var ret;

        ret = NX.fs.dirname('/etc/passwd');
        assert.equal(ret, '/etc');

        ret = NX.fs.dirname('c:/Temp/x');
        assert.equal(ret, 'c:/Temp');

    },

    // }}}
    // {{{ test pathinfo#standard

    'test pathinfo#standard': function() {

        var ret;

        ret = NX.fs.pathinfo('/www/htdocs/index.html', 1);
        assert.equal(ret, '/www/htdocs');

        ret = NX.fs.pathinfo('/www/htdocs/index.html', 'PATHINFO_BASENAME');
        assert.equal(ret, 'index.html');

        ret = NX.fs.pathinfo();
        assert.equal(ret, false);

        ret = NX.fs.pathinfo('/www/htdocs/index.html', 'PATHINFO_FILENAME');
        assert.equal(ret, 'index');

        ret = NX.fs.pathinfo('/www/htdocs/index.html', 'PATHINFO_EXTENSION');
        assert.equal(ret, '.html');

    },

    // }}}
    // {{{ test iterate#standard

    'test iterate#standard': function() {

        var path = require('path');
        var root = path.normalize(__dirname + '/../shared/iterate/');
        var ret = {};

        ret[root + 'dir1'] = null;
        ret[root + 'dir1/file1.html'] = null;
        ret[root + 'dir2'] = null;
        ret[root + 'dir2/file1.js'] = null;
        ret[root + 'file1.txt'] = null;
        ret[root + 'file2.txt'] = null;

        NX.fs.iterate(__dirname + '/../shared/iterate/', function(s) {

            var filename = require('path').normalize(s.getFullPath()) + '/' + require('path').normalize(s.getFilename());
            ret[filename] = true;


            if(NX.fs.extname(s.getFilename()) === '') {
                assert.equal(s.isDir(), true);
                assert.equal('/', s.getPath());
            } else {
                assert.equal(s.isFile(), true);
            }

        });

        NX.iterate(ret, function(key, v) {
            assert.equal(v, true);
        });


        ret[root + 'dir1'] = null;
        ret[root + 'dir1/file1.html'] = null;
        ret[root + 'dir2'] = null;
        ret[root + 'dir2/file1.js'] = null;
        ret[root + 'file1.txt'] = null;
        ret[root + 'file2.txt'] = null;

        NX.fs.iterate(__dirname + '/../shared/iterate/', function(s) {

            if(s.isDir()) {
                return false;
            }

            var filename = require('path').normalize(s.getFullPath()) + '/' + require('path').normalize(s.getFilename());
            ret[filename] = true;

        });

        var cnt = 0;
        NX.iterate(ret, function(key, v) {
            if(v === null) {
                cnt++;
            }
        });
        assert.equal(cnt, 6);

        ret[root + 'dir1'] = null;
        ret[root + 'dir1/file1.html'] = null;
        ret[root + 'dir2'] = null;
        ret[root + 'dir2/file1.js'] = null;
        ret[root + 'file1.txt'] = null;
        ret[root + 'file2.txt'] = null;

        NX.fs.iterate(__dirname + '/../shared/iterate/', function(s) {

            if(s.isFile()) {
                return false;
            }

            var filename = require('path').normalize(s.getFullPath()) + '/' + require('path').normalize(s.getFilename());
            ret[filename] = true;

        });

        var cnt = 0;
        NX.iterate(ret, function(key, v) {
            if(v === null) {
                cnt++;
            }
        });
        assert.equal(cnt, 4);

    },

    // }}}
    // {{{ test exists#notexists

    'test exists#notexists': function(beforeExit) {

        var deferredRet = null;
        var callbackRet = null;
        var path = require('path');
        var filename = path.normalize(__dirname + '/../temp/NX.util.FileSystem.exists');

        try {
            NX.fs.unlinkSync(filename + '.deferred');
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs.exists(filename)
        .next(function(exists) {
            deferredRet = exists;
        });

        NX.fs.exists(filename, function(exists) {
            callbackRet = exists;
        })

        beforeExit(function(){
            assert.equal(deferredRet, false);
            assert.equal(callbackRet, false);
        });

    },

    // }}}
    // {{{ test exists#exists

    'test exists#exists': function(beforeExit) {

        var deferredRet = null;
        var callbackRet = null;
        var path = require('path');
        var filename = path.normalize(__dirname + '/../temp/NX.util.FileSystem.exists');

        try {
            NX.fs.unlinkSync(filename + '.deferred');
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename + '.deferred')
        .touch(filename)
        .next(function() {

            NX.fs.exists(filename + '.deferred')
            .next(function(exists) {
                deferredRet = exists;
            });

            NX.fs.exists(filename, function(exists) {
                callbackRet = exists;
            })

        });

        beforeExit(function(){
            assert.equal(deferredRet, true);
            assert.equal(callbackRet, true);

            NX.fs.unlinkSync(filename + '.deferred');
            NX.fs.unlinkSync(filename);
        });

    },

    // }}}
    // {{{ test existsSync#standard

    'test existsSync#standard': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.exists');

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        assert.equal(NX.fs.existsSync(filename), false);

    },

    // }}}
    // {{{ test chmod#standerd

    'test chmod#standerd': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.chmod');
        var ret = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .next(function() {

            NX.fs.chmod(filename, 0777, function() {
                var s = require('fs').statSync(filename);
                var mod = NX.sprintf('%o', s.mode);
                ret = mod.substr(-4);

                try {
                    NX.fs.unlinkSync(filename);
                } catch(e) {
                }

            });

        });

        beforeExit(function(){

            assert.equal(ret, '0777');

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test chmod#deferred

    'test chmod#deferred': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.chmod2');
        var ret1 = null;
        var ret2 = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .chmod(filename, 0777)
        .next(function() {
            var s = require('fs').statSync(filename);
            var mod = NX.sprintf('%o', s.mode);
            ret1 = mod.substr(-4);
        })
        .chmod(filename, 0666)
        .next(function() {
            var s = require('fs').statSync(filename);
            var mod = NX.sprintf('%o', s.mode);
            ret2 = mod.substr(-4);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

        })
        .chmod(filename, 0666)
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(ret1, '0777');
            assert.equal(ret2, '0666');
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test rename#deferred

    'test rename#deferred': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.rename');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .rename(filename, filename + '.renamed')
        .rename(filename + '.unexists', filename + '.renamed')
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(NX.fs.existsSync(filename + '.renamed'), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename + '.renamed');
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test rename#standard

    'test rename#standard': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.rename2');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .next(function() {

            NX.fs.rename(filename, filename + '.renamed', function() {
            });

            NX.fs.rename(filename + '.unexists', filename + '.renamed', function(err) {
                if(err) {
                    error = true;
                }
            });

        });

        beforeExit(function(){

            assert.equal(NX.fs.existsSync(filename + '.renamed'), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename + '.renamed');
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test stat#standard

    'test stat#standard': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.stat');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .next(function() {

            NX.fs.stat(filename, function(err, s) {
                ret = s;
            });

            NX.fs.stat(filename + '.unexists', function(err) {
                if(err) {
                    error = true;
                }
            });

        });

        beforeExit(function(){

            assert.equal(NX.isObject(ret), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test stat#deferred

    'test stat#deferred': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.stat2');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .stat(filename)
        .next(function(s) {
            ret = s;
        })
        .stat(filename + '.unexists')
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(NX.isObject(ret), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test lstat#standard

    'test lstat#standard': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.lstat');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .next(function() {

            NX.fs.lstat(filename, function(err, s) {
                ret = s;
            });

            NX.fs.lstat(filename + '.unexists', function(err) {
                if(err) {
                    error = true;
                }
            });

        });

        beforeExit(function(){

            assert.equal(NX.isObject(ret), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test lstat#deferred

    'test lstat#deferred': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.lstat2');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .lstat(filename)
        .next(function(s) {
            ret = s;
        })
        .lstat(filename + '.unexists')
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(NX.isObject(ret), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test fstat#standard

    /*
    'test fstat#standard': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.fstat');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .next(function() {

            NX.fs.fstat(filename, function(err, s) {
                ret = s;
            });

            NX.fs.fstat(filename + '.unexists', function(err) {
                if(err) {
                    error = true;
                }
            });

        });

        beforeExit(function(){

            assert.equal(NX.isObject(ret), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test fstat#deferred

    'test fstat#deferred': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.fstat2');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .fstat(filename)
        .next(function(s) {
            ret = s;
        })
        .fstat(filename + '.unexists')
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(NX.isObject(ret), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}

    */

    // {{{ test link#standard

    'test link#standard': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.link');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        try {
            NX.fs.unlinkSync(filename + '.link');
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .next(function() {

            NX.fs.link(filename, filename + '.link', function(err) {
            });

            NX.fs.link(filename + '.unexists', filename + '.linkunexists', function(err) {
                if(err) {
                    error = true;
                }
            });

        });

        beforeExit(function(){

            assert.equal(NX.fs.existsSync(filename + '.link'), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

            try {
                NX.fs.unlinkSync(filename + '.link');
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test link#deferred

    'test link#deferred': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.link2');
        var ret = null;
        var error = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .link(filename, filename + '.link')
        .next(function(s) {
            ret = s;
        })
        .link(filename + '.unexists', filename + '.linkunexists')
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(NX.fs.existsSync(filename + '.link'), true);
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

            try {
                NX.fs.unlinkSync(filename + '.link');
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test symlink#standard

    'test symlink#standard': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.symlink');
        var ret = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        try {
            NX.fs.unlinkSync(filename + '.link');
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .next(function() {

            NX.fs.symlink(filename, filename + '.link', function(err) {
            });

        });

        beforeExit(function(){

            assert.equal(NX.fs.existsSync(filename + '.link'), true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

            try {
                NX.fs.unlinkSync(filename + '.link');
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test symlink#deferred

    'test symlink#deferred': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.symlink2');
        var ret = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        try {
            NX.fs.unlinkSync(filename + '.link');
        } catch(e) {
        }

        try {
            NX.fs.unlinkSync(filename + '.linkunexists');
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .symlink(filename, filename + '.link')
        .next(function(s) {
            ret = s;
        })
        .symlink(filename + '.unexists', filename + '.linkunexists');

        beforeExit(function(){

            assert.equal(NX.fs.existsSync(filename + '.link'), true);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

            try {
                NX.fs.unlinkSync(filename + '.link');
            } catch(e) {
            }

            try {
                NX.fs.unlinkSync(filename + '.linkunexists');
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test readlink#standard

    'test readlink#standard': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.readlink');
        var ret = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        try {
            NX.fs.unlinkSync(filename + '.link');
        } catch(e) {
        }

        NX.fs
        .symlink(filename, filename + '.link')
        .next(function() {

            NX.fs.readlink(filename + '.link', function(err, resolvedPath) {
                ret = resolvedPath;
            });

        });

        beforeExit(function(){

            assert.equal(ret, filename);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

            try {
                NX.fs.unlinkSync(filename + '.link');
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test readlink#deferred

    'test readlink#deferred': function(beforeExit) {

        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.readlink2');
        var ret = null;

        try {
            NX.fs.unlinkSync(filename);
        } catch(e) {
        }

        try {
            NX.fs.unlinkSync(filename + '.link');
        } catch(e) {
        }

        try {
            NX.fs.unlinkSync(filename + '.linkunexists');
        } catch(e) {
        }

        NX.fs
        .touch(filename)
        .symlink(filename, filename + '.link')
        .readlink(filename + '.link')
        .next(function(resolvedPath) {
            ret = resolvedPath;
        });

        beforeExit(function(){

            assert.equal(ret, filename);

            try {
                NX.fs.unlinkSync(filename);
            } catch(e) {
            }

            try {
                NX.fs.unlinkSync(filename + '.link');
            } catch(e) {
            }

            try {
                NX.fs.unlinkSync(filename + '.linkunexists');
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test realpath#standard

    'test realpath#standard': function(beforeExit) {

        var ret = null;

        NX.fs.realpath('./test/util', function(err, resolvedPath) {
            ret = resolvedPath;
        })

        beforeExit(function(){

            assert.equal(ret, __dirname);

        });

    },

    // }}}
    // {{{ test realpath#deferred

    'test realpath#deferred': function(beforeExit) {

        var ret = null;
        var error = null;

        NX.fs
        .realpath('./test/util')
        .next(function(resolvedPath) {
            ret = resolvedPath;
        });

        beforeExit(function(){

            assert.equal(ret, __dirname);

        });

    },

    // }}}
    // {{{ test unlink#standard

    'test unlink#standard': function(beforeExit) {

        var ret = null;
        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.unlink');

        NX.fs
        .touch(filename)
        .next(function() {

            NX.fs.unlink(filename, function(err) {
                if(NX.isNull(err)) {
                    ret = true;
                }
            })

        })

        beforeExit(function(){

            assert.equal(ret, true);

        });

    },

    // }}}
    // {{{ test unlink#deferred

    'test unlink#deferred': function(beforeExit) {

        var ret = null;
        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.unlink2');
        var error = null;

        NX.fs
        .touch(filename)
        .unlink(filename)
        .unlink(filename + '.unexists')
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(NX.fs.existsSync(filename), false);
            assert.equal(error, true);

        });

    },

    // }}}
    // {{{ test mkdir#standard

    'test mkdir#standard': function(beforeExit) {

        var ret = null;
        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.mkdir');
        var error = null;

        try {
            NX.fs.rmdirSync(filename);
        } catch(e) {
        }

        NX.fs.mkdir(filename, 0755, function(err) {
            var s = require('fs').statSync(filename);
            var mod = NX.sprintf('%o', s.mode);
            ret = mod.substr(-4);
        });

        beforeExit(function(){

            assert.equal(ret, '0755');

            try {
                NX.fs.rmdirSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test mkdir#deferred

    'test mkdir#deferred': function(beforeExit) {

        var ret = null;
        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.mkdir2');
        var error = null;

        try {
            NX.fs.rmdirSync(filename);
        } catch(e) {
        }

        NX.fs
        .mkdir(filename, 0755)
        .next(function() {
            var s = require('fs').statSync(filename);
            var mod = NX.sprintf('%o', s.mode);
            ret = mod.substr(-4);
        })
        .mkdir(filename, 0777)
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(ret, '0755');
            assert.equal(error, true);

            try {
                NX.fs.rmdirSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test rmdir#standard

    'test rmdir#standard': function(beforeExit) {

        var ret = null;
        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.rmdir');
        var error = null;

        NX.fs
        .mkdir(filename, 0755)
        .next(function() {

            NX.fs.rmdir(filename, function() {
            });

            NX.fs.rmdir(filename + '.unexists', function() {
                error = true;
            });

        });

        beforeExit(function(){

            assert.equal(NX.fs.existsSync(filename), false);
            assert.equal(error, true);

        });

    },

    // }}}
    // {{{ test rmdir#deferred

    'test rmdir#deferred': function(beforeExit) {

        var ret = null;
        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.rmdir2');
        var error = null;

        NX.fs
        .mkdir(filename, 0755)
        .rmdir(filename)
        .rmdir(filename)
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(NX.fs.existsSync(filename), false);
            assert.equal(error, true);

        });

    },

    // }}}
    // {{{ test readdir#standard

    'test readdir#standard': function(beforeExit) {

        var ret = null;
        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.readdir');
        var error = null;

        try {
            NX.fs.unlinkSync(filename + '/temp.txt');
        } catch(e) {
        }
        try {
            NX.fs.rmdirSync(filename);
        } catch(e) {
        }

        NX.fs
        .mkdir(filename, 0755)
        .touch(filename + '/temp.txt', function() {

            NX.fs.readdir(filename, function(err, files) {
                ret = files;
            });

            NX.fs.readdir(filename + '.unexists', function(err, files) {
                if(err) {
                    error = true;
                }
            });
        });

        beforeExit(function(){

            assert.equal(ret[0], 'temp.txt');
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename + '/temp.txt');
            } catch(e) {
            }
            try {
                NX.fs.rmdirSync(filename);
            } catch(e) {
            }

        });

    },

    // }}}
    // {{{ test readdir#deferred

    'test readdir#deferred': function(beforeExit) {

        var ret = null;
        var filename = require('path').normalize(__dirname + '/../temp/NX.util.FileSystem.readdir2');
        var error = null;

        try {
            NX.fs.unlinkSync(filename + '/temp.txt');
        } catch(e) {
        }
        try {
            NX.fs.rmdirSync(filename);
        } catch(e) {
        }

        NX.fs
        .mkdir(filename, 0755)
        .touch(filename + '/temp.txt')
        .readdir(filename)
        .next(function(files) {
            ret = files;
        })
        .readdir(filename + '.unexists')
        .error(function() {
            error = true;
        });

        beforeExit(function(){

            assert.equal(ret[0], 'temp.txt');
            assert.equal(error, true);

            try {
                NX.fs.unlinkSync(filename + '/temp.txt');
            } catch(e) {
            }
            try {
                NX.fs.rmdirSync(filename);
            } catch(e) {
            }

        });
    },

    // }}}










    // {{{ test isReadable#standard

    'test isReadable#standard': function(beforeExit) {

        var deferredRet = null;
        var callbackRet = null;

        NX.fs.isReadable('./testcase.txt')
        .next(function(readable) {
            deferredRet = readable;
        });

        NX.fs.isReadable('./testcase.txt', function(readable) {
            callbackRet = readable;
        })

        beforeExit(function(){
            assert.equal(deferredRet, false);
            assert.equal(callbackRet, false);
        });

    },

    // }}}
    // {{{ test isReadableSync#standard

    'test isReadableSync#standard': function(beforeExit) {

        assert.equal(NX.fs.isReadableSync('./testcase.txt'), false);

    },

    // }}}
    // {{{ test isWritable#standard

    'test isWritable#standard': function(beforeExit) {

        var deferredRet = null;
        var callbackRet = null;

        NX.fs.isWritable('./testcase.txt')
        .next(function(writable) {
            deferredRet = writable;
        });

        NX.fs.isWritable('./testcase.txt', function(writable) {
            callbackRet = writable;
        })

        beforeExit(function(){
            assert.equal(deferredRet, false);
            assert.equal(callbackRet, false);
        });

    },

    // }}}
    // {{{ test isWritableSync#standard

    'test isWritableSync#standard': function(beforeExit) {

        assert.equal(NX.fs.isWritableSync('./testcase.txt'), false);

    },

    // }}}
    // {{{ test touch#standard

    'test touch#standard': function(beforeExit) {

        var ret = null;

        NX.fs.touch('./tc-touch.txt',function() {
            ret = NX.fs.existsSync('./tc-touch.txt');
            assert.equal(ret, true);
            NX.fs.unlinkSync('./tc-touch.txt');
        });

    },

    // }}}
    // {{{ test touch deferred#standard

    'test touch deferred#standard': function(beforeExit) {

        var ret;

        NX.fs.touch('./tc-touch-deferred.txt')
        .next(function() {
            ret = NX.fs.existsSync('./tc-touch-deferred.txt');
            assert.equal(ret, true);
            NX.fs.unlinkSync('./tc-touch-deferred.txt');
        });

    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
