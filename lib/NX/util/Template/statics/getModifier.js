/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Template.statics.getModifier

module.exports = function(s, ldelim, rdelim) {

    var me = this;

    s = s.substring(ldelim.length);
    s = s.substring(0, s.length - rdelim.length);

    var tmp = s.split('|');

    tmp.shift();

    var ret = [];

    // パラメータ解析
    tmp.forEach(function(mod) {

        mod = mod.split(':');

        var name = mod[0];

        mod.shift();
        param = mod;

        ret.push({
            name: name,
            param: param
        });

    });

    return ret;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
