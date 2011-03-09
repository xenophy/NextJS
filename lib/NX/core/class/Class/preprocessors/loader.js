/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

T_NX = require('../../../../core');
T_ClassManager = require('../../ClassManager');

// }}}
// {{{ NX.Class.preprocessors.loader

var $METHOD = module.exports = function(cls, data, fn) {

    var me = this,
        dependencyProperties = ['extend', 'mixins', 'requires'],
        dependencies = [],
        className = T_ClassManager.getName(cls),
        propertyValue;

    dependencyProperties.forEach(function(propertyName, i) {

        if(data.hasOwnProperty(propertyName)) {

            propertyValue = data[propertyName];

            if(T_NX.isString(propertyValue)) {

                dependencies.push(propertyValue);

            } else if(T_NX.isArray(propertyValue)) {

                for(j = 0, subLn = propertyValue.length; j < subLn; j++) {
                    value = propertyValue[j];

                    if(T_NX.isString(value)) {
                        dependencies.push(value);
                    }
                }
            } else {
                for(j in propertyValue) {
                    if(propertyValue.hasOwnProperty(j)) {
                        value = propertyValue[j];

                        if(T_NX.isString(value)) {
                            dependencies.push(value);
                        }
                    }
                }
            }
        }

    });

    dependencies.forEach(function(item, i) {

        var exists = false;
        try {
            eval('var examin = ' + item + ';');
            if(examin) {
                exists = true;
            }
        } catch(e) {
        }

        // TODO: 自動読み込み いるか？いらなくね？

        if(exists) {



        }

    });

    dependencyProperties.forEach(function(propertyName, i) {

        if(data.hasOwnProperty(propertyName)) {
            propertyValue = data[propertyName];

            if(T_NX.isString(propertyValue)) {

                data[propertyName] = T_ClassManager.get(propertyValue);

            } else if(T_NX.isArray(propertyValue)) {

                for(j = 0, subLn = propertyValue.length; j < subLn; j++) {

                    value = propertyValue[j];

                    if(T_NX.isString(value)) {
                        data[propertyName][j] = T_ClassManager.get(value);
                    }
                }

            } else {

                for(var k in propertyValue) {

                    if(propertyValue.hasOwnProperty(k)) {

                        value = propertyValue[k];

                        if(T_NX.isString(value)) {
                            data[propertyName][k] = T_ClassManager.get(value);
                        }
                    }

                }

            }

        }

    });

    if(fn) {
        fn.call(this, cls, data);
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
