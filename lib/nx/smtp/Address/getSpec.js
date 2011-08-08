/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.getSpec

module.exports = function() {

    var me = this,
        asList = [];

    me.gotoNext();

    while(me.pos < me.field.length) {

        if(me.field[me.pos] == '.') {

            asList.push('.');
            me.pos++;

        } else if(me.field[me.pos] == '"') {

            asList.push('"' + me.getQuote() + '"');

        } else if(me.atomEnds.indexOf(me.field[me.pos]) != -1) {

            break;

        } else {

            asList.push(me.getAtom());

        }

        me.gotoNext();
    }

    if(me.pos >= me.field.length || me.field[me.pos] != '@') {

        return asList.join(NX.smtp.Address.EMPTYSTRING);

    }

    asList.push('@');

    me.pos++;
    me.gotoNext();

    return asList.join(NX.smtp.Address.EMPTYSTRING) + me.getDomain();
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
