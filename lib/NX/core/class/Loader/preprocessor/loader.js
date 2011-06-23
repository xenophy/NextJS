/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Loader.preprocessor.loader

module.exports = function(cls, data, continueFn) {

    var me = this,
        dependencyProperties = ['extend', 'mixins', 'requires'],
        dependencies = [],
        className = NX.ClassManager.getName(cls),
        i, j, ln, subLn, value, propertyName, propertyValue;

    for(i = 0, ln = dependencyProperties.length; i < ln; i++) {

        propertyName = dependencyProperties[i];

        if(data.hasOwnProperty(propertyName)) {

            propertyValue = data[propertyName];

            if(typeof propertyValue === 'string') {

                dependencies.push(propertyValue);

            } else if(propertyValue instanceof Array) {

                for(j = 0, subLn = propertyValue.length; j < subLn; j++) {

                    value = propertyValue[j];

                    if(typeof value === 'string') {
                        dependencies.push(value);
                    }

                }

            } else {

                for(j in propertyValue) {

                    if(propertyValue.hasOwnProperty(j)) {

                        value = propertyValue[j];

                        if(typeof value === 'string') {
                            dependencies.push(value);
                        }
                    }

                }

            }

        }

    }

    if(dependencies.length === 0) {

        return;

    }

    var deadlockPath = [],
        requiresMap = NX.Loader.requiresMap,
        detectDeadlock;

    if (className) {

        requiresMap[className] = dependencies;

        detectDeadlock = function(cls) {

            deadlockPath.push(cls);

            if(requiresMap[cls]) {

                /*
                if(NX.Array.contains(requiresMap[cls], className)) {

                    NX.Error.raise({
                        sourceClass: "NX.Loader",
                        msg: "Deadlock detected while loading dependencies! '" + className + "' and '" +
                                deadlockPath[1] + "' " + "mutually require each other. Path: " +
                                        deadlockPath.join(' -> ') + " -> " + deadlockPath[0]
                    });

                }
                */

                for(i = 0, ln = requiresMap[cls].length; i < ln; i++) {
                    detectDeadlock(requiresMap[cls][i]);
                }

            }
        };

        detectDeadlock(className);
    }

    //</debug>

    //NX.Loader.require(dependencies, function() {

        for(i = 0, ln = dependencyProperties.length; i < ln; i++) {

            propertyName = dependencyProperties[i];

            if(data.hasOwnProperty(propertyName)) {

                propertyValue = data[propertyName];

                if(typeof propertyValue === 'string') {

                    data[propertyName] = NX.ClassManager.get(propertyValue);

                } else if(propertyValue instanceof Array) {

                    for(j = 0, subLn = propertyValue.length; j < subLn; j++) {

                        value = propertyValue[j];

                        if(typeof value === 'string') {

                            data[propertyName][j] = NX.ClassManager.get(value);

                        }
                    }

                } else {

                    for(var k in propertyValue) {

                        if(propertyValue.hasOwnProperty(k)) {

                            value = propertyValue[k];

                            if(typeof value === 'string') {

                                data[propertyName][k] = NX.ClassManager.get(value);

                            }
                        }
                    }
                }
            }
        }

        continueFn.call(me, cls, data);
//    });

    return false;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
