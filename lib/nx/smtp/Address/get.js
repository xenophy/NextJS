/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Address.get

module.exports = function() {

    var me = this;

    me.commentList = [];
    me.gotoNext();

    var oldPos = me.pos,
        oldCl = me.commentList,
        plist = me.getPhraseList(),
        retList = [],
        addrSpec,
        fieldLen,
        routeAddr;

    me.gotoNext();

    if(me.pos >= me.field.length) {

        if(plist) {

            retList = [{
                label: me.commentList.join(NX.smtp.Address.SPACE),
                address: plist[0]
            }];

        }

    } else if('.@'.indexOf(me.field[me.pos]) != -1) {

        me.pos = oldPos;
        me.commentList = oldCl;

        addrSpec = me.getSpec();

        retList = {
            label: me.commentList.join(NX.smtp.Address.SPACE),
            address: addrSpec
        };

    } else if(me.field[me.pos] == ':') {

        retList = [];

        fieldLen = me.field.length;
        me.pos++;

        while(me.pos < me.field.length) {

            me.gotoNext();

            if(me.pos < fieldLen && me.field[me.pos] == ';') {

                me.pos += 1;

                break;

            }

            retList = retList.push(me.get());
        }

    } else if(me.field[me.pos] == '<') {

        routeAddr = me.getRoute();

        if(me.commentList.length) {

            retList = {
                label: plist.join(NX.smtp.Address.SPACE) + ' (' + me.commentList.join(NX.smtp.Address.SPACE) + ')',
                address:routeAddr
            };

        } else {

            retList = {
                label:plist.join(NX.smtp.Address.SPACE),
                address:routeAddr
            };

        }

    } else {

        if(plist) {

            retList = {
                label: me.commentList.join(NX.smtp.Address.SPACE),
                address:plist[0]
            };

        } else if(me.specials.indexOf(me.field[me.pos]) != -1) {

            me.post++;

        }

    }

    me.gotoNext();

    if(me.pos < me.field.length && me.field[me.pos] == ',') {
        me.pos++;
    }

    return retList;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
