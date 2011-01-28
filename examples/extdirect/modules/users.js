/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ users

module.exports = NX.extend(NX.Module, {

    // {{{ useTable

    useTable : 'users',

    // }}}
    // {{{ getList

    getList : function(callback) {

        var me = this;

        me.query('SELECT * FROM users', function(err, rs) {
            callback(rs);
        });
    },

    // }}}
    // {{{ getGridList

    getGridList : function(start, limit, sort, dir, query, callback) {

        var me = this;

        me.query('SELECT * FROM users', function(err, rs) {
            callback({users: rs});
        });
    },

    // }}}
    // {{{ getNode

    getNode : function(id, callback) {

        var ret = [];

        if(id === 'root') {

            ret.push({id: 'sn1', text: 'サブノード1', leaf: false});
            ret.push({id: 'sn2', text: 'サブノード2', leaf: false});
            ret.push({id: 'sn3', text: 'サブノード3', leaf: false});

        } else if(id === 'sn1') {

            ret.push({id: 'ln1', text: 'リーフノード1', leaf: true});

        } else if(id === 'sn2') {

            ret.push({id: 'ln2', text: 'リーフノード2', leaf: true});

        } else if(id === 'sn3') {

            ret.push({id: 'ln3', text: 'リーフノード3', leaf: true});

        }

        callback(ret);

    },

    // }}}
    // {{{ readForm

    readForm : function(id, callback) {

        var ret = {success: false};

        this.query('SELECT * FROM users WHERE id = ' + id, function(err, rs) {
            if(rs[0]) {
                ret.success = true;
                ret.data = {
                    name: rs[0].name
                };
            }
            callback(ret);
        });

    },

    // }}}
    // {{{ writeForm

    /**
     * @formHandler
     */
    writeForm : function(v, callback) {

        var me = this;
        var ret = {success: true};

        if(v.isUpload == true) {

            var files = me.controller.request.files;

            // ファイル移動
            var src = files.photo.path;
            var dest = me.controller.contentPath + '/photo/' + files.photo.name;

            require('fs').rename(src, dest, function() {

                ret.isUpload = true;
                ret.imgpath = 'photo/' + files.photo.name;
                callback(ret);
            });

        } else {
            ret.msg = '[' + v.name + ']';
            callback(ret);
        }

    },

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
