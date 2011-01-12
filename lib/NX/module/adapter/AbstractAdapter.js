/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.module.adapter.AbstractAdapter

/**
 * @class NX.module.adapter.AbstractAdapter
 */
NX.module.adapter.AbstractAdapter = NX.extend(Object, {

    // {{{ constructor

    /**
     * @method AbstractAdapter
     */
    constructor : function() {

    },

    // }}}
    // {{{ connect

    connect : NX.emptyFn,

    // }}}
    // {{{ disconnect

    disconnect : NX.emptyFn,

    // }}}
    // {{{ query

    query : NX.emptyFn

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
