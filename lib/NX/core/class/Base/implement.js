/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.implement

module.exports = function(members) {

    var prototype = this.prototype,
        name,
        i,
        member,
        previous,
        className = NX.getClassName(this);

    for (name in members) {
        if (members.hasOwnProperty(name)) {
            member = members[name];

            if (typeof member === 'function') {
                member.$owner = this;
                member.$name = name;

                if (className) {
                    member.displayName = className + '#' + name;
                }

            }

            prototype[name] = member;
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
