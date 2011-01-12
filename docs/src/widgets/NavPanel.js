/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX Docs
 *
 * http://xFrameworknx.com
 */

// {{{ Ext.NavPanel

/**
 * Ext.NavPanel
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 */
Ext.NavPanel = Ext.extend(Ext.tree.TreePanel, {

    // {{{ initComponent

    initComponent : function() {

        var me = this;

        // 設定適用
        Ext.apply(me, {
            animate: false,
            rootVisible:false,
            lines:false,
            root: new Ext.tree.TreeNode(),
            collapseFirst:false,
            bbar:[ ' ',
                new Ext.form.TriggerField({
                    width: 200,
                    triggerClass:'x-form-clear-trigger',
                    emptyText:'クラス検索',
                    enableKeyEvents: true,
                    onTriggerClick: function() {
                        this.setValue('');
                        Ext.each(me.hiddenPkgs, function(n){
                            n.ui.show();
                        });
                    },
                    listeners:{
                        render: function(f){
                            this.filter = new Ext.tree.TreeFilter(this, {
                                clearBlank: true,
                                autoClear: true
                            });
                        },
                        keydown: {
                            fn: this.filterTree,
                            buffer: 350,
                            scope: this
                        },
                        scope: this
                    }
                }), ' ', ' ',
                {
                    iconCls: 'icon-expand-all',
                    tooltip: 'Expand All',
                    handler: function(){
                        this.root.expand(true);
                        me.manroot.expand(true);
                        me.apiroot.expand(true);
                    },
                    scope: this
                }, '-', {
                    iconCls: 'icon-collapse-all',
                    tooltip: 'Collapse All',
                    handler: function(){
                        this.root.collapse(true);
                        me.manroot.expand(false);
                        me.apiroot.expand(false);
                    },
                    scope: this
            }]

        });

        // カテゴリノード追加
        me.root.appendChild([{
            id: 'man-root',
            text: 'マニュアル',
            cls: 'category-node man-root',
            expanded: true,
            children: Ext.docs.man
        }, {
            id: 'api-root',
            text: 'API ドキュメント',
            cls: 'category-node api-root',
            expanded: true,
            children: Ext.docs.api
        }]);

        me.on('afterrender', function() {

            me.manroot = me.root.findChild('id', 'man-root');
            me.apiroot = me.root.findChild('id', 'api-root');

            var el = me.getEl();
            el.on('click', function(e, t) {

                var t = e.getTarget('div.x-tree-node-leaf');

                if(t) {
                    var t = Ext.get(t);
                    var a = t.down('a');

                    var id = a.getAttribute('href');

                    if(id !== '#') {
                        me.fireEvent('opendoc', id);
                    }

                } else {

                    var t = e.getTarget('div.cls-node');

                    if(t) {

                        var t = Ext.get(t);
                        var a = t.down('a');
                        var id = a.getAttribute('href');

                        var tn = me.apiroot.findChild('href', id, true);
                        tn.expand();

                        me.fireEvent('opendoc', id);

                    } else {

                        var t = e.getTarget('div.pkg-node');

                        if(t) {

                            var t = Ext.get(t);
                            var a = t.down('a');
                            var id = a.getAttribute('href');

                            var tn = me.apiroot.findChild('href', id, true);
                            tn.expand();
                        }

                    }

                }

                if(e.getTarget('div.api-node')) {
                    me.fireEvent('doctype', 'api');
                } else if(e.getTarget('div.man-node')) {
                    me.fireEvent('doctype', 'man');
                }

                e.stopEvent();
            });
        });

        // スーパークラスメソッドコール
        Ext.NavPanel.superclass.initComponent.apply(me, arguments);
    },

    // }}}
    // {{{ filterTree

    filterTree: function(t, e) {

        var text = t.getValue();

        Ext.each(this.hiddenPkgs, function(n){
            n.ui.show();
        });

        if(!text){
            this.filter.clear();
            return;
        }
        this.expandAll();

        var re = new RegExp('^' + Ext.escapeRe(text), 'i');
        this.filter.filterBy(function(n){

            if(n.attributes.cls && n.attributes.cls.indexOf('category-node') !== -1) {
                return true;
            }
            if(n.attributes.cls && n.attributes.cls.indexOf('pkg-node') !== -1) {
                return true;
            }
            if(n.attributes.cls && n.attributes.cls.indexOf('cls-node') !== -1) {
                var exists = false;
                n.eachChild(function(cn) {
                    if(re.test(cn.text)) {
                        exists = true;
                        return false;
                    }
                });
                if(exists) {
                    return true;
                }
            }

            if(n.attributes.cls && n.attributes.cls.indexOf('prop-node') !== -1) {
                return re.test(n.text);
            }
            if(n.attributes.cls && n.attributes.cls.indexOf('method-node') !== -1) {
                return re.test(n.text);
            }

            return re.test(n.text);
        });

        this.hiddenPkgs = [];
        var me = this;
        this.root.cascade(function(n){

            if(n.attributes.cls && n.attributes.cls.indexOf('category-node') !== -1) {
                return;
            }
            if(n.attributes.cls && n.attributes.cls.indexOf('pkg-node') !== -1) {
                return;
            }
            if(n.attributes.cls && n.attributes.cls.indexOf('cls-node') !== -1) {
                var exists = false;
                n.eachChild(function(cn) {
                    if(re.test(cn.text)) {
                        exists = true;
                        return false;
                    }
                });
                if(exists) {
                    return;
                }
            }
            if(n.attributes.cls && n.attributes.cls.indexOf('prop-node') !== -1) {
                return re.test(n.text);
            }
            if(n.attributes.cls && n.attributes.cls.indexOf('method-node') !== -1) {
                return re.test(n.text);
            }

            if(n.attributes.id === 'man-root' || n.ui.ctNode.offsetHeight < 3){
                n.ui.hide();
                me.hiddenPkgs.push(n);
            }
        });
    }

    // }}}

});

// }}}
// {{{ register xtype

Ext.reg('nav', Ext.NavPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
