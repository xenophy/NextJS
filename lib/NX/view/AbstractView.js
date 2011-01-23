/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.view');

// }}}
// {{{ NX.view.AbstractView

/**
 * @class NX.view.AbstractView
 */
NX.view.AbstractView = NX.extend(require('events').EventEmitter, {

    // {{{ init

    /**
     * @method init
     */
    init: NX.emptyFn,

    // }}}
    // {{{ render

    /**
     * @method render
     */
    render: NX.emptyFn,

    // }}}
    // {{{ setTemplate

    /**
     * @method
     */
    setTemplate : function(file) {

        var me = this;

        me.template = file;
    }

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
