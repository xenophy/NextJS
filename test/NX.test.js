/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('should');
assert = require('assert');

// }}}
// {{{ NX Class Tests

module.exports = {

    // {{{ test apply#basic

    'test apply#basic': function() {

        var src = {};
        var ret = NX.apply(src, {
            foo: 'bar'
        });

        src.should.equal(ret);
        src.foo.should.equal('bar');
    },

    // }}}
    // {{{ test apply#defaults

    'test apply#defaults': function() {

        var src = {},
            config = {
                foo: 'bar'
            },
            defaults = {
                foo: 'default value',
                hoge: 'piyo'
            },
            ret = NX.apply(src, config, defaults);

        src.should.equal(ret);
        src.foo.should.equal('bar');
        src.hoge.should.equal('piyo');
    },

    // }}}
    // {{{ test emptyFn#basic

    'test emptyFn#basic': function() {

        var ret = NX.emptyFn();
        assert.equal(ret, undefined);

    },

    // }}}
    // {{{ test applyIf#standard

    'test applyIf#standard': function() {

        var src = {
            hoge: 'piyo'
        },
        ret = NX.applyIf(src, {
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
        },
        config = {
            foo: 'bar'
        },
        ret = NX.applyIf(src, config);

        assert.equal(src, ret, 'Test apply defaults return value');
        assert.equal(src.foo, 'original', 'Test apply default key foo');

    },

    // }}}
    // {{{ test isEmpty#undefined

    'test isEmpty#undefined': function(){

        // undefinedテスト
        NX.isEmpty(undefined).should.equal(true);

    },

    // }}}
    // {{{ test isEmpty#null

    'test isEmpty#null': function(){

        // nullテスト
        NX.isEmpty(null).should.equal(true);

    },

    // }}}
    // {{{ test isEmpty#string

    'test isEmpty#string': function(){

        NX.isEmpty('').should.equal(true);
        NX.isEmpty('', true).should.not.equal(true);
        NX.isEmpty('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#number

    'test isEmpty#number': function(){

        NX.isEmpty(0).should.not.equal(true);
        NX.isEmpty(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#boolean

    'test isEmpty#boolean': function(){

        NX.isEmpty(true).should.not.equal(true);
        NX.isEmpty(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#object

    'test isEmpty#object': function(){

        NX.isEmpty({}).should.not.equal(true);
        NX.isEmpty({foo:'bar'}).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#array

    'test isEmpty#array': function(){

        NX.isEmpty([]).should.equal(true);
        NX.isEmpty([0, 1, 2]).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#function

    'test isEmpty#function': function(){

        NX.isEmpty(function(){}).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#date

    'test isEmpty#date': function(){

        // 日付オブジェクトテスト
        NX.isEmpty(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#undefined

    'test isArray#undefined': function(){

        // undefinedテスト
        NX.isArray(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#null

    'test isArray#null': function(){

        // nullテスト
        NX.isArray(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#string

    'test isArray#string': function(){

        // 文字列テスト
        NX.isArray('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#number

    'test isArray#number': function(){

        // 数値テスト
        NX.isArray(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#boolean

    'test isArray#boolean': function(){

        // 真偽値テスト
        NX.isArray(true).should.not.equal(true);
        NX.isArray(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#object

    'test isArray#object': function(){

        // オブジェクトテスト
        NX.isArray({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#array

    'test isArray#array': function(){

        // 配列オブジェクトテスト
        NX.isArray([]).should.not.equal(false);

    },

    // }}}
    // {{{ test isArray#function

    'test isArray#function': function(){

        // 関数オブジェクトテスト
        NX.isArray((function(){})).should.not.equal(true);
        NX.isArray((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#date

    'test isArray#date': function(){

        // 日付オブジェクトテスト
        NX.isArray(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#undefined

    'test isDate#undefined': function(){

        // undefinedテスト
        NX.isDate(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#null

    'test isDate#null': function(){

        // nullテスト
        NX.isDate(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#string

    'test isDate#string': function(){

        // 文字列テスト
        NX.isDate('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#number

    'test isDate#number': function(){

        // 数値テスト
        NX.isDate(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#boolean

    'test isDate#boolean': function(){

        // 真偽値テスト
        NX.isDate(true).should.not.equal(true);
        NX.isDate(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#object

    'test isDate#object': function(){

        // オブジェクトテスト
        NX.isDate({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#array

    'test isDate#array': function(){

        // 配列オブジェクトテスト
        NX.isDate([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#function

    'test isDate#function': function(){

        // 関数オブジェクトテスト
        NX.isDate((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#date

    'test isDate#date': function(){

        // 日付オブジェクトテスト
        NX.isDate(new Date()).should.equal(true);

    },

    // }}}
    // {{{ test isObject#undefined

    'test isObject#undefined': function(){

        // undefinedテスト
        NX.isObject(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#null

    'test isObject#null': function(){

        // nullテスト
        NX.isObject(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#string

    'test isObject#string': function(){

        // 文字列テスト
        NX.isObject('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#number

    'test isObject#number': function(){

        // 数値テスト
        NX.isObject(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#boolean

    'test isObject#boolean': function(){

        // 真偽値テスト
        NX.isObject(true).should.not.equal(true);
        NX.isObject(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#object

    'test isObject#object': function(){

        // オブジェクトテスト
        NX.isObject({}).should.equal(true);

    },

    // }}}
    // {{{ test isObject#array

    'test isObject#array': function(){

        // 配列オブジェクトテスト
        NX.isObject([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#function

    'test isObject#function': function(){

        // 関数オブジェクトテスト
        NX.isObject((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#date

    'test isObject#date': function(){

        // 日付オブジェクトテスト
        NX.isObject(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#undefined

    'test isPrimitive#undefined': function(){

        // undefinedテスト
        NX.isPrimitive(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#null

    'test isPrimitive#null': function(){

        // nullテスト
        NX.isPrimitive(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#string

    'test isPrimitive#string': function(){

        // 文字列テスト
        NX.isPrimitive('Next JS').should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#number

    'test isPrimitive#number': function(){

        // 数値テスト
        NX.isPrimitive(8124).should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#boolean

    'test isPrimitive#boolean': function(){

        // 真偽値テスト
        NX.isPrimitive(true).should.equal(true);
        NX.isPrimitive(false).should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#object

    'test isPrimitive#object': function(){

        // オブジェクトテスト
        NX.isPrimitive({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#array

    'test isPrimitive#array': function(){

        // 配列オブジェクトテスト
        NX.isPrimitive([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#function

    'test isPrimitive#function': function(){

        // 関数オブジェクトテスト
        NX.isPrimitive((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#undefined

    'test isFunction#undefined': function(){

        // undefinedテスト
        NX.isFunction(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#null

    'test isFunction#null': function(){

        // nullテスト
        NX.isFunction(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#string

    'test isFunction#string': function(){

        // 文字列テスト
        NX.isFunction('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#number

    'test isFunction#number': function(){

        // 数値テスト
        NX.isFunction(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#boolean

    'test isFunction#boolean': function(){

        // 真偽値テスト
        NX.isFunction(true).should.not.equal(true);
        NX.isFunction(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#object

    'test isFunction#object': function(){

        // オブジェクトテスト
        NX.isFunction({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#array

    'test isFunction#array': function(){

        // 配列オブジェクトテスト
        NX.isFunction([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#function

    'test isFunction#function': function(){

        // 関数オブジェクトテスト
        NX.isFunction((function(){})).should.equal(true);

    },

    // }}}
    // {{{ test isFunction#date

    'test isFunction#date': function(){

        // 日付オブジェクトテスト
        NX.isFunction(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#undefined

    'test isNumber#undefined': function(){

        // undefinedテスト
        NX.isNumber(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#null

    'test isNumber#null': function(){

        // nullテスト
        NX.isNumber(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#string

    'test isNumber#string': function(){

        // 文字列テスト
        NX.isNumber('Next JS').should.not.equal(true);
        NX.isNumber('8124').should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#number

    'test isNumber#number': function(){

        // 数値テスト
        NX.isNumber(8124).should.equal(true);
        NX.isNumber(0).should.equal(true);

    },

    // }}}
    // {{{ test isNumber#boolean

    'test isNumber#boolean': function(){

        // 真偽値テスト
        NX.isNumber(true).should.not.equal(true);
        NX.isNumber(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#object

    'test isNumber#object': function(){

        // オブジェクトテスト
        NX.isNumber({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#array

    'test isNumber#array': function(){

        // 配列オブジェクトテスト
        NX.isNumber([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#function

    'test isNumber#function': function(){

        // 関数オブジェクトテスト
        NX.isNumber((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#date

    'test isNumber#date': function(){

        // 日付オブジェクトテスト
        NX.isNumber(new Date()).should.not.equal(true);

    },

    // }}}


    // {{{ test isNumeric#undefined

    'test isNumeric#undefined': function(){

        // undefinedテスト
        NX.isNumeric(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#null

    'test isNumeric#null': function(){

        // nullテスト
        NX.isNumeric(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#string

    'test isNumeric#string': function(){

        // 文字列テスト
        NX.isNumeric('Next JS').should.not.equal(true);
        NX.isNumeric('8124').should.equal(true);

    },

    // }}}
    // {{{ test isNumeric#number

    'test isNumeric#number': function(){

        // 数値テスト
        NX.isNumeric(8124).should.equal(true);
        NX.isNumeric(0).should.equal(true);

    },

    // }}}
    // {{{ test isNumeric#boolean

    'test isNumeric#boolean': function(){

        // 真偽値テスト
        NX.isNumeric(true).should.not.equal(true);
        NX.isNumeric(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#object

    'test isNumeric#object': function(){

        // オブジェクトテスト
        NX.isNumeric({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#array

    'test isNumeric#array': function(){

        // 配列オブジェクトテスト
        NX.isNumeric([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#function

    'test isNumeric#function': function(){

        // 関数オブジェクトテスト
        NX.isNumeric((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#date

    'test isNumeric#date': function(){

        // 日付オブジェクトテスト
        NX.isNumeric(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#undefined

    'test isString#undefined': function(){

        // undefinedテスト
        NX.isString(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#null

    'test isString#null': function(){

        // nullテスト
        NX.isString(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#string

    'test isString#string': function(){

        // 文字列テスト
        NX.isString('Next JS').should.equal(true);
        NX.isString('1234').should.equal(true);

    },

    // }}}
    // {{{ test isString#number

    'test isString#number': function(){

        // 数値テスト
        NX.isString(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#boolean

    'test isString#boolean': function(){

        // 真偽値テスト
        NX.isString(true).should.not.equal(true);
        NX.isString(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#object

    'test isString#object': function(){

        // オブジェクトテスト
        NX.isString({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#array

    'test isString#array': function(){

        // 配列オブジェクトテスト
        NX.isString([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#function

    'test isString#function': function(){

        // 関数オブジェクトテスト
        NX.isString((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#date

    'test isString#date': function(){

        // 日付オブジェクトテスト
        NX.isString(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#undefined

    'test isBoolean#undefined': function(){

        // undefinedテスト
        NX.isBoolean(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#null

    'test isBoolean#null': function(){

        // nullテスト
        NX.isBoolean(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#string

    'test isBoolean#string': function(){

        // 文字列テスト
        NX.isBoolean('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#number

    'test isBoolean#number': function(){

        // 数値テスト
        NX.isBoolean(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#boolean

    'test isBoolean#boolean': function(){

        // 真偽値テスト
        NX.isBoolean(true).should.equal(true);
        NX.isBoolean(false).should.equal(true);

    },

    // }}}
    // {{{ test isBoolean#object

    'test isBoolean#object': function(){

        // オブジェクトテスト
        NX.isBoolean({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#array

    'test isBoolean#array': function(){

        // 配列オブジェクトテスト
        NX.isBoolean([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#function

    'test isBoolean#function': function(){

        // 関数オブジェクトテスト
        NX.isBoolean((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#date

    'test isBoolean#date': function(){

        // 日付オブジェクトテスト
        NX.isBoolean(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isDefined#undefined

    'test isDefined#undefined': function(){

        // undefinedテスト
        NX.isDefined(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isDefined#null

    'test isDefined#null': function(){

        // nullテスト
        NX.isDefined(null).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#string

    'test isDefined#string': function(){

        // 文字列テスト
        NX.isDefined('Next JS').should.equal(true);

    },

    // }}}
    // {{{ test isDefined#number

    'test isDefined#number': function(){

        // 数値テスト
        NX.isDefined(8124).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#boolean

    'test isDefined#boolean': function(){

        // 真偽値テスト
        NX.isDefined(true).should.equal(true);
        NX.isDefined(false).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#object

    'test isDefined#object': function(){

        // オブジェクトテスト
        NX.isDefined({}).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#array

    'test isDefined#array': function(){

        // 配列オブジェクトテスト
        NX.isDefined([]).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#function

    'test isDefined#function': function(){

        // 関数オブジェクトテスト
        NX.isDefined((function(){})).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#date

    'test isDefined#date': function(){

        // 日付オブジェクトテスト
        NX.isDefined(new Date()).should.equal(true);

    },

    // }}}
    // {{{ test isIterable#array

    'test isIterable#array': function() {

        NX.isIterable([]).should.equal(true);
        NX.isIterable(['1','2','3']).should.equal(true);

    },

    // }}}
    // {{{ test isIterable#object

    'test isIterable#object': function() {

        // オブジェクトは回せないほうに入る
        NX.isIterable({}).should.not.equal(true);
        NX.isIterable({foo:'1',bar:'2',hoge:'3'}).should.not.equal(true);

    },

    // }}}
    // {{{ test isIterable#otherwise

    'test isIterable#otherwise': function() {

        // それ以外も回せない
        NX.isIterable('Next JS').should.not.equal(true);
        NX.isIterable(1234).should.not.equal(true);
        NX.isIterable(true).should.not.equal(true);
        NX.isIterable(new Date()).should.not.equal(true);
        NX.isIterable(function(){}).should.equal(true);

    },

    // }}}
    // {{{ test clone#standard

    'test clone#standard': function() {

        var o = {
            src: 'src object'
        };

        var c = NX.clone(o);

        o.src.should.equal('src object');
        c.src.should.equal('src object');

        o.src = 'changed';

        o.src.should.equal('changed');
        c.src.should.equal('src object');

    },

    // }}}
    // {{{ test clone#function

    'test clone#function': function() {

        var o = function() {
            return 'original';
        };

        var c = NX.clone(o);

        o().should.equal('original');
        c().should.equal('original');

        o = function() {
            return 'replace';
        }

        o().should.equal('replace');
        c().should.equal('original');

    },

    // }}}
    // {{{ test clone#date

    'test clone#date': function() {

        var date1 = new Date();

        var date2 = NX.clone(date1);

        date1.getMilliseconds().should.equal(date2.getMilliseconds());
        date2.setMilliseconds(500);
        date1.getMilliseconds().should.not.equal(date2.getMilliseconds());
    },

    // }}}
    // {{{ test clone#array

    'test clone#array': function() {

        var o = [1,2,3];
        var c = NX.clone(o);

        o[0].should.equal(1);
        o[1].should.equal(2);
        o[2].should.equal(3);

        c[0].should.equal(1);
        c[1].should.equal(2);
        c[2].should.equal(3);

        o.push(4);

        o.length.should.equal(4);
        c.length.should.equal(3);

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

        o.cn[0].tag.should.equal('a');
        o.cn[1].tag.should.equal('span');

        c.cn[0].tag.should.equal('a');
        c.cn[1].tag.should.equal('span');

        o.obj[0].tag.should.equal('a');
        o.obj[1].tag.should.equal('span');

        c.obj[0].tag.should.equal('a');
        c.obj[1].tag.should.equal('span');

        c.cn.push({tag: 'div'});

        o.cn.length.should.equal(2);
        c.cn.length.should.equal(3);

        o.obj.length.should.equal(2);
        c.obj.length.should.equal(2);

    },

    // }}}
    // {{{ test clone#empty

    'test clone#empty': function() {

        var c = NX.clone();
        assert.equal(c, undefined);

        var c = NX.clone(null);
        assert.equal(c, null);

        var c = NX.clone('');
        assert.equal(c, '');

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
    // {{{ test define#pattern1

    'test define#pattern1': function() {

        /*
         NX.define('NXTest.define.cls1', {
            config: {
                name: 'Awesome',
                isAwesome: true
            },
            constructor: function(config) {
                this.initConfig(config);
                return this;
            },
            applyName : function(val) {
                return "[" + val + "]";
            }
        });

        var cls = new NXTest.define.cls1();

        cls.getName().should.equal('[Awesome]');
        cls.getIsAwesome().should.equal(true);
        cls.isAwesome.should.be.ok;

        cls.setName('Next JS');
        cls.getName().should.equal('[Next JS]');

        cls.setConfig({
            isAwesome: false
        });

        cls.getIsAwesome().should.equal(false);
        cls.isAwesome.should.not.be.ok;
        */

    },

    // }}}
    // {{{ test define#pattern2

    'test define#pattern2': function() {

         NX.define('NXTest.define.cls2', {
             config: {
                 name: 'Awesome',
                 isAwesome: true
             },
             constructor: function(config) {
                 this.initConfig(config);
                 return this;
             },
             applyName : function(val) {
                 return "[" + val + "]";
             }
        });

        NX.define('NXTest.define.cls3', {
            extend: 'NXTest.define.cls2',
            constructor : function() {
                this.callParent(arguments);
            }
        });


        var cls3 = new NXTest.define.cls3();

        cls3.getName().should.equal('[Awesome]');
        cls3.getIsAwesome().should.equal(true);

        cls3.setName('Next JS');
        cls3.getName().should.equal('[Next JS]');

    },

    // }}}
    // {{{ test define#pattern3

    'test define#pattern3': function() {

         NX.define('NXTest.define.cls4', {
             statics: {
                 value: 123,
                 func: function() {
                     return 'foo';
                 }
             }
         });
         NXTest.define.cls4.value.should.equal(123);
         NXTest.define.cls4.func().should.equal('foo');

    },

    // }}}
    // {{{ test define#pattern4

    'test define#pattern4': function() {

        var f = function() {
        };

        NX.define('NXTest.define.cls5', {
            extend: f
        });

        var cls = new NXTest.define.cls5();

        NX.isFunction(cls.initConfig).should.be.ok;

    },

    // }}}
    // {{{ test define#pattern5

    'test define#pattern5': function() {

        NX.define('NXTest.define.cls61', {
            config: {
                fee: 'baz'
            },
            foo: 'bar',
            hoge: function() {
                return 'hoge';
            }
        });

        NX.define('NXTest.define.cls62', {
            config: {
                fee: 'boo'
            },
            mixins: [
                'NXTest.define.cls61'
            ]
        });

        var cls = new NXTest.define.cls62();

        cls.hoge().should.equal('hoge');
        cls.foo.should.equal('bar');
        cls.config.fee.should.equal('boo');

    },

    // }}}
    // {{{ test define#pattern6

    'test define#pattern6': function() {

        NX.define('NXTest.define.p6cls', {
        });

        NX.define('NXTest.define.p6cls2', {
        });

        NX.define('NXTest.define.p6cls3', {
            mixins: {
                '0': 'NXTest.define.p6cls',
                '1': 'NXTest.define.p6cls2'
            }
        });

    },

    // }}}
    // {{{ test getRandomInt#pattern1

    'test getRandomInt#pattern1': function() {

        var n = NX.getRandomInt(0, 1024);
        if(n > 1024) { assert.ok(false); }

        var n = NX.getRandomInt(0, 0);
        if(n > 0) { assert.ok(false); }
        n.should.equal(0);

        var n = NX.getRandomInt(0, 1);
        if(n > 1) { assert.ok(false); }

        var n = NX.getRandomInt(1, 0);
        n.should.equal(1);
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
    // {{{ test uid#pattern1

    'test uid#pattern1': function() {

        var ret = [];

        for(var i=0; i<2; i++) {

            var v = NX.uid(24);

            NX.Array.contains(ret, v).should.equal(false);

            ret.push(v);

        }

    },

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
