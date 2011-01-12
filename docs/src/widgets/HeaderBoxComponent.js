/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX Docs
 *
 * http://xFrameworknx.com
 */

// {{{ Ext.HeaderBoxComponent

/**
 * Ext.HeaderBoxComponent
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 */
Ext.HeaderBoxComponent = Ext.extend(Ext.BoxComponent, {

    // {{{ initComponent

    initComponent : function() {

        var me = this;

        // 設定適用
        Ext.apply(me, {
            html: [{
                tag: 'img',
                src: 'resources/images/title.png',
                width: 195,
                height: 49
            }]
        });

        // スーパークラスメソッドコール
        Ext.HeaderBoxComponent.superclass.initComponent.apply(me, arguments);
    }

    // }}}

});

// }}}
// {{{ register xtype

Ext.reg('header', Ext.HeaderBoxComponent);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
