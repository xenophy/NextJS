/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Action

/**
 * @class NX.Action
 */
NX.Action = NX.extend(require('events').EventEmitter, {

    // {{{ execute

    execute : function() {

    },

    // }}}
    // {{{ getCookie

    getCookie : function(name) {

        return this.controller.getCookie(name);
    },

    // }}}
    // {{{ setCookie

    setCookie : function(name) {

        return this.controller.setCookie.apply(this.controller, arguments);
    },

    // }}}
    // {{{ redirect

    /**
     * @method redirect
     */
    redirect : function(p) {

        var me = this;
        var res = me.__response;

        res.writeHead(302, { Location: p });
        res.end();

        me.controller.view.template = false;
        me.end();
    },

    // }}}
    // {{{ set

    /**
     * @method set
     */
    set : function(key, v) {

        var me = this;

        me.controller.results[key] = v;
    },

    // }}}
    // {{{ setTemplate

    /**
     * @method setTemplate
     */
    setTemplate : function(file) {

        this.controller.setTemplate(file);

    },

    // }}}
    // {{{ end

    end : function(res) {

        var me = this;

        me.controller.emit('end', res);
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
