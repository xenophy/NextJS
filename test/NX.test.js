/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');
var should = require('should');

// }}}
// {{{ NX Class Tests

module.exports = {

    // {{{ test apply#standard

    'test apply#standard': function() {

        var src = {};

        var ret = NX.apply(src, {
            foo: 'bar'
        });

        assert.equal(src, ret, 'Test apply standard return value');
        assert.equal(src.foo, 'bar', 'Test apply standard');
    },

    // }}}
    // {{{ test apply#defaults

    'test apply#defaults': function() {

        var src = {};
        var config = {
            foo: 'bar'
        };
        var defaults = {
            foo: 'default value',
            hoge: 'piyo'
        };

        var ret = NX.apply(src, config, defaults);

        assert.equal(src, ret, 'Test apply defaults return value');
        assert.equal(src.foo, 'bar', 'Test apply default key foo');
        assert.equal(src.hoge, 'piyo', 'Test apply default key hoge');

    },

    // }}}
    // {{{ test applyIf#standard

    'test applyIf#standard': function() {

        var src = {
            hoge: 'piyo'
        };

        var ret = NX.applyIf(src, {
            foo: 'bar'
        });

        assert.equal(src, ret, 'Test apply standard return value');
        assert.equal(src.foo, 'bar', 'Test apply standard value bar');
        assert.equal(src.hoge, 'piyo', 'Test apply standard value piyo');
    },

    // }}}
    // {{{ test applyIf#notOverride

    'test applyIf#notOverride': function() {

        var src = {
            foo: 'original'
        };
        var config = {
            foo: 'bar'
        };

        var ret = NX.applyIf(src, config);

        assert.equal(src, ret, 'Test apply defaults return value');
        assert.equal(src.foo, 'original', 'Test apply default key foo');

    },

    // }}}
    // {{{ test clone#standard

    'test clone#standard': function() {

        var o = {
            src: 'src object'
        };

        var c = NX.clone(o);

        assert.equal(o.src, 'src object');
        assert.equal(c.src, 'src object');

        o.src = 'changed';

        assert.equal(o.src, 'changed');
        assert.equal(c.src, 'src object');

        o.clone = function() {
            return NX.apply(o, {cloned: true});
        }
        c = NX.clone(o);

        assert.equal(o.src, 'changed');
        assert.equal(o.cloned, true);
        assert.equal(c.src, 'changed');
        assert.equal(c.cloned, true);

    },

    // }}}
    // {{{ test clone#function

    'test clone#function': function() {

        var o = function() {
            return 'original';
        };

        var c = NX.clone(o);

        assert.equal(o(), 'original');
        assert.equal(c(), 'original');

        o = function() {
            return 'replace';
        }

        assert.equal(o(), 'replace');
        assert.equal(c(), 'original');

    },

    // }}}
    // {{{ test clone#array

    'test clone#array': function() {

        var o = [1,2,3];
        var c = NX.clone(o);

        assert.equal(o[0], 1);
        assert.equal(o[1], 2);
        assert.equal(o[2], 3);
        assert.equal(c[0], 1);
        assert.equal(c[1], 2);
        assert.equal(c[2], 3);

        o.push(4);

        assert.equal(o.length, 4);
        assert.equal(c.length, 3);

    },

    // }}}
    // {{{ test clone#nested

    'test clone#nested': function() {

        var o = {
            cn: [{
                tag: 'a'
            },{
                tag: 'span'
            }]
        };
        o.obj = o.cn;

        var c = NX.clone(o);

        assert.equal(o.cn[0].tag, 'a');
        assert.equal(o.cn[1].tag, 'span');
        assert.equal(c.cn[0].tag, 'a');
        assert.equal(c.cn[1].tag, 'span');
        assert.equal(o.obj[0].tag, 'a');
        assert.equal(o.obj[1].tag, 'span');
        assert.equal(c.obj[0].tag, 'a');
        assert.equal(c.obj[1].tag, 'span');

        c.cn.push({tag: 'div'});

        assert.equal(o.cn.length, 2);
        assert.equal(c.cn.length, 3);
        assert.equal(o.obj.length, 2);
        assert.equal(c.obj.length, 3);

    },

    // }}}
    // {{{ test each#standard

    'test each#standard': function() {

        var tmp = [];
        var ret = NX.each([1,2,3,4,5], function(v) {
            tmp.push(v);
        });

        assert.equal(tmp.length, 5, 'Test each standard');

    },

    // }}}
    // {{{ test each#empty

    'test each#empty': function() {

        var ret = NX.each(undefined, function() {});

        assert.ok(!ret, 'Test each returns undefined');

    },

    // }}}
    // {{{ test each#notIterable

    'test each#notIterable': function() {

        var ret = NX.each('xFrameworkNX', function(v) {
            assert.equal(v, 'xFrameworkNX', 'Test value not iterable');
        });

    },

    // }}}
    // {{{ test each#primitive

    'test each#primitive': function() {

        var ret = NX.each(8124, function(v) {
            assert.equal(v, 8124, 'Test value primitive');
        });

    },

    // }}}
    // {{{ test each#callbackFalse

    'test each#callbackFalse': function() {

        var tmp = [];
        var ret = NX.each([1,2,3,4,5], function(v) {
            tmp.push(v);
            if(v === 3) {
                return false;
            }
        });

        assert.equal(tmp.length, 3, 'Test callback return false');

    },

    // }}}
    // {{{ test extend#standard

    'test extend#standard': function() {

        var NewCls = NX.extend(Object, {
            prop1: 'prop1',
            method1: function() {
                return 'method1';
            }
        });

        var cls = new NewCls();

        assert.equal(cls.prop1, 'prop1');
        assert.equal(cls.method1(), 'method1');

        var SubCls = NX.extend(NewCls, {
            prop2: 'prop2',
            method1: function() {
                return 'override method';
            }
        });

        var sub = new SubCls();

        SubCls.prototype.override({
            method2: function() {
                return 'inline override'
            }
        });

        assert.equal(sub.prop1, 'prop1');
        assert.equal(sub.prop2, 'prop2');
        assert.equal(sub.method1(), 'override method');
        assert.equal(sub.method2(), 'inline override');

    },

    // }}}
    // {{{ test extend#anotherstyle

    'test extend#anotherstyle': function() {

        var NewCls = function() {
            // NewCls constructor
            return 'newcls constructor';
        };
        NX.extend(NewCls, Object, {
            prop1: 'prop1',
            method1: function() {
                return 'method1';
            }
        });

        var cls = new NewCls();

        assert.equal(cls.prop1, 'prop1');
        assert.equal(cls.method1(), 'method1');

        var SubCls = function() {
            // SubCls constructor
            return 'subcls constructor';
        };

        NX.extend(SubCls, NewCls, {
            prop2: 'prop2',
            method1: function() {
                return 'override method';
            }
        });

        var sub = new SubCls();

        assert.equal(sub.prop1, 'prop1');
        assert.equal(sub.prop2, 'prop2');
        assert.equal(sub.method1(), 'override method');

        var ret = SubCls.prototype.superclass();
        ret = ret.constructor();

        assert.equal(ret, 'newcls constructor');

        var GsonCls = SubCls.extend({
            method2: function() {
                return 'gson method';
            }
        });

        var gson = new GsonCls();

        assert.equal(gson.prop1, 'prop1');
        assert.equal(gson.prop2, 'prop2');
        assert.equal(gson.method1(), 'override method');
        assert.equal(gson.method2(), 'gson method');

    },

    // }}}
    // {{{ test extend#illegal

    'test extend#illegal': function() {

        var NewCls = function() {
            // NewCls constructor
        };

        try {
            NX.extend(NewCls);
        } catch(e) {
            assert.equal(e, 'The specified superclass object is illegal.');
        }

    },

    // }}}
    // {{{ test inArray

    'test inArray': function(){

        NX.inArray('van', ['Kevin', 'van', 'Zonneveld']).should.equal(true);
        NX.inArray('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'}).should.equal(false);
        NX.inArray(1, ['1', '2', '3']).should.equal(true);
        NX.inArray(1, ['1', '2', '3'], false).should.equal(true);
        NX.inArray(1, ['1', '2', '3'], true).should.equal(false);
        NX.inArray(1, [1, 2, 3], true).should.equal(true);

    },

    // }}}
    // {{{ test isArray#string

    'test isArray#string': function(){

        // 文字列テスト
        assert.ok(!NX.isArray('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isArray#number

    'test isArray#number': function(){

        // 数値テスト
        assert.ok(!NX.isArray(8124), 'Test type number');

    },

    // }}}
    // {{{ test isArray#boolean

    'test isArray#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isArray(true), 'Test type boolean value true');
        assert.ok(!NX.isArray(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isArray#object

    'test isArray#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isArray({}), 'Test type object');

    },

    // }}}
    // {{{ test isArray#array

    'test isArray#array': function(){

        // 配列オブジェクトテスト
        assert.ok(NX.isArray([]), 'Test type array');

    },

    // }}}
    // {{{ test isArray#function

    'test isArray#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isArray((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isArray#date

    'test isArray#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isArray(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test isBoolean#undefined

    'test isBoolean#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isBoolean(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isBoolean#null

    'test isBoolean#null': function(){

        // nullテスト
        assert.ok(!NX.isBoolean(null), 'Test value null');

    },

    // }}}
    // {{{ test isBoolean#string

    'test isBoolean#string': function(){

        // 文字列テスト
        assert.ok(!NX.isBoolean('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isBoolean#number

    'test isBoolean#number': function(){

        // 数値テスト
        assert.ok(!NX.isBoolean(8124), 'Test type number');

    },

    // }}}
    // {{{ test isBoolean#boolean

    'test isBoolean#boolean': function(){

        // 真偽値テスト
        assert.ok(NX.isBoolean(true), 'Test type boolean value true');
        assert.ok(NX.isBoolean(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isBoolean#object

    'test isBoolean#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isBoolean({}), 'Test type object');

    },

    // }}}
    // {{{ test isBoolean#array

    'test isBoolean#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isBoolean([]), 'Test type array');

    },

    // }}}
    // {{{ test isBoolean#function

    'test isBoolean#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isBoolean((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isBoolean#date

    'test isBoolean#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isBoolean(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test isDate#undefined

    'test isDate#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isDate(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isDate#null

    'test isDate#null': function(){

        // nullテスト
        assert.ok(!NX.isDate(null), 'Test value null');

    },

    // }}}
    // {{{ test isDate#string

    'test isDate#string': function(){

        // 文字列テスト
        assert.ok(!NX.isDate('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isDate#number

    'test isDate#number': function(){

        // 数値テスト
        assert.ok(!NX.isDate(8124), 'Test type number');

    },

    // }}}
    // {{{ test isDate#boolean

    'test isDate#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isDate(true), 'Test type boolean value true');
        assert.ok(!NX.isDate(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isDate#object

    'test isDate#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isDate({}), 'Test type object');

    },

    // }}}
    // {{{ test isDate#array

    'test isDate#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isDate([]), 'Test type array');

    },

    // }}}
    // {{{ test isDate#function

    'test isDate#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isDate((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isDate#date

    'test isDate#date': function(){

        // 日付オブジェクトテスト
        assert.ok(NX.isDate(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test isDefined#undefined

    'test isDefined#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isDefined(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isDefined#null

    'test isDefined#null': function(){

        // nullテスト
        assert.ok(NX.isDefined(null), 'Test value null');

    },

    // }}}
    // {{{ test isDefined#string

    'test isDefined#string': function(){

        // 文字列テスト
        assert.ok(NX.isDefined('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isDefined#number

    'test isDefined#number': function(){

        // 数値テスト
        assert.ok(NX.isDefined(8124), 'Test type number');

    },

    // }}}
    // {{{ test isDefined#boolean

    'test isDefined#boolean': function(){

        // 真偽値テスト
        assert.ok(NX.isDefined(true), 'Test type boolean value true');
        assert.ok(NX.isDefined(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isDefined#object

    'test isDefined#object': function(){

        // オブジェクトテスト
        assert.ok(NX.isDefined({}), 'Test type object');

    },

    // }}}
    // {{{ test isDefined#array

    'test isDefined#array': function(){

        // 配列オブジェクトテスト
        assert.ok(NX.isDefined([]), 'Test type array');

    },

    // }}}
    // {{{ test isDefined#function

    'test isDefined#function': function(){

        // 関数オブジェクトテスト
        assert.ok(NX.isDefined((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isDefined#date

    'test isDefined#date': function(){

        // 日付オブジェクトテスト
        assert.ok(NX.isDefined(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test isEmpty#undefined

    'test isEmpty#undefined': function(){

        // undefinedテスト
        assert.ok(NX.isEmpty(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isEmpty#null

    'test isEmpty#null': function(){

        // nullテスト
        assert.ok(NX.isEmpty(null), 'Test value null');

    },

    // }}}
    // {{{ test isEmpty#string

    'test isEmpty#string': function(){

        assert.ok(NX.isEmpty(''), 'Test value empty string');
        assert.ok(!NX.isEmpty('', true), 'Test value empty string with allowBlank');
        assert.ok(!NX.isEmpty('xFrameworkNX'), 'Test value string');

    },

    // }}}
    // {{{ test isEmpty#number

    'test isEmpty#number': function(){

        assert.ok(!NX.isEmpty(0), 'Test value zero');
        assert.ok(!NX.isEmpty(8124), 'Test value number');

    },

    // }}}
    // {{{ test isEmpty#boolean

    'test isEmpty#boolean': function(){

        assert.ok(!NX.isEmpty(true), 'Test value true');
        assert.ok(!NX.isEmpty(false), 'Test value false');

    },

    // }}}
    // {{{ test isEmpty#object

    'test isEmpty#object': function(){

        assert.ok(!NX.isEmpty({}), 'Test value object');

    },

    // }}}
    // {{{ test isEmpty#array

    'test isEmpty#array': function(){

        assert.ok(NX.isEmpty([]), 'Test value empty array');
        assert.ok(!NX.isEmpty([0, 1, 2]), 'Test value array');

    },

    // }}}
    // {{{ test isEmpty#function

    'test isEmpty#function': function(){

        assert.ok(!NX.isEmpty(function(){}), 'Test value function');

    },

    // }}}
    // {{{ test isEmpty#date

    'test isEmpty#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isEmpty(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test isFunction#undefined

    'test isFunction#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isFunction(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isFunction#null

    'test isFunction#null': function(){

        // nullテスト
        assert.ok(!NX.isFunction(null), 'Test value null');

    },

    // }}}
    // {{{ test isFunction#string

    'test isFunction#string': function(){

        // 文字列テスト
        assert.ok(!NX.isFunction('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isFunction#number

    'test isFunction#number': function(){

        // 数値テスト
        assert.ok(!NX.isFunction(8124), 'Test type number');

    },

    // }}}
    // {{{ test isFunction#boolean

    'test isFunction#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isFunction(true), 'Test type boolean value true');
        assert.ok(!NX.isFunction(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isFunction#object

    'test isFunction#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isFunction({}), 'Test type object');

    },

    // }}}
    // {{{ test isFunction#array

    'test isFunction#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isFunction([]), 'Test type array');

    },

    // }}}
    // {{{ test isFunction#function

    'test isFunction#function': function(){

        // 関数オブジェクトテスト
        assert.ok(NX.isFunction((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isFunction#date

    'test isFunction#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isFunction(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test isIterable

    'test isIterable': function() {

        var a = [];
        var str = '';

        assert.ok(NX.isIterable(a), 'Test array');
        assert.ok(NX.isIterable(arguments), 'Test function');
        assert.ok(!NX.isIterable(str), 'Test string');

    },

    // }}}
    // {{{ test isNumber#undefined

    'test isNumber#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isNumber(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isNumber#null

    'test isNumber#null': function(){

        // nullテスト
        assert.ok(!NX.isNumber(null), 'Test value null');

    },

    // }}}
    // {{{ test isNumber#string

    'test isNumber#string': function(){

        // 文字列テスト
        assert.ok(!NX.isNumber('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isNumber#number

    'test isNumber#number': function(){

        // 数値テスト
        assert.ok(NX.isNumber(8124), 'Test type number');

    },

    // }}}
    // {{{ test isNumber#boolean

    'test isNumber#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isNumber(true), 'Test type boolean value true');
        assert.ok(!NX.isNumber(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isNumber#object

    'test isNumber#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isNumber({}), 'Test type object');

    },

    // }}}
    // {{{ test isNumber#array

    'test isNumber#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isNumber([]), 'Test type array');

    },

    // }}}
    // {{{ test isNumber#function

    'test isNumber#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isNumber((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isNumber#date

    'test isNumber#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isNumber(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test isObject#undefined

    'test isObject#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isObject(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isObject#null

    'test isObject#null': function(){

        // nullテスト
        assert.ok(!NX.isObject(null), 'Test value null');

    },

    // }}}
    // {{{ test isObject#string

    'test isObject#string': function(){

        // 文字列テスト
        assert.ok(!NX.isObject('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isObject#number

    'test isObject#number': function(){

        // 数値テスト
        assert.ok(!NX.isObject(8124), 'Test type number');

    },

    // }}}
    // {{{ test isObject#boolean

    'test isObject#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isObject(true), 'Test type boolean value true');
        assert.ok(!NX.isObject(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isObject#object

    'test isObject#object': function(){

        // オブジェクトテスト
        assert.ok(NX.isObject({}), 'Test type object');

    },

    // }}}
    // {{{ test isObject#array

    'test isObject#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isObject([]), 'Test type array');

    },

    // }}}
    // {{{ test isObject#function

    'test isObject#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isObject((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isObject#date

    'test isObject#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isObject(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test isPrimitive#undefined

    'test isPrimitive#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isPrimitive(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isPrimitive#null

    'test isPrimitive#null': function(){

        // nullテスト
        assert.ok(!NX.isPrimitive(null), 'Test value null');

    },

    // }}}
    // {{{ test isPrimitive#string

    'test isPrimitive#string': function(){

        // 文字列テスト
        assert.ok(NX.isPrimitive('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isPrimitive#number

    'test isPrimitive#number': function(){

        // 数値テスト
        assert.ok(NX.isPrimitive(8124), 'Test type number');

    },

    // }}}
    // {{{ test isPrimitive#boolean

    'test isPrimitive#boolean': function(){

        // 真偽値テスト
        assert.ok(NX.isPrimitive(true), 'Test type boolean value true');
        assert.ok(NX.isPrimitive(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isPrimitive#object

    'test isPrimitive#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isPrimitive({}), 'Test type object');

    },

    // }}}
    // {{{ test isPrimitive#array

    'test isPrimitive#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isPrimitive([]), 'Test type array');

    },

    // }}}
    // {{{ test isPrimitive#function

    'test isPrimitive#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isPrimitive((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isPrimitive#date

    'test isPrimitive#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isPrimitive(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test isString#undefined

    'test isString#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isString(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isString#null

    'test isString#null': function(){

        // nullテスト
        assert.ok(!NX.isString(null), 'Test value null');

    },

    // }}}
    // {{{ test isString#string

    'test isString#string': function(){

        // 文字列テスト
        assert.ok(NX.isString('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isString#number

    'test isString#number': function(){

        // 数値テスト
        assert.ok(!NX.isString(8124), 'Test type number');

    },

    // }}}
    // {{{ test isString#boolean

    'test isString#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isString(true), 'Test type boolean value true');
        assert.ok(!NX.isString(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isString#object

    'test isString#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isString({}), 'Test type object');

    },

    // }}}
    // {{{ test isString#array

    'test isString#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isString([]), 'Test type array');

    },

    // }}}
    // {{{ test isString#function

    'test isString#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isString((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isString#date

    'test isString#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isString(new Date()), 'Test type date');

    },

    // }}}
    // {{{ test iterate#standard

    'test iterate#standard': function() {

        var dest = {};
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate(src, function(key, v, o) {
            dest[key] = v;
        });

        assert.equal(dest.key1, 'value1', 'Test key=key1 value=value1');
        assert.equal(dest.key2, 'value2', 'Test key=key2 value=value2');
        assert.equal(dest.key3, 'value3', 'Test key=key3 value=value3');
        assert.equal(dest.key4, 'value4', 'Test key=key4 value=value4');
        assert.equal(dest.key5, 'value5', 'Test key=key5 value=value5');

    },

    // }}}
    // {{{ test iterate#empty

    'test iterate#empty': function() {

        var dest = {};
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate(undefined, function(key, v, o) {
            dest[key] = v;
        });

        assert.equal(dest.key1, undefined, 'Test key=key1 value=undefined');
        assert.equal(dest.key2, undefined, 'Test key=key2 value=undefined');
        assert.equal(dest.key3, undefined, 'Test key=key3 value=undefined');
        assert.equal(dest.key4, undefined, 'Test key=key4 value=undefined');
        assert.equal(dest.key5, undefined, 'Test key=key5 value=undefined');

    },

    // }}}
    // {{{ test iterate#iterable

    'test iterate#iterable': function() {

        var dest = [];
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate([1,2,3,4,5], function(v, i, a) {
            dest.push(v);
        });

        assert.equal(dest[0], 1, 'Test value=1');
        assert.equal(dest[1], 2, 'Test value=2');
        assert.equal(dest[2], 3, 'Test value=3');
        assert.equal(dest[3], 4, 'Test value=4');
        assert.equal(dest[4], 5, 'Test value=5');

    },

    // }}}
    // {{{ test iterate#callbackFalse

    'test iterate#callbackFalse': function() {

        var dest = {};
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate(src, function(key, v, o) {
            return false;
        });

        assert.equal(dest.key1, undefined, 'Test key=key1 value=undefined');
        assert.equal(dest.key2, undefined, 'Test key=key2 value=undefined');
        assert.equal(dest.key3, undefined, 'Test key=key3 value=undefined');
        assert.equal(dest.key4, undefined, 'Test key=key4 value=undefined');
        assert.equal(dest.key5, undefined, 'Test key=key5 value=undefined');

    },

    // }}}
    // {{{ test namespace#standard

    'test namespace#standard': function() {

        NX.namespace(
            'App',
            'App.app',
            'App.form',
            'App.grid',
            'App.tree'
        );

        assert.ok(App, 'Test create Namespace "App"');
        assert.ok(App.app, 'Test create Namespace "App.app"');
        assert.ok(App.form, 'Test create Namespace "App.form"');
        assert.ok(App.grid, 'Test create Namespace "App.grid"');
        assert.ok(App.tree, 'Test create Namespace "App.tree"');

    },

    // }}}
    // {{{ test namespace#shorthand

    'test namespace#shorthand': function() {

        NX.ns(
            'App',
            'App.app',
            'App.form',
            'App.grid',
            'App.tree'
        );

        assert.ok(App, 'Test create Namespace "App" with shorthand');
        assert.ok(App.app, 'Test create Namespace "App.app" with shorthand');
        assert.ok(App.form, 'Test create Namespace "App.form" with shorthand');
        assert.ok(App.grid, 'Test create Namespace "App.grid" with shorthand');
        assert.ok(App.tree, 'Test create Namespace "App.tree" with shorthand');

    },

    // }}}
    // {{{ test sleep#standard

    'test sleep#standard': function() {

        var start = new Date;

        NX.sleep(1000);

        var end = new Date;
        var time = end.getTime() - start.getTime();

        assert.equal(Math.floor(time / 1000), 1);

    },

    // }}}
    // {{{ test toArray#standard

    'test toArray#standard': function() {

        var ret;
        var arr = [1,2,3,4,5];

        ret = NX.toArray(arr, 2, 4);

        assert.equal(ret.length, 2);
        assert.equal(ret[0], 3);
        assert.equal(ret[1], 4);

        ret = NX.toArray('abc');
        assert.equal(ret[0], 'a');
        assert.equal(ret[1], 'b');
        assert.equal(ret[2], 'c');

        ret = NX.toArray('abc', 1, 2);
        assert.equal(ret[0], 'b');

    },

    // }}}
    // {{{ test toBoolean#standard

    'test toBoolean#standard': function() {

        var ret;

        ret = NX.toBoolean('y');
        assert.equal(ret, true);

        ret = NX.toBoolean('yes');
        assert.equal(ret, true);

        ret = NX.toBoolean({});
        assert.equal(ret, true);

        ret = NX.toBoolean(null);
        assert.equal(ret, false);

        ret = NX.toBoolean(undefined);
        assert.equal(ret, false);

    },

    // }}}
    // {{{ test asort#standard

    'test asort#standard': function() {

        var arr = [{
            id: 100
        },{
            id: 0
        },{
            id: 99
        }]

        NX.asort(arr, 'id');

        assert.equal(arr[0].id, 0);
        assert.equal(arr[1].id, 99);
        assert.equal(arr[2].id, 100);

    },

    // }}}
    // {{{ test moduleCacheClear#standard

    'test moduleCacheClear#standard': function() {

        var mod1 = require('./shared/mod1.js');
        var mod2 = require('./shared/mod2.js');
        var path = require('path');

        assert.equal(mod1(), 'mod1');
        assert.equal(mod2(), 'mod2');

        var mod1path = path.normalize(__dirname + '/shared/mod1.js');
        var mod2path = path.normalize(__dirname + '/shared/mod2.js');

        NX.moduleCacheClear(mod1path);
        NX.moduleCacheClear(mod2path);

        assert.equal(require.cache[mod1path], undefined);
        assert.equal(require.cache[mod2path], undefined);

    },

    // }}}
    // {{{ test escapeRe#standard

    'test escapeRe#standard': function() {

        assert.equal('\\-', NX.escapeRe('-'), 'Test with single char');
        assert.equal('\\*\\.', NX.escapeRe('*.'), 'Test with multiple characters next to each other');
        assert.equal('foo', NX.escapeRe('foo'), 'Test with no escapeable chars');
        assert.equal('\\{baz\\}', NX.escapeRe('{baz}'), 'Test with mixed set');
        assert.equal('\\-\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\/\\\\', NX.escapeRe('-.*+?^${}()|[]/\\'), 'Test with every character');

    },

    // }}}
    // {{{ test isNull#standard

    'test isNull#standard': function() {

        NX.isNull(null).should.equal(true);
        NX.isNull(123).should.equal(false);
        NX.isNull('string').should.equal(false);
        NX.isNull([]).should.equal(false);
        NX.isNull({}).should.equal(false);

    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
