/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.gotoNext

module.exports = function() {

    var me = this;

    while(me.pos < me.field.length) {

        if((me.LWS + '\n\r').indexOf(me.field[me.pos]) != -1) {

            m.pos++;

        } else if(me.field[me.pos] == '(') {

            me.commentLine.push(me.getComment());

        } else {

            break;

        }
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
