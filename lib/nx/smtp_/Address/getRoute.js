/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.getRoute

module.exports = function() {

    var me = this;

    if(me.field[me.pos] != '<') {
        return '';
    }

    var expectRoute = false,
        adList = '';

    me.pos++;
    me.gotoNext();

    while(me.pos < me.field.length) {

        if(expectRoute) {

            me.getDomain();
            expectRoute = false;

        } else if(me.field[me.pos] == '>') {

            me.pos += 1;
            break;

        } else if(me.field[me.pos] == '@') {

            me.pos += 1;
            expectRoute = true;

        } else if(me.field[me.pos] == ':') {

            me.pos++;

        } else {

            adList = me.getSpec();
            me.pos++;

            break;
        }

        me.gotoNext();
    }

    return adList;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
