/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Web.init

module.exports = function(paths, req, fn) {

    var me = this,
        relpath = NX.Path.relative(NX.Path.normalize(req.url), '/') || './';

    // 相対パス設定
    if(relpath !== './') {
        me.set('relpath', NX.Path.relative(NX.Path.normalize(req.url), '/') + '/');
    } else {
        me.set('relpath', relpath);
    }

    // スーパークラスコンストラクタ
    me.callParent(arguments);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
