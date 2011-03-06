/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ private

var inlineOverrides = function(o) {
    for(var m in o) {
        this[m] = o[m];
    }
};

var objectConstructor = Object.prototype.constructor;

// }}}
// {{{ NX.extend

var $METHOD = module.exports = function(subclass, superclass, overrides) {

    var me = this;

    if(me.isObject(superclass)) {
        overrides = superclass;
        superclass = subclass;
        subclass = overrides.constructor != objectConstructor
        ? overrides.constructor
        : function(){ superclass.apply(this, arguments); };
    }

    if(!superclass) {
        throw "The specified superclass object is illegal.";
    }

    var F = function(){},
    subclassProto,
    superclassProto = superclass.prototype;

    F.prototype = superclassProto;
    subclassProto = subclass.prototype = new F();
    subclassProto.constructor = subclass;
    subclass.superclass = superclassProto;

    if(superclassProto.constructor == objectConstructor){
        superclassProto.constructor = superclass;
    }

    subclass.override = function(overrides){
        me.override(subclass, overrides);
    };

    subclassProto.superclass = subclassProto.supr = (function(){
        return superclassProto;
    });

    subclassProto.override = inlineOverrides;
    subclassProto.proto = subclassProto;

    subclass.override(overrides);
    subclass.extend = function(o) {
        return me.extend(subclass, o);
    };

    return subclass;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
