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

    // {{{ config

    config : {},

    // }}}
    // {{{ constructor

    /**
     * @method AbstractAdapter
     */
    constructor : function() {

        var me = this;

        // スーパークラスメソッドコール
        NX.module.adapter.AbstractAdapter.superclass.constructor.apply(me, arguments);
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
    // {{{ save

    /**
     * @method save
     */
    save : NX.emptyFn,

    // }}}
    // {{{ find

    /**
     * @method find
     */
    find : NX.emptyFn

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