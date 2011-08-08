/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.getAtom

module.exports = function(atomEnds) {

    var me = this,
        atomList = [''];

    if(atomEnds === undefined) {

        atomEnds = me.atomEnds;

    }

    while(me.pos < me.field.length) {

        if(atomEnds.indexOf(me.field[me.pos]) != -1) {

            break;

        } else {

            atomList.push(me.field[me.pos]);
        }

        me.pos++;
    }

    return atomList.join(NX.smtp.Address.EMPTYSTRING);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
