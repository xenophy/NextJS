/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX Docs
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('../../../lib/NX');
var path = require('path');

// }}}
// {{{ Setting

var LF = String.fromCharCode(10);

var NXDoc = {
    lib: path.normalize(__dirname + '/../../../lib/NX/'),
    manuscript: path.normalize(__dirname + '/../manuscript/'),
    output: path.normalize(__dirname + '/../output/'),
    versions: [],
    manual: [],
    api: [],
    cls: {}
};

// }}}
// {{{ API Doc Template

NXDoc.apiTpl = [
   '<div class="cls">',
    '  <h1>%1$s クラス</h1>',
    '  <div class="desc">%2$s</div>',
    '</div>',
].join(LF);

// }}}
// {{{ Starting Message

console.log('Building xFramework NX Documentations...');

// }}}
// {{{ Scan Versions

NX.each(NX.fs.readdirSync(NXDoc.manuscript), function(file) {

    var s = NX.fs.statSync(NXDoc.manuscript + file);

    if(s.isDirectory()) {
        NXDoc.versions.push(file);
    }

});

// }}}
// {{{ create tree

var genManNode = function(rootPath, targetPath, deploy, outputDir) {

    NX.each(NX.fs.readdirSync(rootPath + targetPath), function(file) {

        var targetFullPath = rootPath + targetPath;
        var outputFullPath = outputDir + targetPath;

        var s = NX.fs.statSync(targetFullPath + file);
        var pi = NX.fs.pathinfo(targetFullPath + file);

        if(s.isDirectory()) {

            if(NX.fs.exists(targetFullPath + file + '/.category.js')) {
                category = NX.fs.readFileSync(targetFullPath + file + '/.category.js', 'utf-8');
                category = NX.decode(category);
            }

            var o = {
                text: category.text,
                dirname: pi['basename'],
                cls: 'doc-node',
                expanded: false,
                children: []
            };

            deploy.push(o);

            // 出力ディレクトリ作成

            if(!NX.fs.exists(outputDir + targetPath + file + '/')) {
                NX.fs.mkdirSync(outputDir + targetPath + file + '/', 0755);
            }

            // 再帰処理
            genManNode(rootPath, targetPath + file + '/', o.children, outputDir);

        } else if(pi['extension'] === 'mdown') {

            // コンテンツディレクトリ名取得
            var cd = pi['dirname'].substr(rootPath.length);

            // コンテンツファイル名取得
            var cf = pi['filename'] + '.html';

            // タイトル取得
            mdown = NX.fs.readFileSync(targetFullPath + file, 'utf8');
            var smdown = NX.str.explode(LF, mdown);
            title = smdown[0];

            // HTML生成
            var html = NX.util.MarkDown.parse(mdown);
            NX.fs.writeFileSync(outputFullPath + cf, html, 'utf8');

            var o = {
                text: title,
                href: cd + '/' + cf,
                cls: 'doc man-node',
                leaf: true
            };

            deploy.push(o);

        }

    });

};

