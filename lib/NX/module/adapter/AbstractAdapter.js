/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.module', 'NX.module.adapter');

// }}}
// {{{ NX.module.adapter.AbstractAdapter

/**
 * @class NX.module.adapter.AbstractAdapter
 */
NX.module.adapter.AbstractAdapter = NX.extend(require('events').EventEmitter, {

    // {{{ constructor

    /**
     * @method AbstractAdapter
     */
    constructor : function() {

    },

    // }}}
    // {{{ connect

    /**
     * @method connect
     */
    connect : NX.emptyFn,

    // }}}
    // {{{ disconnect

    /**
     * @method disconnect
     */
    disconnect : NX.emptyFn,

    // }}}
    // {{{ getName

    /**
     * @method getName
     */
    getName : NX.emptyFn,

    // }}}
    // {{{ query

    /**
     * @method query
     */
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
