/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.override

module.exports = function(members) {

    var prototype = this.prototype,
        name,
        i,
        member,
        previous;

    for(name in members) {

        if(members.hasOwnProperty(name)) {

            member = members[name];

            if(typeof member === 'function') {

                if(typeof prototype[name] === 'function') {

                    previous = prototype[name];
                    member.$previous = previous;

                }

                this.ownMethod(name, member);

            } else {

                prototype[name] = member;

            }
        }
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