var genApiNode = function(rootPath, targetPath, deploy, outputDir) {

    var targetFullPath = rootPath + targetPath;
    var outputFullPath = outputDir + targetPath;

    // ソースコード解析
    NX.fs.iterate(NXDoc.lib, function(file) {

        if(file.isDir()) {

        } else {

            var filename = file.getFilename();
            var src = NX.fs.readFileSync(file.getFullPath() + '/' + filename, 'utf8');

            if(/@class/.test(src)) {

                var classes = {};
                var clsName = null;
                NX.each(NX.str.explode(LF, src), function(line, cnt) {

                    if(clsName !== null) {
                        classes[clsName].push(line);
                    }

                    var matches = line.match(/@class .+/);
                    if(matches) {

                        line = matches[0];
                        clsName = line.substr('@class '.length);

                        if(!classes[clsName]) {
                            classes[clsName] = [];
                        }

                    }

                });

                NX.iterate(classes, function(clsName, v) {

                    var parentClsName = 'Object';

                    src = NX.str.implode(LF, v);

                    // スーパークラス名取得
                    var matches = src.match(/@extend .+/);
                    if(matches) {
                        var line = matches[0];
                        parentClsName = line.substr('@extend '.length);
                    }

                    if(!NXDoc.cls[clsName]) {
                        NXDoc.cls[clsName] = {
                            _parentClsName: parentClsName,
                            _prop: [],
                            _method: []
                        };
                    }

                    var cls = NXDoc.cls[clsName];
                    var matches = src.match(/@prop .+/g);

                    if(matches) {
                        NX.each(matches, function(prop) {
                            prop = prop.substr('@prop '.length);
                            cls._prop.push({
                                name: prop,
                                extended: false
                            });
                        });
                    }

                    var matches = src.match(/@method .+/g);

                    if(matches) {
                        NX.each(matches, function(method) {
                            method = method.substr('@method '.length);
                            cls._method.push({
                                name: method,
                                extended: false
                            });
                        });
                    }

                });

            }

        }

    });

    var bindExtendMember = function(parent, clsData) {

        if(parent === 'Object') {
            return;
        }

        var parentCls = NXDoc.cls[parent];

        bindExtendMember(parentCls._parentClsName, parentCls);

        NX.each(parentCls._prop, function(prop) {
            clsData._prop.push({
                name: prop.name,
                cls: clsData._parentClsName,
                extended: true
            });
        });

        NX.each(parentCls._method, function(method) {
            clsData._method.push({
                name: method.name,
                cls: clsData._parentClsName,
                extended: true
            });
        });

        NX.asort(clsData._prop, 'name');
        NX.asort(clsData._method, 'name');
    };

    var createNode = function(clsName, ns, clsData, deploy, fullNs) {

        if(ns.length === 0) {

            var htmls = {cls: '', prop: {}, propList: '', method: {}, methodList: ''};

            var dns = NX.str.explode('.', fullNs);

            var tp = path.normalize(targetFullPath + NX.str.implode('/', dns)/* + '/' + clsName*/);
            var file = fullNs + '.html';

            // クラスツリー作成
            var o = {
                text: clsName,
                href: 'api/' + fullNs + '.html',
                cls: 'cls-node api-node',
                expanded: false,
                order: 1,
                children: []
            };

            // クラス定義mdown読み込み
            var mdfile = tp + '/cls.mdown';
            if(NX.fs.exists(mdfile)) {
                mdown = NX.fs.readFileSync(mdfile, 'utf8');
                htmls.cls = NX.util.MarkDown.parse(mdown);
            }

            // 継承合成
            bindExtendMember(clsData._parentClsName, clsData);

            NX.asort(clsData._prop, 'name');
            NX.asort(clsData._method, 'name');

            // プロパティ一覧取得
            NX.each(clsData._prop, function(v) {

                var ttp = tp;

                if(v.extended) {
                    ttp = path.normalize(targetFullPath + v.cls.replace(/\./g, "/"));
                }

                var mdfile = ttp + '/' + v.name + '.prop.mdown';
                var infofile = ttp + '/' + v.name + '.prop.js';

                // 説明文読み込み
                if(NX.fs.exists(mdfile)) {
                    mdown = NX.fs.readFileSync(mdfile, 'utf8');
                    htmls.prop[v.name] = NX.util.MarkDown.parse(mdown);
                }

                // 情報読み込み
                var info = {
                    type: '未定義'
                };
                if(NX.fs.exists(infofile)) {
                    info = NX.fs.readFileSync(infofile, 'utf8');
                    info = NX.decode(info);
                }

                if(v.extended && info.extendedShow === false) {
                    return;
                }

                o.children.push({
                    text: v.name,
                    href: 'api/' + fullNs + '.html#' + v.name,
                    cls: 'prop-node api-node',
                    order: 10,
                    leaf: true
                });

                var extended = v.extended ? 'extended' : 'inherited';
                var propId = fullNs + '-' + v.name;
                var propPath = 'api/' + fullNs + '.html';
                var propName = v.name;
                var propType = info.type;
                var propDesc = '';
                if(htmls.prop[v.name]) {
                    propDesc = '<div class="mdesc">' + htmls.prop[v.name] + '</div>';
                }

                // 開閉設定
                var expandable = false;
                if(propDesc.indexOf('<div class="long">') !== -1) {
                    propDesc += '</div>';
                    expandable = true;
                    extended += ' expandable';
                }

                // 継承クラスへのリンクは未実装
                var propDefined = clsName;
                propDefined = fullNs;

                if(v.extended) {
                    propDefined = v.cls;
                }

                htmls.propList += NX.sprintf([
                    '<tr class="prop-row %1$s">',
                    '  <td class="micon">',
                    '    <a href="#expand" class="exi">&nbsp;</a>',
                    '  </td>',
                    '  <td class="sig">',
                    '    <a id="%2$s"></a>',
                    //'    <b><a href="%3$s">%4$s</a></b> : %5$s',
                    '    <b>%4$s</b> : %5$s',
                    '    %6$s',
                    '  </td>',
                    '  <td class="msource">',
                    '    %7$s',
//                    '    <a href="output/Ext.Component.html#allowDomMove" ext:member="#allowDomMove" ext:cls="Ext.Component">Component</a>',
                    '  </td>',
                    '</tr>'
                ].join(LF),
                    extended,
                    propId,
                    propPath,
                    propName,
                    propType,
                    propDesc,
                    propDefined
                );

            });

            // メソッド一覧取得
            NX.each(clsData._method, function(v) {

                var ttp = tp;

                if(v.extended) {
                    ttp = path.normalize(targetFullPath + v.cls.replace(/\./g, "/"));
                }

                var mdfile = ttp + '/' + v.name + '.method.mdown';
                var infofile = ttp + '/' + v.name + '.method.js';

                // 説明文読み込み
                if(NX.fs.exists(mdfile)) {
                    mdown = NX.fs.readFileSync(mdfile, 'utf8');
                    htmls.method[v.name] = NX.util.MarkDown.parse(mdown);
                }

                // 情報読み込み
                var info = {
                    type: '未定義'
                };


                if(NX.fs.exists(infofile)) {
                    info = NX.fs.readFileSync(infofile, 'utf8');
                    info = NX.decode(info);
                }

                if(v.extended && info.extendedShow === false) {
                    return;
                }

                // パラメータ情報取得
                var params = {};
                NX.each(info.param, function(pn) {

                    var mdfile = ttp + '/' + v.name + '/' + pn + '.mdown';
                    var infofile = ttp + '/' + v.name + '/' + pn + '.js';

                    var type = '';
                    var desc = '';

                    // 説明文読み込み
                    if(NX.fs.exists(mdfile)) {
                        mdown = NX.fs.readFileSync(mdfile, 'utf8');
                        desc = NX.util.MarkDown.parse(mdown);
                    }

                    // 情報読み込み
                    var info = {
                        type: '未定義'
                    };

                    if(NX.fs.exists(infofile)) {
                        info = NX.fs.readFileSync(infofile, 'utf8');
                        info = NX.decode(info);
                    }

                    params[pn] = {
                        name: pn,
                        type: info.type,
                        option: info.option,
                        desc: desc
                    };

                });

                o.children.push({
                    text: v.name,
                    href: 'api/' + fullNs + '.html#' + v.name,
                    cls: 'method-node api-node',
                    order: 11,
                    leaf: true
                });

                var extended = v.extended ? 'extended' : 'inherited';
                var methodId = fullNs + '-' + v.name;
                var methodPath = 'api/' + fullNs + '.html';
                var methodName = v.name;
                var methodArgs = ' : ' + info.return;

                var args = '';
                var cnt = 0;
                NX.iterate(params, function(key, v) {

                    if(cnt > 0) {
                        args += ', ';
                    }

                    if(v.option == true) {
                        args += '[' + v.type + ' ' + key + ']';
                    } else {
                        args += v.type + ' ' + key;
                    }

                    cnt++;

                });

                methodArgs = '(' + args + ')' + methodArgs;

                var methodDesc = '';
                methodDesc += '<div class="mdesc">';
                if(htmls.method[v.name]) {
                    methodDesc += htmls.method[v.name];
                }

                // 開閉設定
                if(methodDesc.indexOf('<div class="long">') === -1) {
                    methodDesc = methodDesc + '<div class="long">';
                }

                // パラメータ情報出力
                var paramList = '';
                paramList += '<div class="params">';
                paramList += '<strong>パラメータ:</strong>';
                paramList += '<ul>';

                var pc = 0;
                NX.iterate(params, function(key, v) {

                    paramList += '<li>';

                    if(v.option == true) {
                        paramList += '  ' + key + ':' + v.type;
                    } else {
                        paramList += '  ' + key + ':' + v.type;
                    }
                    paramList += '  <ul>';
                    paramList += '    <li>';

                    if(v.option == true) {
                        paramList += ' (オプション) ' + v.desc;
                    } else {
                        paramList += '      ' + v.desc;
                    }

                    paramList += '    </li>';
                    paramList += '  </ul>';
                    paramList += '</li>';

                    pc++;

                });

                paramList += '</ul>';

                if(pc === 0) {
                    paramList = '';
                    paramList += '<div class="params">';
                }

                var mdfile = tp + '/' + v.name + '/' + 'return.mdown';
                var desc = '';
                // 説明文読み込み
                if(NX.fs.exists(mdfile)) {
                    mdown = NX.fs.readFileSync(mdfile, 'utf8');
                    desc = NX.util.MarkDown.parse(mdown);
                }

                paramList += '<strong>戻り値:</strong>';
                paramList += '<ul>';
                paramList += '  <li>';
                paramList += '  ' + info.return;
                paramList += '  <ul>';
                paramList += '    <li>';
                paramList += '    ' + desc;
                paramList += '    </li>';
                paramList += '  </ul>';
                paramList += '  </li>';
                paramList += '</ul>';

                paramList += '</div>';

                methodDesc += paramList;
                methodDesc += '</div>';

                // 開閉設定
                methodDesc += '</div>';

//                methodDesc = '<div ="long">' + methodDesc + '</div>';

                // 継承クラスへのリンクは未実装
                var methodDefined = clsName;
                methodDefined = fullNs;

                if(v.extended) {
                    methodDefined = v.cls;
                }

                htmls.methodList += NX.sprintf([
                    '<tr class="method-row %1$s expandable">',
                    '  <td class="micon">',
                    '    <a href="#expand" class="exi">&nbsp;</a>',
                    '  </td>',
                    '  <td class="sig">',
                    '    <a id="%2$s"></a>',
                    '    <b>%4$s</b>%5$s',
                    '    %6$s',
                    '  </td>',
                    '  <td class="msource">',
                    '    %7$s',
//                    '    <a href="output/Ext.Component.html#allowDomMove" ext:member="#allowDomMove" ext:cls="Ext.Component">Component</a>',
                    '  </td>',
                    '</tr>'
                ].join(LF),
                    extended,
                    methodId,
                    methodPath,
                    methodName,
                    methodArgs,
                    methodDesc,
                    methodDefined
                );

            });

            var apiTpl = [
                /*
                '<div class="nav">',
                '<ul>',
                '   <li class="prop">',
                '     <a class="inner-link" href="' + fullNs + '">プロパティ</a>',
                '   </li>',
                '   <li class="method">',
                '     <a class="inner-link" href="' + fullNs + '">メソッド</a>',
                '   </li>',
                '   <li class="direct">',
                '     <a class="inner-link" href="' + fullNs + '">ダイレクトリンク</a>',
                '   </li>',
                '</ul>',
                '</div>',
                */
            ].join(LF) + NXDoc.apiTpl;

            // HTML出力
            var html = '<div class="api-doc">' + NX.sprintf(apiTpl, fullNs, htmls.cls) + LF;

            // プロパティ出力
            if(htmls.propList != '') {
                html += NX.sprintf([
                    '<a id="' + fullNs + '-props"></a>',
                    '<h2>プロパティ</h2>',
                    '<table cellspacing="0" class="member-table">',
                    '<tr>',
                    '  <th colspan="2" class="sig-header caption">プロパティ</th>',
                    '  <th class="sig-header defined">定義クラス</th>',
                    '</tr>',
                    '%1$s',
                    '</table>'
                ].join(LF), htmls.propList);
            }

            // メソッド出力
            if(htmls.methodList != '') {
                html += NX.sprintf([
                    '<a id="' + fullNs + '-methods"></a>',
                    '<h2>メソッド</h2>',
                    '<table cellspacing="0" class="member-table">',
                    '<tr>',
                    '  <th colspan="2" class="sig-header caption">メソッド</th>',
                    '  <th class="sig-header defined">定義クラス</th>',
                    '</tr>',
                    '%1$s',
                    '</table>'
                ].join(LF), htmls.methodList);
            }

            html += '</div>';

            NX.fs.writeFileSync(outputFullPath + file, html, 'utf8');

            // オブジェクト追加
            deploy.push(o);

        } else {

            var pkgName = ns[0];

            ns.splice(0, 1);

            var exists = false;
            NX.each(deploy, function(item) {

                if(item.text === pkgName) {
                    exists = item;
                    return false;
                }

            });

            if(!exists) {

                // パッケージツリー作成
                var o = {
                    href: 'pkg-' + fullNs,
                    text: pkgName,
                    cls: 'pkg-node',
                    expanded: false,
                    order: 0,
                    children: []
                };

                deploy.push(o);

            } else {
                o = exists;
            }

            createNode(clsName, ns, clsData, o.children, fullNs);
        }

        NX.asort(deploy, 'order');

    };

    NX.iterate(NXDoc.cls, function(key, v) {

        var ns = NX.str.explode('.', key);
        var clsName = ns[ns.length -1];

        ns.splice(ns.length -1, 1);

        if(ns.length > 0) {
            ns.splice(0, 1);
        }

        createNode(clsName, ns, v, deploy, key);

    });

};

