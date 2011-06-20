/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Object.toQueryObjects

module.exports = function(name, value, recursive) {

    var self = NX.Object.toQueryObjects,
        objects = [],
        i, ln;

    if (NX.isArray(value)) {

        for (i = 0, ln = value.length; i < ln; i++) {

            if (recursive) {

                objects = objects.concat(self(name + '[' + i + ']', value[i], true));

            } else {

                objects.push({
                    name: name,
                    value: value[i]
                });

            }

        }

    } else if (NX.isObject(value)) {

        for(i in value) {

            if (value.hasOwnProperty(i)) {

                if (recursive) {

                    objects = objects.concat(self(name + '[' + i + ']', value[i], true));

                } else {

                    objects.push({
                        name: name,
                        value: value[i]
                    });

                }

            }

        }

    } else {

        objects.push({
            name: name,
            value: value
        });

    }

    return objects;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
