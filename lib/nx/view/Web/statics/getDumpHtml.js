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
        data = config.data;

    tpl = tpl.replace(/mbContainer_css/g, urlBase + 'scripts/jquery/jquery.mb.containerPlus/css/mbContainer.css');
    tpl = tpl.replace(/mbContainer_js/g, urlBase + 'scripts/jquery/jquery.mb.containerPlus/inc/mbContainer.js');
    tpl = tpl.replace(/jquery_js/g, urlBase + 'scripts/jquery/jquery.js');
    tpl = tpl.replace(/jquery_ui_js/g, urlBase + 'scripts/jquery/jquery-ui.min.js');
    tpl = tpl.replace(/jquery_cookie_js/g, urlBase + 'scripts/jquery/jquery.mb.containerPlus/inc/jquery.cookie.js');
    tpl = tpl.replace(/jquery_metadata_js/g, urlBase + 'scripts/jquery/jquery.mb.containerPlus/inc/jquery.metadata.js');
    tpl = tpl.replace(/jquery_treeview_js/g, urlBase + 'scripts/jquery/jquery.treeview/jquery.treeview.js');
    tpl = tpl.replace(/jquery_treeview_css/g, urlBase + 'scripts/jquery/jquery.treeview/jquery.treeview.css');

    var normalize = function(o) {

        var ret = [];

        if(NX.isPrimitive(o)) {

            ret.push(o);

        } else if(NX.isObject(o)) {

            NX.iterate(o, function(v, k) {

                if(NX.isPrimitive(k)) {
                    ret.push({key:v, value: k, type:'object'});
                } else {
                    ret.push({key:v, value: normalize(k), type:'object'});
                }

            });

        } else if(NX.isArray(o)) {

            o.forEach(function(item, i) {

                if(NX.isPrimitive(item)) {
                    ret.push({key:i, value:item, type:'array'});
                } else {
                    ret.push({key:i, value: normalize(item), type:'array'});
                }

            });

        }

        return ret;
    };

    var ninfo = [];
    info.forEach(function(dump, i) {
        ninfo.push(normalize(dump.dump));
    });

    var tagalize = function(o, level, id) {

        var ulIndent = (new Array(level * 4 + 1).join(' '));
        var liIndent = (new Array(level * 4 + 4 + 1).join(' '));

        var ret = ulIndent + '<ul>';

        if(level === 0) {
            ret = NX.String.format('{0}<ul id="dump{1}" class="filetree treeview-nx">', ulIndent, id);
        }

        if(level > 20) {
            ret += NX.String.format('{1}<li class="file" style="font-weight:bold; color:red;">[{0}]</li>', 'Object is too deep.', liIndent);
            ret += ulIndent + '</ul>';
            ret += "\n";

            return ret;
        }

        ret += "\n";

        if(NX.isPrimitive(o)) {

            ret += NX.String.format('{1}<li class="file">{0}</li>', o, liIndent);
            ret += "\n";

        } else {

            o.forEach(function(item) {

                var li = liIndent + '<li>';

                if(NX.isObject(item)) {

                    if(item.type === 'array') {
                        li += NX.String.format('<span class="folder">{0}&nbsp;[{1}]</span>', item.key, item.type);
                    } else {
                        li += NX.String.format('<span class="folder">{0}&nbsp;[{1}]</span>', item.key, item.type);
                    }

                    li += "\n";
                    li += tagalize(item.value, ++level);

                    li += liIndent + '</li>';

                } else {
                    li = NX.String.format('{1}<li class="file">{0}</li>', item, liIndent);
                }

                li += "\n";

                ret += li;

            });

        }

        ret += ulIndent + '</ul>';
        ret += "\n";

        return ret;

    }

    var tinfo = [];
    var dumptags = '';
    ninfo.forEach(function(dump, i) {

        var id = i;

        if(info[i].id) {
            id = info[i].id;
        }

        var t = NX.String.format('<div class="dumpid">id:{0}</div>', id);

        t += "\n";
        t += tagalize(dump, 0, i);
        t += "\n";
        t += NX.String.format('<script type="text/javascript">$("#dump{0}").treeview({});</script>', i);
        t += "<br />";

        t += "\n\n";

        dumptags += t;

    });

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
