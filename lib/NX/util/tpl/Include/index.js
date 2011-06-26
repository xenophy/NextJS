/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.tpl

NX.define('NX.util.tpl.Include', {

    // {{{ constructor

    constructor : function(config) {

        config = config || {};

        var me = this;

        NX.apply(me, config);
    },

    // }}}
    // {{{ get

    get : function() {

        var me = this,
        parent = me.parent;
        var op = me.op.substring(parent.ldelim.length);
        op = op.substring(0, op.length - parent.rdelim.length);
        var tmp = op.match(/'.*? *?'/g);

        tmp.forEach(function(item){

            var repl = item.replace(/ /g, '&nbsp;');
            op = op.replace(item, repl);

        });

        op = NX.explode(' ', op);
        op.shift();

        params = {};

        var file;

        op.forEach(function(item) {
            item = item.split('=');
            var name = NX.trim(item[0]);
            var value = NX.trim(item[1]);

            if(value.toLowerCase() === 'true') {
                value = true;
            } else if(value.toLowerCase() === 'false') {
                value = false;
            } else {
                try{
                    eval('value = me.bind.' + value);
                } catch(e) {
                    try{
                        eval('value = ' + value + ';');
                    } catch(e) {
                    }
                }
            }

            if(name == 'file') {
                file = value;
            } else {
                params[name] = value;
            }
        });

        file = parent.path + '/templates/' + file;

        // TODO:ファイルの読み込みは非同期で行うように全体構造を見直す。

        file = require('fs').readFileSync(file, 'utf8');

        var html = '';

        var tpl = new NX.Template(parent.initialConfig);

        html = tpl.fetch(file, params);

        return html;
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
