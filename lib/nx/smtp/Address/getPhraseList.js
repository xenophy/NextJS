/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.getPhraseList

module.exports = function() {

    var me = this,
        plist = [];

    while(me.pos < me.field.length) {

        if(me.FWS.indexOf(me.field[me.pos]) != -1) {

            me.pos++;

        } else if(me.field[me.pos] == '"') {

            plist.push(me.getQuote());

        } else if(me.field[me.pos] == '(') {

            me.commentList.push(me.getComment());

        } else if(me.phraseends.indexOf(me.field[me.pos]) != -1) {

            break;

        } else {

            plist.push(me.getAtom(me.phraseends));

        }
    }

    return plist;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
