/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Loader.require

module.exports = function(expressions, fn, scope, excludes) {

    var filePath, expression, exclude, className, excluded = {},
        excludedClassNames = [],
        possibleClassNames = [],
        possibleClassName, classNames = [],
        i, j, ln, subLn;

    expressions = NX.Array.from(expressions);
    excludes = NX.Array.from(excludes);

    fn = fn || NX.emptyFn;

    scope = scope || NX.global;

    for(i = 0, ln = excludes.length; i < ln; i++) {

        exclude = excludes[i];

        if(typeof exclude === 'string' && exclude.length > 0) {

            excludedClassNames = NX.ClassManager.getNamesByExpression(exclude);

            for(j = 0, subLn = excludedClassNames.length; j < subLn; j++) {

                excluded[excludedClassNames[j]] = true;

            }
        }
    }

    for(i = 0, ln = expressions.length; i < ln; i++) {

        expression = expressions[i];

        if(typeof expression === 'string' && expression.length > 0) {

            possibleClassNames = NX.ClassManager.getNamesByExpression(expression);

            for(j = 0, subLn = possibleClassNames.length; j < subLn; j++) {

                possibleClassName = possibleClassNames[j];

                if(!excluded.hasOwnProperty(possibleClassName) && !NX.ClassManager.isCreated(possibleClassName)) {

                    NX.Array.include(classNames, possibleClassName);

                }
            }
        }
    }

    classNames = classNames.slice();

    if(classNames.length === 0) {
        fn.call(scope);
        return this;
    }

    for(i = 0, ln = classNames.length; i < ln; i++) {

        className = classNames[i];

        filePath = this.getPath(className);

        this.classNameToFilePathMap[className] = filePath;

        try {
            require(filePath);
        } catch(e) {
            filePath = this.getPath(className + '.index');
            require(filePath);
        }

        if(ln === 1) {
            return NX.ClassManager.get(className);
        }

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
