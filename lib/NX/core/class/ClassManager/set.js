/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.set

module.exports = function(name, value) {

    var targetName = this.getName(value);

    this.classes[name] = this.setNamespace(name, value);

    if (targetName && targetName !== name) {
        this.maps.alternateToName[name] = targetName;
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
