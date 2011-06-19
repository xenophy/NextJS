/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base

(function(flexSetter) {

var Base = NX.Base = function() {};

    /*
Base.prototype = {

    // {{{ $className

    $className: 'NX.Base',

    // }}}
    // {{{ $class

    $class: Base,

    // }}}
    // {{{ self

    self: Base,

    // }}}
    // {{{ constructor

    constructor: function() {
        return this;
    },

    // }}}
    // {{{ initConfig

    initConfig: function(config) {

        if (!this.$configInited) {
            this.config = NX.Object.merge({}, this.config || {}, config || {});
            this.applyConfig(this.config);
            this.$configInited = true;
        }

        return this;
    },

    // }}}
    // {{{ setConfig

    setConfig: function(config) {

        this.applyConfig(config || {});

        return this;
    },

    // }}}
    // {{{ applyConfig

    applyConfig: flexSetter(function(name, value) {

        var setter = 'set' + NX.String.capitalize(name);

        if (typeof this[setter] === 'function') {
            this[setter].call(this, value);
        }

        return this;
    }),

    // }}}
    // {{{ callParent

    callParent: function(args) {

        var method = this.callParent.caller,
            parentClass,
            methodName;

        if (!method.$owner) {

            if (!method.caller) {
                NX.Error.raise({
                    sourceClass: NX.getClassName(this),
                    sourceMethod: "callParent",
                    msg: "Attempting to call a protected method from the public scope, which is not allowed"
                });
            }

            method = method.caller;
        }

        parentClass = method.$owner.superclass;
        methodName = method.$name;

        if (!(methodName in parentClass)) {
            NX.Error.raise({
                sourceClass: NX.getClassName(this),
                sourceMethod: methodName,
                msg: "this.callParent() was called but there's no such method (" + methodName +
                                                                               ") found in the parent class (" + (NX.getClassName(parentClass) || 'Object') + ")"
            });
        }

        return parentClass[methodName].apply(this, args || []);
    },

    // }}}
    // {{{ statics

    statics: function() {

        var method = this.statics.caller,
            self = this.self;

        if (!method) {
            return self;
        }

        return method.$owner;
    },

    // }}}
    // {{{ callOverridden

    callOverridden: function(args) {

        var method = this.callOverridden.caller;

        if (!method.$owner) {
            NX.Error.raise({
                sourceClass: NX.getClassName(this),
                sourceMethod: "callOverridden",
                msg: "Attempting to call a protected method from the public scope, which is not allowed"
            });
        }

        if (!method.$previous) {
            NX.Error.raise({
                sourceClass: NX.getClassName(this),
                sourceMethod: "callOverridden",
                msg: "this.callOverridden was called in '" + method.$name +
                    "' but this method has never been overridden"
            });
        }

        return method.$previous.apply(this, args || []);
    },

    // }}}
    // {{{ destroy

    destroy: function() {}

    // }}}

};

NX.apply(NX.Base, {

    // {{{ create

    create: function() {
        return NX.create.apply(NX, [this].concat(Array.prototype.slice.call(arguments, 0)));
    },

    // }}}
    // {{{ own

    own: flexSetter(function(name, value) {

        if (typeof value === 'function') {
            this.ownMethod(name, value);
        } else {
            this.prototype[name] = value;
        }

    }),

    // }}}
    // {{{ ownMethod

    ownMethod: function(name, fn) {

        var originalFn;

        if (fn.$owner !== undefined && fn !== NX.emptyFn) {
            originalFn = fn;

            fn = function() {
                return originalFn.apply(this, arguments);
            };
        }

        var className = NX.getClassName(this);

        if (className) {
            fn.displayName = className + '#' + name;
        }

        fn.$owner = this;
        fn.$name = name;

        this.prototype[name] = fn;
    },

    // }}}
    // {{{ addStatics

    addStatics: function(members) {

        for (var name in members) {
            if (members.hasOwnProperty(name)) {
                this[name] = members[name];
            }
        }

        return this;
    },

    // }}}
    // {{{ implement

    implement: function(members) {

        var prototype = this.prototype,
            name,
            i,
            member,
            previous,
            className = NX.getClassName(this);

        for (name in members) {
            if (members.hasOwnProperty(name)) {
                member = members[name];

                if (typeof member === 'function') {
                    member.$owner = this;
                    member.$name = name;

                    if (className) {
                        member.displayName = className + '#' + name;
                    }

                }

                prototype[name] = member;
            }
        }

    },

    // }}}
    // {{{ borrow

    borrow: function(fromClass, members) {
        var fromPrototype = fromClass.prototype,
        i, ln, member;

        members = NX.Array.from(members);

        for (i = 0, ln = members.length; i < ln; i++) {
            member = members[i];

            this.own(member, fromPrototype[member]);
        }

        return this;
    },

    // }}}
    // {{{ override

    override: function(members) {

        var prototype = this.prototype,
            name,
            i,
            member,
            previous;

        for (name in members) {
            if (members.hasOwnProperty(name)) {
                member = members[name];

                if (typeof member === 'function') {
                    if (typeof prototype[name] === 'function') {
                        previous = prototype[name];
                        member.$previous = previous;
                    }

                    this.ownMethod(name, member);
                }
                else {
                    prototype[name] = member;
                }
            }
        }

        return this;
    },

    // }}}
    // {{{ mixin

    mixin: flexSetter(function(name, cls) {

        var mixin = cls.prototype,
        my = this.prototype,
        i, fn;

        for (i in mixin) {
            if (mixin.hasOwnProperty(i)) {
                if (my[i] === undefined) {
                    if (typeof mixin[i] === 'function') {
                        fn = mixin[i];

                        if (fn.$owner === undefined) {
                            this.ownMethod(i, fn);
                        }
                        else {
                            my[i] = fn;
                        }
                    }
                    else {
                        my[i] = mixin[i];
                    }
                }
                else if (i === 'config' && my.config && mixin.config) {
                    NX.Object.merge(my.config, mixin.config);
                }
            }
        }

        if (my.mixins === undefined) {
            my.mixins = {};
        }

        my.mixins[name] = mixin;
    }),

    // }}}
    // {{{ getName

    getName: function() {
        return NX.getClassName(this);
    },

    // }}}
    // {{{ createAlias

    createAlias: flexSetter(function(alias, origin) {
        this.prototype[alias] = this.prototype[origin];
    })

    // }}}

});

    */
})(NX.Function.flexSetter);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