NX.each(NXDoc.versions, function(version) {

    NXDoc.manual[version] = [];
    NXDoc.api[version] = [];

    var targetDir = NXDoc.manuscript + version + '/';
    var outputDir = NXDoc.output + version + '/';

    if(NX.fs.exists(outputDir)) {
//        NX.fs.rmdirSync(outputDir);
    } else {
        NX.fs.mkdirSync(outputDir, 0755);
    }

    if(NX.fs.exists(outputDir + 'man/')) {
//        NX.fs.rmdirSync(outputDir + 'man/');
    } else {
        NX.fs.mkdirSync(outputDir + 'man/', 0755);
    }

    if(NX.fs.exists(outputDir + 'api/')) {
//        NX.fs.rmdirSync(outputDir + 'api/');
    } else {
        NX.fs.mkdirSync(outputDir + 'api/', 0755);
    }

    // マニュアルノード生成
    genManNode(targetDir, 'man/', NXDoc.manual[version], outputDir);

    var manNode = 'Ext.docs.man = ' + NX.encode(NXDoc.manual[version]) + ';';
    NX.fs.writeFileSync(outputDir + '/man.js', manNode, 'utf-8');

    // APIノード生成
    genApiNode(targetDir, 'api/', NXDoc.api[version], outputDir);

    var apiNode = 'Ext.docs.api = ' + NX.encode(NXDoc.api[version]) + ';';
    NX.fs.writeFileSync(outputDir + '/api.js', apiNode, 'utf-8');

});

// }}}
// {{{ Ending Message

console.log('Done.');

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
