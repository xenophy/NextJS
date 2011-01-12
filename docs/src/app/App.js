/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX Docs
 *
 * http://xFrameworknx.com
 */

// {{{ Namespace

Ext.ns(
    'Ext.docs',
    'Ext.docs.wiki',
    'Ext.docs.api'
);

// }}}
// {{{ Ext.app.App

/**
 * Ext.app.App
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 */
Ext.app.App = function(cfg) {

    var me = this;

    Ext.apply(me, cfg);

    me.addEvents({
        'ready' : true,
        'beforeunload' : true
    });

    Ext.onReady(me.initApp, me);
};

Ext.extend(Ext.app.App, Ext.util.Observable, {

    // {{{ scrollToMember

    scrollToMember : function(clsName, member) {

        var me = this;
        var el = Ext.get(clsName + '-' + member);

        if(el) {
            var top = (el.getOffsetsTo(me.docBody.dom)[1]) + me.docBody.dom.scrollTop;
            me.docBody.scrollTo(
                'top',
                top-25,
                {
                    duration: 0.25,
                    callback: function() {
                        var tr = null;
                        if(tr = el.up('tr')) {
                            if(tr.hasClass('expandable')){
                                if(!tr.hasClass('expanded')){
                                    tr.addClass('expanded');
                                }
                            }
                            tr.highlight('#cadaf9');
                        }
                    }
                }
            );
        }
    },

    // }}}
    // {{{ opendoc

    opendoc: function(id, node) {

        var pos = id.indexOf('#');
        var path = id;
        var hash = '';

        if(pos !== -1) {
            hash = path.substr(pos + 1);
            path = path.substr(0, pos);
        }

        var clsName = path.substr('api/'.length);
        clsName = clsName.substr(0, clsName.length - '.html'.length);

        if(me.currentHtml != path) {
            me.viewport.main.load({
                url: 'resources/output/v' + me.version + '/' + id,
                callback: function() {

                    var pre = me.docBody.select('pre');

                    pre.each(function(el) {
                        var src = el.dom.innerHTML;
                        sh_highlightElement(el.dom, sh_languages['javascript']);
                    });

                    me.currentHtml = path;
                    me.scrollToMember(clsName, hash);
                }
            });
        } else {
            me.scrollToMember(clsName, hash);
        }
    },

    // }}}
    // {{{ initApp

    initApp : function() {

        var me = this;

        // クイックチップ初期化
        Ext.QuickTips.init();

        // ビューポート生成
        me.viewport = new Ext.Viewport({

            // レイアウト設定
            layout: 'border',

            // アイテム設定
            items: [{

                // リージョン設定
                region: 'north',

                // xtype設定
                xtype: 'header',

                // ID設定
                id: 'header'

            },{

                // リージョン設定
                region: 'west',

                // xtype設定
                xtype: 'nav',

                // ID設定
                id: 'nav',

                // 参照設定
                ref: 'nav',

                // サイズ設定
                width: 265,
                minSize: 175,
                maxSize: 400,

                // スプリット設定
                split:true,

                // マージン設定
                margins:'0 0 5 5',
                cmargins:'0 5 5 5',

                // 自動スクロール設定
                autoScroll:true,

                // リスナー設定
                listeners: {
                    doctype: function(type) {
                        me.viewport.main.changeBottomToolbar.call(me.viewport.main, type);
                    },
                    opendoc: {
                        fn: function(id, node) {

                            var pos = id.indexOf('#');
                            var path = id;
                            var hash = '';

                            if(pos !== -1) {
                                hash = path.substr(pos + 1);
                                path = path.substr(0, pos);
                            }

                            var clsName = path.substr('api/'.length);
                            clsName = clsName.substr(0, clsName.length - '.html'.length);

                            if(me.currentHtml != path) {
                                me.viewport.main.load({
                                    url: 'resources/output/v' + me.version + '/' + id,
                                    callback: function() {

                                        var pre = me.docBody.select('pre');

                                        pre.each(function(el) {
                                            var src = el.dom.innerHTML;
                                            sh_highlightElement(el.dom, sh_languages['javascript']);
                                        });

                                        me.currentHtml = path;
                                        me.scrollToMember(clsName, hash);
                                    }
                                });
                            } else {
                                me.scrollToMember(clsName, hash);
                            }
                        },
                        scope: me
                    }
                }

            },{

                // リージョン設定
                region: 'center',

                // xtype設定
                xtype: 'main',

                // ID設定
                id: 'doc-body',

                // 参照設定
                ref: 'main',

                // マージン設定
                margins:'0 5 5 0',
                cmargins:'0 5 5 0',

                listeners: {
                    afterrender: function(p) {
                        me.docBody = p.body;

                        me.docBody.on('click', function(e, t) {

                            var t = e.getTarget('.inner-link');

                            if(t) {

                                var t = Ext.get(t);
                                var id = t.getAttribute('href');

                                if(t.up('li.prop')) {
                                    me.scrollToMember(id, 'props');
                                } else if(t.up('li.method')) {
                                    me.scrollToMember(id, 'methods');
                                } else if(t.up('li.direct')) {
                                    Ext.Msg.alert(
                                        'ダイレクトリンク : ' + id,
                                        '<a target="_blank" href="http://' + location.host + location.pathname + '?class=' + id + '">http://' + location.host + location.pathname + '?class=' + id + '</a>'
                                    );
                                }

                                e.stopEvent();
                            }

                        });


                        if(location.search) {

                            var q = Ext.urlDecode(location.search.substr(1));
                            console.log(q);

                            p.load({
                                url: 'resources/output/v' + me.version + '/api/' + q.class + '.html',
                                callback: function() {

                                    if(q.member) {
                                        me.scrollToMember(q.class, q.member);
                                    }

                                }
                            });

                        }



                    }
                }

            },{

                // リージョン設定
                region: 'south',

                // xtype設定
                xtype: 'footer',

                // ID設定
                id: 'footer'

            }]

        });

        /*
        var firstNode;
        me.viewport.nav.root.findChildBy(function(node) {

                console.log(node);
            if(node.isLeaf() && !firstNode) {
                firstNode = node;
                return;
            }


//            console.log(node.text);
//            node.expand();
        }, me, true);
        firstNode.select();
        var t = Ext.get(firstNode.getUI().getEl());
        var a = t.child('a');
        me.viewport.nav.fireEvent('opendoc', a.getAttribute('href'), firstNode);
        */

    }

    // }}}

});

// }}}
// {{{ Start Application

Application = new Ext.app.App({version: '0.1.0'});

// }}}

/**
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
