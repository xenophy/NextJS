/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.postprocessor.alias

module.exports = function(name, cls, data) {

    var aliases = data.alias, i, ln, alias;

    if(!(aliases instanceof Array)) {
        aliases = [aliases];
    }

    for(i = 0, ln = aliases.length; i < ln; i++) {

        alias = aliases[i];

        if(typeof alias !== 'string') {

            NX.Error.raise({
                sourceClass: "NX",
                sourceMethod: "define",
                msg: "Invalid alias of: '" + alias + "' for class: '" + name + "'; must be a valid string"
            });

        }

        this.setAlias(cls, alias);
    }

    for (i = 0, ln = aliases.length; i < ln; i++) {
        alias = aliases[i];
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
