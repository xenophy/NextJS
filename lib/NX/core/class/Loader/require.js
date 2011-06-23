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

    for(i = 0, ln = classNames.length; i < ln; i++) {

        className = classNames[i];

        console.log(className);
    }




            /*
            // If the dynamic dependency feature is not being used, throw an error
            // if the dependencies are not defined
            if (!this.config.enabled) {
                if (classNames.length > 0) {
                    Ext.Error.raise({
                        sourceClass: "Ext.Loader",
                        sourceMethod: "require",
                        msg: "Ext.Loader is not enabled, so dependencies cannot be resolved dynamically. " +
                             "Missing required class" + ((classNames.length > 1) ? "es" : "") + ": " + classNames.join(', ')
                    });
                }
            }

            if (classNames.length === 0) {
                fn.call(scope);
                return this;
            }

            this.queue.push({
                requires: classNames,
                callback: fn,
                scope: scope
            });

            classNames = classNames.slice();

            for (i = 0, ln = classNames.length; i < ln; i++) {
                className = classNames[i];

                if (!this.isFileLoaded.hasOwnProperty(className)) {
                    this.isFileLoaded[className] = false;

                    filePath = this.getPath(className);

                    this.classNameToFilePathMap[className] = filePath;

                    this.numPendingFiles++;

                    //<if nonBrowser>
                    if (isNonBrowser) {
                        if (isNodeJS) {
                            require(filePath);
                        }
                        // Temporary support for hammerjs
                        else {
                            var f = fs.open(filePath),
                                content = '',
                                line;

                            while (true) {
                                line = f.readLine();
                                if (line.length === 0) {
                                    break;
                                }
                                content += line;
                            }

                            f.close();
                            eval(content);
                        }

                        this.onFileLoaded(className, filePath);

                        if (ln === 1) {
                            return Manager.get(className);
                        }

                        continue;
                    }
                    //</if>
                    this.loadScriptFile(
                        filePath,
                        Ext.Function.pass(this.onFileLoaded, [className, filePath], this),
                        Ext.Function.pass(this.onFileLoadError, [className, filePath]),
                        this,
                        this.syncModeEnabled
                    );
                }
            }

            return this;
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

