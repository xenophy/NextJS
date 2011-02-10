/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ getQueryCommit

var getQueryCommit = module.exports = function(me, table) {

    return NX.sprintf(
        "SHOW TABLE STATUS FROM `%s` LIKE '%s'",
        me.config.database,
        table
    );
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
