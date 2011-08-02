/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.tpl.Include.get

module.exports = function(next) {

    var me = this,
        trim = NX.util.Format.trim,
        parent = me.parent,
        file,
        ldelim = parent.ldelim,
        rdelim = parent.rdelim,
        op = me.op.substring(ldelim.length);

    op = op.substring(0, op.length - rdelim.length);

    var tmp = op.match(/'.*? *?'/g);

    tmp.forEach(function(item) {
        op = op.replace(item, item.replace(/ /g, '&nbsp;'));
    });

    op = op.split(' ');
    op.shift();

    params = {};

    op.forEach(function(item) {

        item = item.split('=');

        var name = trim(item[0]);
        var value = trim(item[1]);

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

        var tpl = NX.create('NX.Template', parent.initialConfig);

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
