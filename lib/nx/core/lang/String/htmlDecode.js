/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.String.htmlDecode

module.exports = (function() {

    var entities = {
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&quot;': '"'
    }, keys = [], p, regex;

    for(p in entities) {
        keys.push(p);
    }

    regex = new RegExp('(' + keys.join('|') + '|&#[0-9]{1,5};' + ')', 'g');

    return function(value) {

        return (!value) ? value : String(value).replace(regex, function(match, capture) {

            if(capture in entities) {

                return entities[capture];

            } else {

                return String.fromCharCode(parseInt(capture.substr(2), 10));

            }

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
