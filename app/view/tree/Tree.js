/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.view.tree.Tree

Ext.define('Docs.view.tree.Tree', {

    // {{{ extend

    extend: 'Ext.tree.Panel',

    // }}}
    // {{{ alias

    alias : 'widget.classtree',

    // }}}
    // {{{ requires

    requires: [
        'Docs.view.HoverMenuButton',
        'Docs.Favorites',
        'Docs.History'
    ],

    // }}}
    // {{{ cls

    cls: 'class-tree iScroll',

    // }}}
    // {{{ folderSort

    folderSort: true,

    // }}}
    // {{{ useArrows

    useArrows: true,

    // }}}
    // {{{ rootVisible

    rootVisible: false,

    // }}}
    // {{{ border

    border: false,

    // }}}
    // {{{ bodyBorder

    bodyBorder: false,

    // }}}
    // {{{ initComponent

    initComponent: function() {

        this.addEvents('pageclick');
        this.root.expanded = true;
        this.root.children[0].expanded = true;
        this.on("itemclick", this.onItemClick, this);
        this.dockedItems = [{

            xtype: 'container',
            layout: 'hbox',
            dock: 'top',
            margin: '0 0 15 0',
            items: [{

                xtype: 'hovermenubutton',
                cls: 'icon-fav sidebar',
                text: 'お気に入り',

                menuCfg: {
                    cls: 'sidebar',
                    emptyText: 'No favorites',
                    showCloseButtons: true
                },

                store: Ext.getStore('Favorites'),

                listeners: {
                    closeclick: function(cls) {
                        Docs.Favorites.remove(cls);
                    }
                }

            }, {

                xtype: 'hovermenubutton',
                cls: 'icon-hist sidebar',
                text: '履歴',

                menuCfg: {
                    cls: 'sidebar',
                    emptyText: 'No history',
                    showCloseButtons: true
                },

                store: Ext.getStore('History'),

                listeners: {
                    closeclick: function(cls) {
                        Docs.History.removeClass(cls);
                    }
                }

            }]
        }];

        this.callParent();

        Docs.Favorites.setTree(this);

        Ext.getStore("Favorites").on("load", function() {

            this.getView().on("refresh", function(){

                this.getRootNode().cascadeBy(this.addFavIcons, this);

            }, this, {single: true});

        }, this);

    },

    // }}}
    // {{{ addFavIcons

    addFavIcons: function(node) {

        if(node.get("leaf")) {

            var cls = node.raw.clsName;
            var show = Docs.Favorites.has(cls) ? "show" : "";
            node.set("text", node.get("text") + Ext.String.format('<a rel="{0}" class="fav {1}"></a>', cls, show));
            node.commit();

        }

    },

    // }}}
    // {{{ onItemClick

    onItemClick: function(view, node, item, index, e) {

        var pageName = node.raw ? node.raw.pageName : node.data.pageName;

        if(pageName) {

            if(e.getTarget(".fav")) {

                var favEl = Ext.get(e.getTarget(".fav"));

                if(favEl.hasCls('show')) {

                    Docs.Favorites.remove(pageName);

                } else {

                    Docs.Favorites.add(pageName);

                }

            } else {

                this.fireEvent("pageclick", pageName);

            }

        } else if(!node.isLeaf()) {

            if(node.isExpanded()) {

                node.collapse(false);

            } else {

                node.expand(false);

            }

        }
    },

    // }}}
    // {{{ selectClass

    selectClass: function(cls) {

        var r = this.findRecordByClassName(cls);

        if(r) {

            this.getSelectionModel().select(r);

            r.bubble(function(n) {
                n.expand();
            });

        }

    },

    // }}}
    // {{{ setFavorite

    setFavorite: function(cls, enable) {

        var r = this.findRecordByClassName(cls);

        if(r) {
            var show = enable ? "show" : "";
            r.set("text", r.get("text").replace(/class="fav *(show)?"/, 'class="fav '+show+'"'));
            r.commit();
        }

    },

    // }}}
    // {{{ findRecordByClassName

    findRecordByClassName: function(cls) {

        return this.getRootNode().findChildBy(function(n) {
            return cls === n.raw.clsName;
        }, this, true);

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
 *
 */
