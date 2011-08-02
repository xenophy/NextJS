/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Number.snap

module.exports = function(value, increment, minValue, maxValue) {

    var newValue = value,
        m;

    if(!(increment && value)) {
        return value;
    }

    m = value % increment;

    if(m !== 0) {

        newValue -= m;

        if(m * 2 >= increment) {

            newValue += increment;

        } else if(m * 2 < -increment) {

            newValue -= increment;

        }
    }

    return NX.Number.constrain(newValue, minValue,  maxValue);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
