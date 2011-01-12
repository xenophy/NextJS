/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('./core.js');
require('./config/HttpConfig.js');
require('./config/ViewConfig.js');
require('./config/ControllerConfig.js');
require('./util/DelayedTask.js');
require('./util/Deferred.js');
require('./util/Functions.js');
require('./util/Service.js');
require('./util/FileSystem.js');
require('./util/String.js');
require('./util/JSON.js');
require('./util/MarkDown.js');
require('./util/Event.js');
require('./util/Observable.js');
require('./util/MixedCollection.js');
require('./server/AbstractDispatcher.js');
require('./server/HttpServer.js');
require('./server/Dispatcher.js');
require('./controller/AbstractController.js');
require('./controller/WebController.js');
require('./controller/Action.js');
require('./module/AbstractModule.js');
require('./module/Module.js');
require('./module/Connection.js');
require('./module/adapter/AbstractAdapter.js');
require('./module/adapter/MySQL.js');
require('./view/AbstractView.js');
require('./view/ConsoleView.js');
require('./view/WebView.js');

// }}}
// {{{ NX.env

NX.env = NX.fs.pathinfo(module.parent.filename);
NX.env.libdir = __dirname;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
