/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.ClassManager.getNamesByExpression

var $METHOD = module.exports = function(maps, expression) {

    var nameToAliasesMap = maps.nameToAliases,
    names = [],
    name, alias, aliases, possibleName, regex, i, ln;

    if(!T_NX.isString(expression) || expression.length < 1) {
        throw new Error("[NX.ClassManager.getNamesByExpression] expression must be a valid string");
    }

    if(expression.indexOf('*') !== -1) {
        expression = expression.replace(/\*/g, '(.*?)');
        regex = new RegExp('^' + expression + '$');

        for(name in nameToAliasesMap) {
            if(nameToAliasesMap.hasOwnProperty(name)) {
                aliases = nameToAliasesMap[name];

                if(name.search(regex) !== -1) {
                    names.push(name);
                } else {
                    for(i = 0, ln = aliases.length; i < ln; i++) {
                        alias = aliases[i];

                        if(alias.search(regex) !== -1) {
                            names.push(name);
                            break;
                        }
                    }
                }
            }
        }

    } else {

        possibleName = this.getNameByAlias(expression);

        if(possibleName) {
            names.push(possibleName);
        } else {
            possibleName = this.getNameByAlternate(expression);

            if(possibleName) {
                names.push(possibleName);
            } else {
                names.push(expression);
            }
        }
    }

    return names;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
