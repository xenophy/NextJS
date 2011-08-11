/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.getDelimited

module.exports = function(beginChar, endChars, allowComments) {

    var me = this;

    if(me.field[me.pos] != beginChar) {
        return '';
    }

    allowComments = (allowComments === false) ? false : true;

    var slist = [''],
        quote = false;

    me.pos++;

    while(me.pos < me.field.length) {

        if(quote) {

            slist.push(me.field[me.pos]);
            quote = false;

        } else if(endChars.indexOf(me.field[me.pos]) != -1) {

            me.pos++;
            break;

        } else if(allowComments && me.field[me.pos] == '(') {

            slist.push(me.getComment());
            continue;

        } else if(me.field[me.pos] == '\\') {

            quote = true;

        } else {

            slist.push(me.field[me.pos]);

        }

        me.pos++;

    }

    return slist.join(NX.smtp.Address.EMPTYSTRING);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
