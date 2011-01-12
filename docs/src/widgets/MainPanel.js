/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX Docs
 *
 * http://xFrameworknx.com
 */

// {{{ Ext.MainPanel

/**
 * Ext.MainPanel
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 */
Ext.MainPanel = Ext.extend(Ext.Panel, {

    // {{{ initComponent

    initComponent : function() {

        var me = this;

        // 設定適用
        Ext.apply(me, {
            autoScroll: true,
            bbar: [{
                text: '文字サイズ',
                iconCls: 'icon-font-reset',
                menu: [{
                    text: '拡大',
                    iconCls: 'icon-font-inc',
                    handler: me.changeSize.createDelegate(this, [2]),
                    hideOnClick: false
                },{
                    text: '縮小',
                    iconCls: 'icon-font-dec',
                    handler: me.changeSize.createDelegate(this, [-2]),
                    hideOnClick: false
                },{
                    text: 'リセット',
                    iconCls: 'icon-font-reset',
                    handler: me.resetSize.createDelegate(this),
                    hideOnClick: false
                }]
            },'->', {
                ref: '../btnProp',
                text: 'プロパティ',
                iconCls: 'icon-prop',
                handler: function() {
                    var clsName = Application.currentHtml.substr('api/'.length);
                    clsName = clsName.substr(0, clsName.length - '.html'.length);
                    Application.scrollToMember.call(Application, clsName, 'props');
                }
            },{
                ref: '../sepProp',
                xtype: 'tbseparator',
            },{
                ref: '../btnMethod',
                text: 'メソッド',
                iconCls: 'icon-method',
                handler: function() {
                    var clsName = Application.currentHtml.substr('api/'.length);
                    clsName = clsName.substr(0, clsName.length - '.html'.length);
                    Application.scrollToMember.call(Application, clsName, 'methods');
                }
            },{
                ref: '../sepMethod',
                xtype: 'tbseparator',
            },{
                ref: '../btnDirect',
                text: 'ダイレクトリンク',
                iconCls: 'icon-direct',
                handler: function() {
                    var clsName = Application.currentHtml.substr('api/'.length);
                    clsName = clsName.substr(0, clsName.length - '.html'.length);
                    Ext.Msg.alert(
                        'ダイレクトリンク : ' + clsName,
                        '<a target="_blank" href="http://' + location.host + location.pathname + '?class=' + clsName + '">http://' + location.host + location.pathname + '?class=' + clsName + '</a>'
                    );
                }
            },{
                ref: '../sepDirect',
                xtype: 'tbseparator',
            },{
                iconCls: 'icon-hide-inherited',
                enableToggle: true,
                disabled: true,
                ref: '../btnHideInherited',
            },{
                ref: '../sepHideInherited',
                xtype: 'tbseparator',
            },{
                iconCls: 'icon-expand-members',
                enableToggle: true,
                tooltip: 'すべてのメンバを展開',
                ref: '../btnExpandMembers',
                toggleHandler: function(btn, toggle) {

                    tr = Ext.query('tr.expandable', me.body.dom);

                    if(toggle) {
                        Ext.each(tr, function(t) {
                            if(!Ext.fly(t).hasClass('expanded')) {
                                Ext.fly(t).addClass('expanded');
                            }
                        });
                    } else {
                        Ext.each(tr, function(t) {
                            if(Ext.fly(t).hasClass('expanded')) {
                                Ext.fly(t).removeClass('expanded');
                            }
                        });
                    }

                },
                scope : me
            }]
        });

        me.on('afterrender', function() {

            me.getBottomToolbar().hide();

            var el = me.getEl();
            el.on('click', function(e, t) {

                if(t = e.getTarget('.micon', 2)) {

                    e.stopEvent();

                    var tr = Ext.fly(t.parentNode);

                    if(tr.hasClass('expandable')){
                        tr.toggleClass('expanded');
                    }
                } else if(t = e.getTarget('a')) {

                    var href = Ext.fly(t).getAttribute('href');

                    window.open(href, href);

                    e.stopEvent();
                
                }

            });

        });

        // スーパークラスメソッドコール
        Ext.MainPanel.superclass.initComponent.apply(me, arguments);
    },

    // }}}
    // {{{ changeBottomToolbar

    changeBottomToolbar : function(type) {

        var me = this;
        var bbar = me.getBottomToolbar();

        if(type == 'man') {

            me.btnProp.hide();
            me.sepProp.hide();
            me.btnMethod.hide();
            me.sepMethod.hide();
            me.btnDirect.hide();
            me.sepDirect.hide();
            me.btnHideInherited.hide();
            me.sepHideInherited.hide();
            me.btnExpandMembers.hide();

        } else {

            me.btnProp.show();
            me.sepProp.show();
            me.btnMethod.show();
            me.sepMethod.show();
            me.btnDirect.show();
            me.sepDirect.show();
            me.btnHideInherited.show();
            me.sepHideInherited.show();
            me.btnExpandMembers.show();
        }
        bbar.show();

        me.doLayout();
    },

    // }}}
    // {{{ changeSize

    changeSize : function(val) {

        var rule = Ext.util.CSS.getRule('#doc-body .x-panel-body', true);
        var size = parseInt(rule.style.getPropertyValue('font-size'));
        if(!this.fontSize){
            this.fontSize = size;
        }
        Ext.util.CSS.updateRule('.api-doc td', 'fontSize', size + val + 'px');
        Ext.util.CSS.updateRule('.api-doc', 'fontSize', size + val + 'px');
        Ext.util.CSS.updateRule('#doc-body .x-panel-body', 'fontSize', size + val + 'px');
    },

    // }}}
    // {{{ resetSize

    resetSize : function(){
        Ext.util.CSS.updateRule('#doc-body .x-panel-body', 'fontSize', (this.fontSize || 14) + 'px');
        Ext.util.CSS.updateRule('.api-doc td', 'fontSize', (this.fontSize || 14) + 'px');
        Ext.util.CSS.updateRule('.api-doc', 'fontSize', (this.fontSize || 14) + 'px');
    }

    // }}}

});

// }}}
// {{{ register xtype

Ext.reg('main', Ext.MainPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
