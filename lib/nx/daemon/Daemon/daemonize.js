/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.daemon.daemonize

module.exports = function(out, lock, fn) {

   var me = this;

   NX.Path.exists(lock, function(exists) {

       if(exists) {
           console.log('process has already exited.');
           return;
       }

       NX.Fs.open(out, 'a+', 0666, function(err, fd) {

           if(err) {
               return fn(err);
           }

           try {

               var pid = me.start(fd);

               me.lock(lock);

               fn(null, pid);

           } catch(e) {

               fn(e);

           }

       });

   });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
