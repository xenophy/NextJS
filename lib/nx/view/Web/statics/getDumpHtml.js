/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.statics.getDumpHtml

module.exports = function(config) {

    var urlBase = config.urlBase,
        info = config.info,
        tpl = config.tpl,
        data = config.data,
        verify;

    // {{{ 多階層チェックと再帰チェック

    verify = function(o, depth, dupList) {

        var ret;

        if(depth > 20) {
            ret = '[too deep.]';
            return ret;
        }

        depth++;

        if(NX.isArray(o)) {

            ret = [];

            o.forEach(function(item) {
                ret.push(verify(item, depth, dupList));
            });

        } else if(NX.isObject(o)) {

            var skip = false,
                exists = false;

            dupList.forEach(function(item) {
                if(item.obj === o) {
                    exists = true;
                }
            });

            if(exists) {

                var tmp = [];
                dupList.forEach(function(item) {
                    if(item.deep < depth) {
                        tmp.push(item.obj);
                    }
                });

                tmp = tmp.filter(function(item, index, arr) {
                    return item === o;
                }, o);

                if(tmp.length > 1) {
                    ret = '[circular]';
                    skip = true;
                }

            }

            if(skip === false) {

                ret = {};

                NX.iterate(o, function(key, item) {
                    ret[key] = verify(item, depth, dupList);
                });

                dupList.push({deep: depth, obj: o});

            }

        } else if(NX.isPrimitive(o)) {

            ret = o;

        }

        return ret;

    };

    info.forEach(function(item) {
        item.dump = verify(item.dump, 0, []);
    });

    // 出力整形

    var output = {};

    dumptags = '';
    info.forEach(function(item) {

        var key = NX.String.format('[Line: {0}, {1}]', item.line, item.filename);

        dumptags += NX.String.format('console.info("{0}");', key);
        dumptags += NX.String.format('console.dir({0});', NX.JSON.encode(item.dump));

    });

    // }}}

    tpl = tpl.replace(/dumptags/g, dumptags);

    var tmp = data.toLowerCase();
    var pos = data.indexOf('</html>');

    if(pos !== -1) {

        var newData = data.substr(0, pos);
        newData += tpl.toString() + data.substr(pos);
        data = newData;

    } else {

        data += tpl.toString();

    }

    return data;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
