/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Template

module.exports = function(config) {

    config = config || {};

    var me = this;

    NX.apply(me, config);
    NX.applyIf(me, {
        path: me.exec,
        initialConfig: config,
        ldelim : '<!--{',
        rdelim : '}-->'
    });

    var reLdelim = NX.String.escapeRegex(me.ldelim) + '';
    var reRdelim = NX.String.escapeRegex(me.rdelim) + '';

    // 正規表現初期化
    NX.apply(me, {

        // {{{ コメントオペレータ用正規表現

        commentRe : new RegExp(reLdelim + '\\*(.|\r\n|\n|\r)*?\\*' + reRdelim, 'g'),

        // }}}
        // {{{ オペレーターマッチ用正規表現

        operatorsRe : new RegExp(reLdelim + '.*?' + reRdelim + '|<!--(.|\r\n|\n|\r)+?-->', 'g'),

        // }}}
        // {{{ オペレーター識別子用正規表現

        operatorIdRe : new RegExp(reLdelim + '([\\w\\/]+).*?' + reRdelim, 'g')

        // }}}

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
