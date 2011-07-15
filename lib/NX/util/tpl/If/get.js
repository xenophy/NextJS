/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.tpl.If.get

var isFine = require('./isFine');

module.exports = function(next) {

    var me = this,
        op = me.op,
        parent = me.parent,
        ldelim = parent.ldelim,
        rdelim = parent.rdelim,
        trim = NX.util.Format.trim;

    var condOp = ['===', '!==', '==', '!=', '>=', '<=', '!', '%', '>', '<'];
    var cond = '';

    condOp.forEach(function(cop, i) {

        if(i > 0) {
            cond += '|';
        }

        cond += NX.String.escapeRegex(cop);
    });

    var condOperatorRe = new RegExp('(' + cond + ')', '');
    var op = op.substring(ldelim.length);

    op = op.substring(0, op.length - rdelim.length);
    op = op.split(' ');
    op.shift();
    op = op.join(' ');
    op = op.split(/(and|or)/);

    /*
    op.forEach(function(item, i) {

        item = item.toLowerCase();

        if(
            item === 'and' ||
            item === 'or' ||
            item === '&&' ||
            item === '||'
        ) {

            op[i] = '';

        } else {

            op[i] = trim(item);

        }
    });
    */

    var tmp = [];

    op.forEach(function(item, i) {

        if(item !== '') {

            tmp.push(item);

        }

    });
    op = tmp;

    var conds = op;
    var fine = true;

    //var prev_op;
    var next_op;

    var skip = false;
    conds.forEach(function(item, i) {

        if(skip) {
            return;
        }

        if(item === 'and' || item === 'or') {
            return;
        }

        /*
        if(conds[i-1] === 'and') {
            prev_op = 'and';
        } else if(conds[i-1] === 'or') {
            prev_op = 'or';
        }
        */

        if(conds[i+1] === 'and') {
            next_op = 'and';
        } else if(conds[i+1] === 'or') {
            next_op = 'or';
        }

        // 比較演算子で分割
        item = item.split(condOperatorRe);

        item.forEach(function(v, j) {

            item[j] = trim(v);

        });

        var L  = item[0],
            op = item[1];
            R  = item[2];

        // 項目を実体化
        if(L) {

            L = L.toLowerCase();

            if(L === 'true') {

                L = true;

            } else if(L === 'false') {

                L = false;

            } else {

                try{

                    eval('L = me.bind.' + L);

                } catch(e) {

                    eval('L = ' + L + ';');

                }
            }
        }

        if(R) {

            R = R.toLowerCase();

            if(R === 'true') {

                R = true;

            } else if(R === 'false') {

                R = false;

            } else {

                try{

                    eval('R = me.bind.' + R);

                } catch(e) {

                    eval('R = ' + R + ';');

                }
            }
        }

        if(isFine(op, L, R) === false) {

            fine = false;

            if(next_op === 'and') {
                skip = true;
            }

        } else {

            if(next_op === 'or') {
                fine = true;
                skip = true;
            }

        }

    });

    var html = '';

    // ネストしたifを持たないテンプレートの場合
    var elseText = '';

    if(me.v.indexOf(ldelim + 'elseif') !== -1) {

        // elseifの場合、ifを削除して、elseifを条件文として再帰処理
        var pos = me.v.indexOf(ldelim + 'elseif');
        var v = me.v.substr(pos + (ldelim + 'elseif').length);
        me.v = ldelim + 'if' + v + ldelim + '/if' + rdelim;

        fine = true;

    } else if(me.v.indexOf(parent.ldelim + 'else' + parent.rdelim) !== -1) {

        // elseがある場合分割
        var v = me.v.split(parent.ldelim + 'else' + parent.rdelim);

        if(v.length > 1) {

            elseText = v[1];

        }
        me.v = v[0];

    }

    if(fine) {

        var tpl = new NX.Template(parent.initialConfig);
        var bind = me.bind;

        tpl.fetch(me.v, bind, function(ret) {
            next.html += ret;
            next();
        });

    } else {

        var tpl = new NX.Template(parent.initialConfig);
        var bind = me.bind;

        tpl.fetch(elseText, bind, function(ret) {
            next.html += ret;
            next();
        });

    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
