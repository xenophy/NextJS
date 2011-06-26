/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Template.statics.getVarName

module.exports = function(s, ldelim, rdelim) {

    var me = this;

    s = s.substring(ldelim.length);
    s = s.substring(0, s.length - rdelim.length);

    var pos = s.indexOf('|');

    if(pos === -1) {
        return s;
    }

    return s.substr(0, pos);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
