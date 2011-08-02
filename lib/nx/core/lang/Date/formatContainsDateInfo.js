/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.formatContainsDateInfo

module.exports = (function(){

    var stripEscapeRe = /(\\.)/g,
        dateInfoRe = /([djzmnYycU]|MS)/;

    return function(format) {
        return dateInfoRe.test(format.replace(stripEscapeRe, ''));
    };

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
