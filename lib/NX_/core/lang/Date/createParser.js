/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.createParser

module.exports = (function() {

    var code = [
        "var dt, y, m, d, h, i, s, ms, o, z, zz, u, v,",
        "def = NX.Date.defaults,",
        "results = String(input).match(NX.Date.parseRegexes[{0}]);",

        "if(results){",

            "{1}",
            "if(u != null){",
                "v = new Date(u * 1000);",
            "}else{",
                "dt = NX.Date.clearTime(new Date);",
                "y = NX.Number.from(y, NX.Number.from(def.y, dt.getFullYear()));",
                "m = NX.Number.from(m, NX.Number.from(def.m - 1, dt.getMonth()));",
                "d = NX.Number.from(d, NX.Number.from(def.d, dt.getDate()));",
                "h  = NX.Number.from(h, NX.Number.from(def.h, dt.getHours()));",
                "i  = NX.Number.from(i, NX.Number.from(def.i, dt.getMinutes()));",
                "s  = NX.Number.from(s, NX.Number.from(def.s, dt.getSeconds()));",
                "ms = NX.Number.from(ms, NX.Number.from(def.ms, dt.getMilliseconds()));",
                "if(z >= 0 && y >= 0) {",
                    "v = NX.Date.add(new Date(y < 100 ? 100 : y, 0, 1, h, i, s, ms), NX.Date.YEAR, y < 100 ? y - 100 : 0);",
                    "v = !strict? v : (strict === true && (z <= 364 || (NX.Date.isLeapYear(v) && z <= 365))? NX.Date.add(v, NX.Date.DAY, z) : null);",
                "} else if(strict === true && !NX.Date.isValid(y, m + 1, d, h, i, s, ms)){",
                    "v = null;",
                "} else {",
                    "v = NX.Date.add(new Date(y < 100 ? 100 : y, m, d, h, i, s, ms), NX.Date.YEAR, y < 100 ? y - 100 : 0);",
                "}",
            "}",
        "}",

        "if(v){",
            "if(zz != null){",
                "v = NX.Date.add(v, NX.Date.SECOND, -v.getTimezoneOffset() * 60 - zz);",
            "} else if(o) {",
                "v = NX.Date.add(v, NX.Date.MINUTE, -v.getTimezoneOffset() + (sn == '+'? -1 : 1) * (hr * 60 + mn));",
            "}",
        "}",

        "return v;"

    ].join('\n');

    return function(format) {

        var me = this;
        var regexNum = NX.Date.parseRegexes.length,
            currentGroup = 1,
            calc = [],
            regex = [],
            special = false,
            ch = "";

        for(var i = 0; i < format.length; ++i) {

            ch = format.charAt(i);

            if(!special && ch == "\\") {

                special = true;

            } else if(special) {

                special = false;
                regex.push(NX.String.escape(ch));

            } else {

                var obj = NX.Date.formatCodeToRegex(ch, currentGroup);

                currentGroup += obj.g;

                regex.push(obj.s);

                if(obj.g && obj.c) {

                    calc.push(obj.c);

                }
            }
        }

        NX.Date.parseRegexes[regexNum] = new RegExp("^" + regex.join('') + "$", 'i');
        NX.Date.parseFunctions[format] = NX.functionFactory("input", "strict", me.$xf(code, regexNum, calc.join('')));
    };

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
