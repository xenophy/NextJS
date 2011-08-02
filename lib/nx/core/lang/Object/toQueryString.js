/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Object.toQueryString

module.exports = function(object, recursive) {

    var paramObjects = [],
        params = [],
        i, j, ln, paramObject, value;

    for(i in object) {
        if(object.hasOwnProperty(i)) {
            paramObjects = paramObjects.concat(NX.Object.toQueryObjects(i, object[i], recursive));
        }
    }

    for(j = 0, ln = paramObjects.length; j < ln; j++) {
        paramObject = paramObjects[j];
        value = paramObject.value;

        if(NX.isEmpty(value)) {
            value = '';
        } else if (NX.isDate(value)) {
            value = NX.Date.toString(value);
        }

        params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
    }

    return params.join('&');
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
