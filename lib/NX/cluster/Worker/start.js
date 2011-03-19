/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var net = require('net');

// }}}
// {{{ NX.server.Worker.start

var $METHOD = module.exports = function() {

    var me = this,
        call = me.master.call;

    me.master.call = function(){

        var args = Array.prototype.slice.call(arguments);
        args.unshift(me.id);

        return call.apply(this, args);
    };

    me.server.on('listening', function(){

        var group = me.options.group;

        if(group) {
            process.setgid(group);
        }

        var user = me.options.user;

        if(user) {
            process.setuid(user);
        }

    });

    // 標準入力ソケット生成
    me.stdin = new net.Socket(0, 'unix');
    me.stdin.setEncoding('ascii');
    me.stdin.on('fd', me.server.listenFD.bind(me.server));
    me.stdin.on('data', me.frame.bind(me));
    me.stdin.resume();



/*



  // signal handlers
  process.on('SIGINT', this.destroy.bind(this));
  process.on('SIGTERM', this.destroy.bind(this));
  process.on('SIGQUIT', this.close.bind(this));
  process.on('uncaughtException', function(err){
    // stderr for logs
    console.error(err.stack || err.message);

    // report exception
    self.master.call('workerException', err);

    // exit
    process.nextTick(function(){
      self.destroy();
    });
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
