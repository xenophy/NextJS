/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.borrow

module.exports = function(fromClass, members) {

    var fromPrototype = fromClass.prototype,
        i, ln, member;

    members = NX.Array.from(members);

    for(i = 0, ln = members.length; i < ln; i++) {

        member = members[i];

        this.own(member, fromPrototype[member]);

    }

    return this;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
