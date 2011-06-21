/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager

var alias = NX.Function.alias;
var Class = NX.Class;

NX.ClassManager = {};
NX.$implements(__dirname + '/ClassManager/', NX.ClassManager);

NX.ClassManager.registerPostprocessor('alias', require('./ClassManager/postprocessor/alias'));
NX.ClassManager.registerPostprocessor('singleton', require('./ClassManager/postprocessor/singleton'));
NX.ClassManager.registerPostprocessor('alternateClassName', require('./ClassManager/postprocessor/alternateClassName'));

NX.ClassManager.setDefaultPostprocessors(['alias', 'singleton', 'alternateClassName']);

NX.$implements(__dirname + '/ClassManager/NX/', NX);
NX.ns = NX.namespace;

NX.Class.registerPreprocessor('className', require('./ClassManager/preprocessor/className'), true);
NX.Class.setDefaultPreprocessorPosition('className', 'first');

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
