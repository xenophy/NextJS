/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.log

module.exports = NXLog = function (message) {

            // TODO: NX.Logクラスを作成して、出力先などを指定できるように実装すること。

            /*
            var options, dump,
                con = NX.global.console,
                log = NX.log,
                level = 'log',
                stack,
                members,
                member;

            if (!NX.isString(message)) {

                options = message;
                message = options.msg || '';
                level = options.level || level;
                dump = options.dump;
                stack = options.stack;

                if (dump && !(con && con.dir)) {

                    members = [];

                    NX.Object.each(dump, function (name, value) {

                        if (typeof(value) === "function") {
                            return;
                        }

                        if (!NX.isDefined(value) || value === null ||
                                NX.isDate(value) ||
                                NX.isString(value) || (typeof(value) == "number") ||
                                NX.isBoolean(value)) {
                            member = NX.encode(value);
                        } else if (NX.isArray(value)) {
                            member = '[ ]';
                        } else if (NX.isObject(value)) {
                            member = '{ }';
                        } else {
                            member = 'undefined';
                        }
                        members.push(NX.encode(name) + ': ' + member);
                    });

                    if (members.length) {
                        message += ' \nData: {\n  ' + members.join(',\n  ') + '\n}';
                    }
                    dump = null;
                }
            }

            if (arguments.length > 1) {
                message += Array.prototype.slice.call(arguments, 1).join('');
            }

            if (con[level]) {
                con[level](message);
            } else {
                con.log(message);
            }

            if (dump) {
                con.dir(dump);
            }

            if (stack && con.trace) {

                if (level != 'error') {
                    con.trace();
                }
            }

            var counters = log.counters || (log.counters = { error: 0, warn: 0, info: 0, log: 0 });
            ++counters[level];
            */

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
