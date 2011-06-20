/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class

NX.Class = Class = require('./Class/constructor');
NX.$implements(__dirname + '/Class/', NX.Class);

Class.registerPreprocessor('extend', require('./Class/preprocessor/extend'), true);
Class.registerPreprocessor('statics', require('./Class/preprocessor/statics'));
Class.registerPreprocessor('inheritableStatics', require('./Class/preprocessor/inheritableStatics'));
Class.registerPreprocessor('mixins', require('./Class/preprocessor/mixins'));
Class.registerPreprocessor('config', require('./Class/preprocessor/config'));

Class.setDefaultPreprocessors(['extend', 'statics', 'inheritableStatics', 'mixins', 'config']);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
