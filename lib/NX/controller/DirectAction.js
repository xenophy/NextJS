/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.DirectAction

/**
 * @class NX.DirectAction
 */
NX.DirectAction = NX.extend(NX.Action, {

    // {{{ execute

    execute : function(req, res) {

        var me = this;
        var o = {};


        // TODO:モジュールメソッド解析


        var output = 'Ext.REMOTING_API = ' + NX.encode(o) + ';';
        data = new Buffer(output, encoding='utf8');

        var headers = {
            "Content-Type": NX.config.http.mimetype['js']
        };

        me.end({
            headers: headers,
            data: data.toString()
        });

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
