/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.getDomain

module.exports = function() {

    var me = this,
        sdlist = [];

    while(me.pos < me.field.length) {

        if(me.LWS.indexOf(me.field[me.pos]) != -1) {

            me.pos++;

        } else if(me.field[me.pos] == '(') {

            me.commentList.push(me.getComment());

        } else if(me.field[me.pos] == '[') {

            sdlist.push(me.getDomainLiteral());

        } else if(me.field[me.pos] == '.') {

            me.pos++;
            sdlist.push('.');

        } else if(me.atomEnds.indexOf(me.field[me.pos]) != -1) {

            break;

        } else {

            sdlist.push(me.getAtom());

        }
    }

    return sdlist.join(NX.smtp.Address.EMPTYSTRING);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
