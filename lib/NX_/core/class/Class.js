/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class

NX.Class = require('./Class/constructor');
NX.$implements(__dirname + '/Class/', NX.Class);
NX.Class.registerPreprocessor('extend', require('./Class/preprocessor/extend'), true);
NX.Class.registerPreprocessor('statics', require('./Class/preprocessor/statics'));
NX.Class.registerPreprocessor('inheritableStatics', require('./Class/preprocessor/inheritableStatics'));
NX.Class.registerPreprocessor('mixins', require('./Class/preprocessor/mixins'));
NX.Class.registerPreprocessor('config', require('./Class/preprocessor/config'));
NX.Class.setDefaultPreprocessors(['extend', 'statics', 'inheritableStatics', 'mixins', 'config']);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
