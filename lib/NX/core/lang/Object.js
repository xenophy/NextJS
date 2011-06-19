/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

(function() {

var NXObject = NX.Object = {

    // {{{ merge

    merge: function(source, key, value) {

        if (typeof key === 'string') {

            if (value && value.constructor === Object) {

                if (source[key] && source[key].constructor === Object) {
                    NXObject.merge(source[key], value);
                } else {
                    source[key] = NX.clone(value);
                }

            } else {
                source[key] = value;
            }

            return source;
        }

        var i = 1,
            ln = arguments.length,
            object, property;

        for (; i < ln; i++) {

            object = arguments[i];

            for (property in object) {
                if (object.hasOwnProperty(property)) {
                    NXObject.merge(source, property, object[property]);
                }
            }
        }

        return source;
    },

    // }}}

};

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
