/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX Docs
 *
 * http://xFrameworknx.com
 */

// {{{ Ext.FooterBoxComponent

/**
 * Ext.FooterBoxComponent
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 */
Ext.FooterBoxComponent = Ext.extend(Ext.BoxComponent, {

    // {{{ initComponent

    initComponent : function() {

        var me = this;

        // 設定適用
        Ext.apply(me, {
            html: [{
                tag: 'address',
                html: 'Copyright &copy; 2011 Xenophy.CO.,LTD All rights Reserved.'
            }]
        });

        // スーパークラスメソッドコール
        Ext.FooterBoxComponent.superclass.initComponent.apply(me, arguments);
    }

    // }}}

});

// }}}
// {{{ register xtype

Ext.reg('footer', Ext.FooterBoxComponent);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
