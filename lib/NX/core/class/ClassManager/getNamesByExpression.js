/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.getNamesByExpression

module.exports = function(expression) {

    var nameToAliasesMap = this.maps.nameToAliases,
        names = [],
        name, alias, aliases, possibleName, regex, i, ln;

    if(typeof expression !== 'string' || expression.length < 1) {

        NX.Error.raise({
            sourceClass: "NX.ClassManager",
            sourceMethod: "getNamesByExpression",
            msg: "Expression " + expression + " is invalid, must be a non-empty string"
        });

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
