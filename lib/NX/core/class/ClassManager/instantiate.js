/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.instantiate

module.exports = function() {

    var name = arguments[0],
    args = slice.call(arguments, 1),
    alias = name,
    possibleName, cls;

    if (typeof name !== 'function') {

        if ((typeof name !== 'string' || name.length < 1)) {
            NX.Error.raise({
                sourceClass: "NX",
                sourceMethod: "create",
                msg: "Invalid class name or alias '" + name + "' specified, must be a non-empty string"
            });
        }

        cls = this.get(name);

    } else {
        cls = name;
    }

    if (!cls) {

        possibleName = this.getNameByAlias(name);

        if (possibleName) {
            name = possibleName;

            cls = this.get(name);
        }
    }

    if (!cls) {

        possibleName = this.getNameByAlternate(name);

        if (possibleName) {
            name = possibleName;

            cls = this.get(name);
        }
    }

    if (!cls) {

        if (NX.global.console) {
            NX.global.console.warn("[NX.Loader] Synchronously loading '" + name + "'; consider adding " +
                                   "NX.require('" + ((possibleName) ? alias : name) + "') above NX.onReady");
        }

        NX.syncRequire(name);

        cls = this.get(name);
    }

    if (!cls) {
        NX.Error.raise({
            sourceClass: "NX",
            sourceMethod: "create",
            msg: "Cannot create an instance of unrecognized class name / alias: " + alias
        });
    }

    if (typeof cls !== 'function') {
        NX.Error.raise({
            sourceClass: "NX",
            sourceMethod: "create",
            msg: "'" + name + "' is a singleton and cannot be instantiated"
        });
    }

    if (!this.instantiationCounts[name]) {
        this.instantiationCounts[name] = 0;
    }

    this.instantiationCounts[name]++;

    return this.getInstantiator(args.length)(cls, args);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
