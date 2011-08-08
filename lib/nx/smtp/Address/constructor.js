/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.constructor

module.exports = function(fields) {

    config = config || {};

    var me = this;

    NX.apply(me, {
        specials: '()<>@,:;.\"[]',
        pos: 0,
        LWS: ' \t',
        CR: '\r\n'
    });

    NX.apply(me, {
        FWS: me.LWS + me.CR,
        atomEnds: me.specials + me.LWS + me.CR
    });

    NX.apply(me, {
        phraseends: me.atomEnds.replace(/\./g, ''),
        field: field || '',
        commentList: []
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
