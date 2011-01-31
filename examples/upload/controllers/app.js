/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ app

module.exports = NX.extend(NX.WebController, {

    // {{{ index

    index : function(req, res) {

        var me = this;
        var cp = this.controller.contentPath;

        if(me.files && me.files.upfile) {

            var file = me.files.upfile;
            var src = file.path;
            var dst = cp + '/images/' + file.name;
            require('fs').rename(src, dst, function() {
                me.set('file', file.name);
                me.end();
            });

        } else {
            me.end();
        }

    }

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
