/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.Syntax

Ext.define("Docs.Syntax", {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ highlight

    highlight: function(root) {

        Ext.Array.forEach(Ext.query("pre > code", root.dom || root), function(el) {
//            Ext.get(el).addCls("prettyprint");
        });

//        prettyPrint();

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
