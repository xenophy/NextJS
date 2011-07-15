/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.tpl.Include.get

module.exports = function(s, bind, next) {

    var me = this,
        parent = me.parent;

    var op = me.op.substring(parent.ldelim.length);
        op = op.substring(0, op.length - parent.rdelim.length);

    var tmp = op.match(/'.*? *?'/g);

    tmp.forEach(function(item){

        var repl = item.replace(/ /g, '&nbsp;');
        op = op.replace(item, repl);

    });

    op = op.split(' ');
    op.shift();

    params = {};

    var file;

    op.forEach(function(item) {

        item = item.split('=');

        var name = NX.util.Format.trim(item[0]);
        var value = NX.util.Format.trim(item[1]);

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

    NX.Fs.readFile(file, 'utf8' , function(err, data) {

        var html = '';
        var tpl = new NX.Template(parent.initialConfig);

        tpl.fetch(data, params, function(ret) {
            next.html += ret;
            next();
        });

    });

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
