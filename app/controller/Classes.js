/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.controller.Classes

Ext.define('Docs.controller.Classes', {

    // {{{ extend

    extend: 'Ext.app.Controller',

    // }}}
    // {{{ requires

    requires: [
        'Docs.History',
        'Docs.Syntax',
        'Docs.view.cls.Overview'
    ],

    // }}}
    // {{{ stores

    stores: [
        'Favorites',
        'History',
        'Settings'
    ],

    // }}}
    // {{{ models

    models: [
        'Favorite',
        'History',
        'Setting'
    ],

    // }}}
    // {{{ refs

    refs: [{
        ref: 'header',
        selector: 'classheader'
    },{
        ref: 'tabPanel',
        selector: 'classtabpanel'
    },{
        ref: 'tree',
        selector: 'classtree'
    }],

    // }}}
    // {{{ init

    init: function() {

        this.addEvents(
            "showClass",
            "showMember",
            "showGuide"
        );

        Ext.getBody().addListener('click', function(cmp, el) {
            this.loadPage(el.rel);
        }, this, {
            preventDefault: true,
            delegate: '.docClass'
        });

        this.control({

            'classtree': {

                pageclick: function(page) {

                    this.showGuide(page);

                }

            },

            'indexcontainer': {
                afterrender: function(cmp) {
                    cmp.el.addListener('click', function(cmp, el) {
                        this.showGuide(el.rel);
                    }, this, {
                        preventDefault: true,
                        delegate: '.guide'
                    });
                }
            },

            'classoverview': {

                afterrender: function(cmp) {
                    cmp.el.addListener('click', function(cmp, el) {
                        Ext.get(Ext.get(el).up('.member')).toggleCls('open');
                    }, this, {
                        preventDefault: true,
                        delegate: '.expandable'
                    });

                    // Do nothing when clicking on not-expandable items
                    cmp.el.addListener('click', Ext.emptyFn, this, {
                        preventDefault: true,
                        delegate: '.not-expandable'
                    });
                }
            }
        });
    },

    // }}}
    // {{{ cache

    cache: {},

    // }}}
    // {{{ loadPage

    loadPage: function(pageUrl, noHistory) {

        var page = pageUrl;
        var member;

        Ext.getCmp('container').layout.setActiveItem(1);

        var matches = pageUrl.match(/^(.*?)(?:-(.*))?$/);

        if(matches) {
            page = matches[1];
            member = matches[2];
        }

        if(!noHistory) {
            Docs.History.push("/pages/" + pageUrl);
        }

        if(this.cache[page]) {

            this.showClass(this.cache[page], member);

        } else {

            if(this.getTabPanel()) {
                this.getTabPanel().setLoading(true);
            }

            Ext.data.JsonP.request({
                url: this.getBaseUrl() + '/pages/' + page + '.html',
                callbackName: page.replace(/\./g, '_'),
                success: function(json, opts) {

                    this.cache[page] = json;
                    this.showClass(json, member);

                },

                failure : function(response, opts) {

                    console.log('Fail');

                },
                scope: this
            });
        }
    },

    // }}}
    // {{{ showClass

    showClass: function(cls, anchor) {

        var classOverview = this.getTabPanel().down('classoverview');

        if (this.currentCls != cls) {
            this.getHeader().load(cls);

            // Init overview tab if not already available
            if (!classOverview) {
                classOverview = Ext.create('Docs.view.cls.Overview');
                this.getTabPanel().add(classOverview);
                this.getTabPanel().setActiveTab(0);
            }
            classOverview.load(cls);

            this.getTabPanel().setLoading(false);

            this.getTree().selectClass(cls.name);
            this.fireEvent('showClass', cls.name);
        }

        if (anchor) {
            classOverview.scrollToEl("#" + anchor);
            this.fireEvent('showMember', cls.name, anchor);
        } else {
            classOverview.getEl().down('.x-panel-body').scrollTo('top', 0);
        }

        this.currentCls = cls;
    },

    // }}}
    // {{{ showGuide

    showGuide: function(name, noHistory) {

        noHistory || Docs.History.push("/pages/" + name);

        Ext.data.JsonP.request({
            url: this.getBaseUrl() + "/pages/" + name + "/README.js",
            callbackName: name,
            success: function(json) {
                Ext.getCmp("guide").update(json.guide);
                Ext.getCmp('container').layout.setActiveItem(2);
                Docs.Syntax.highlight(Ext.get("guide"));
                this.fireEvent('showGuide', name);
            },
            scope: this
        });
    },

    // }}}
    // {{{ getBaseUrl

    getBaseUrl: function() {

        return document.location.href.replace(/#.*/, "").replace(/index.html/, "");

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
