/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Array.toArray

module.exports = function(iterable, start, end) {

    if(!iterable || !iterable.length) {
        return [];
    }

    if(typeof iterable === 'string') {
        iterable = iterable.split('');
    }

    var array = [], i;

    start = start || 0;
    end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;

    for(i = start; i < end; i++) {
        array.push(iterable[i]);
    }

    return array;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
