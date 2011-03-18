/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.kill

var $METHOD = module.exports = function(sig) {

    var me = this;

    me.fireEvent('kill', sig, me);

    /*
  this.children.forEach(function(worker){
    worker.proc.kill(sig);
  });
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
