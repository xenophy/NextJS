/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.parseCodes

module.exports = {

    d: {
        g: 1,
        c: "d = parseInt(results[{0}], 10);\n",
        s: "(\\d{2})"
    },

    j: {
        g:1,
        c:"d = parseInt(results[{0}], 10);\n",
        s:"(\\d{1,2})"
    },

    D: function() {

        for(var a = [], i = 0; i < 7; a.push(NX.Date.getShortDayName(i)), ++i);

        return {
            g: 0,
            c: null,
            s: "(?:" + a.join("|") +")"
        };
    },

    l: function() {

        return {
            g: 0,
            c: null,
            s: "(?:" + NX.Date.dayNames.join("|") + ")"
        };
    },

    N: {
        g: 0,
        c: null,
        s: "[1-7]"
    },

    S: {
        g: 0,
        c: null,
        s: "(?:st|nd|rd|th)"
    },

    w: {
        g: 0,
        c: null,
        s: "[0-6]"
    },

    z: {
        g: 1,
        c: "z = parseInt(results[{0}], 10);\n",
        s: "(\\d{1,3})"
    },

    W: {
        g: 0,
        c: null,
        s: "(?:\\d{2})"
    },

    F: function() {

        return {
            g: 1,
            c: "m = parseInt(NX.Date.getMonthNumber(results[{0}]), 10);\n",
            s: "(" + NX.Date.monthNames.join("|") + ")"
        };

    },

    M: function() {

        for(var a = [], i = 0; i < 12; a.push(NX.Date.getShortMonthName(i)), ++i);

        return NX.applyIf({
            s:"(" + a.join("|") + ")"
        }, NX.Date.formatCodeToRegex("F"));
    },

    m: {
        g: 1,
        c: "m = parseInt(results[{0}], 10) - 1;\n",
        s: "(\\d{2})"
    },

    n: {
        g: 1,
        c: "m = parseInt(results[{0}], 10) - 1;\n",
        s: "(\\d{1,2})"
    },

    t: {
        g: 0,
        c: null,
        s: "(?:\\d{2})"
    },

    L: {
        g: 0,
        c: null,
        s: "(?:1|0)"
    },

    o: function() {
        return NX.Date.formatCodeToRegex("Y");
    },

    Y: {
        g: 1,
        c: "y = parseInt(results[{0}], 10);\n",
        s: "(\\d{4})"
    },

    y: {
        g: 1,
        c: "var ty = parseInt(results[{0}], 10);\n"
           + "y = ty > NX.Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
        s: "(\\d{1,2})"
    },

    a: {
        g: 1,
        c: "if (/(am)/i.test(results[{0}])) {\n"
           + "if (!h || h == 12) { h = 0; }\n"
           + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
        s: "(am|pm|AM|PM)"
    },

    A: {
        g: 1,
        c: "if (/(am)/i.test(results[{0}])) {\n"
            + "if (!h || h == 12) { h = 0; }\n"
            + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
        s: "(AM|PM|am|pm)"
    },

    g: function() {
        return NX.Date.formatCodeToRegex("G");
    },

    G: {
        g: 1,
        c: "h = parseInt(results[{0}], 10);\n",
        s: "(\\d{1,2})"
    },

    h: function() {
        return NX.Date.formatCodeToRegex("H");
    },

    H: {
        g: 1,
        c: "h = parseInt(results[{0}], 10);\n",
        s: "(\\d{2})"
    },

    i: {
        g: 1,
        c: "i = parseInt(results[{0}], 10);\n",
        s: "(\\d{2})"
    },

    s: {
        g: 1,
        c: "s = parseInt(results[{0}], 10);\n",
        s: "(\\d{2})"
    },

    u: {
        g: 1,
        c: "ms = results[{0}]; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n",
        s: "(\\d+)"
    },

    O: {
        g: 1,
        c: [
            "o = results[{0}];",
            "var sn = o.substring(0,1),",
            "hr = o.substring(1,3)*1 + Math.floor(o.substring(3,5) / 60),",
            "mn = o.substring(3,5) % 60;",
            "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + NX.String.leftPad(hr, 2, '0') + NX.String.leftPad(mn, 2, '0')) : null;\n" // -12hrs <= GMT offset <= 14hrs
            ].join("\n"),
            s: "([+\-]\\d{4})"
        },
        P: {
            g: 1,
            c: [
                "o = results[{0}];",
                "var sn = o.substring(0,1),",
                "hr = o.substring(1,3)*1 + Math.floor(o.substring(4,6) / 60),",
                "mn = o.substring(4,6) % 60;",
                "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + NX.String.leftPad(hr, 2, '0') + NX.String.leftPad(mn, 2, '0')) : null;\n" // -12hrs <= GMT offset <= 14hrs
                ].join("\n"),
                s: "([+\-]\\d{2}:\\d{2})"
            },
            T: {
                g: 0,
                c: null,
                s: "[A-Z]{1,4}"
            },
            Z: {
                g: 1,
                c: "zz = results[{0}] * 1;\n"
                   + "zz = (-43200 <= zz && zz <= 50400)? zz : null;\n",
                s: "([+\-]?\\d{1,5})"
            },
            c: function() {

                var calc = [],
                arr = [
                    NX.Date.formatCodeToRegex("Y", 1),
                    NX.Date.formatCodeToRegex("m", 2),
                    NX.Date.formatCodeToRegex("d", 3),
                    NX.Date.formatCodeToRegex("h", 4),
                    NX.Date.formatCodeToRegex("i", 5),
                    NX.Date.formatCodeToRegex("s", 6),
                    {c:"ms = results[7] || '0'; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n"},
                    {
                        c:[
                            "if(results[8]) {",
                                "if(results[8] == 'Z'){",
                                    "zz = 0;",
                                "} else if (results[8].indexOf(':') > -1){",
                                    NX.Date.formatCodeToRegex("P", 8).c,
                                "} else {",
                                    NX.Date.formatCodeToRegex("O", 8).c,
                                "}",
                            "}"
                        ].join('\n')
                    }
                ];

                for(var i = 0, l = arr.length; i < l; ++i) {
                    calc.push(arr[i].c);
                }

                return {
                    g: 1,
                    c: calc.join(""),
                    s:[
                        arr[0].s,
                        "(?:", "-", arr[1].s,
                        "(?:", "-", arr[2].s,
                        "(?:",
                        "(?:T| )?",
                        arr[3].s, ":", arr[4].s,
                        "(?::", arr[5].s, ")?",
                        "(?:(?:\\.|,)(\\d+))?",
                        "(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?",
                        ")?",
                        ")?",
                        ")?"
                    ].join("")
                };
            },
            U: {
                g: 1,
                c: "u = parseInt(results[{0}], 10);\n",
                s: "(-?\\d+)"
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
