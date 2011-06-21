/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Object.htmlEncode

module.exports = (function() {

    var entities = {
        '&': '&amp;',
        '>': '&gt;',
        '<': '&lt;',
        '"': '&quot;'
    }, keys = [], p, regex;

    for (p in entities) {
        keys.push(p);
    }

    regex = new RegExp('(' + keys.join('|') + ')', 'g');

    return function(value) {
        return (!value) ? value : String(value).replace(regex, function(match, capture) {
            return entities[capture];    
        });
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
