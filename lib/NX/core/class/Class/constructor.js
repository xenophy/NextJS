/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class.constructor

var Class,
    Base = NX.Base,
    baseStaticProperties = [],
    baseStaticProperty;

for (baseStaticProperty in Base) {
    if (Base.hasOwnProperty(baseStaticProperty)) {
        baseStaticProperties.push(baseStaticProperty);
    }
}

exports = function(newClass, classData, onClassCreated) {

    if (typeof newClass !== 'function') {
        onClassCreated = classData;
        classData = newClass;
        newClass = function() {
            return this.constructor.apply(this, arguments);
        };
    }

    if (!classData) {
        classData = {};
    }

    var preprocessorStack = classData.preprocessors || Class.getDefaultPreprocessors(),
        registeredPreprocessors = Class.getPreprocessors(),
        index = 0,
        preprocessors = [],
        preprocessor, preprocessors, staticPropertyName, process, i, j, ln;

    for (i = 0, ln = baseStaticProperties.length; i < ln; i++) {
        staticPropertyName = baseStaticProperties[i];
        newClass[staticPropertyName] = Base[staticPropertyName];
    }

    delete classData.preprocessors;

    for (j = 0, ln = preprocessorStack.length; j < ln; j++) {
        preprocessor = preprocessorStack[j];

        if (typeof preprocessor === 'string') {
            preprocessor = registeredPreprocessors[preprocessor];

            if (!preprocessor.always) {
                if (classData.hasOwnProperty(preprocessor.name)) {
                    preprocessors.push(preprocessor.fn);
                }
            }
            else {
                preprocessors.push(preprocessor.fn);
            }
        }
        else {
            preprocessors.push(preprocessor);
        }
    }

    classData.onClassCreated = onClassCreated;

    classData.onBeforeClassCreated = function(cls, data) {

        onClassCreated = data.onClassCreated;

        delete data.onBeforeClassCreated;
        delete data.onClassCreated;

        cls.implement(data);

        if (onClassCreated) {
            onClassCreated.call(cls, cls);
        }
    };

    process = function(cls, data) {

        preprocessor = preprocessors[index++];

        if (!preprocessor) {
            data.onBeforeClassCreated.apply(this, arguments);
            return;
        }

        if (preprocessor.call(this, cls, data, process) !== false) {
            process.apply(this, arguments);
        }
    };

    process.call(Class, newClass, classData);

    return newClass;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
