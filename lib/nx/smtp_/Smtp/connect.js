/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.connect

module.exports = function(fn) {

    var me = this,
        host = me.host,
        port = me.port,
        tls = NX.smtp.Tls,
        ssl = me.ssl;

    fn = fn || NX.emptyFn;

    if(me.state != NX.smtp.Smtp.NOTCONNECTED) {
        me.quit();
    }

    var connected = function(err) {

        if(!err) {

            // log("connected: " + self.host + ":" + self.port);

            if(ssl && !me.tls) {

                if(typeof(ssl) != 'boolean' && !me.sock.authorized) {

                    me.close(true);
                    fn({
                        code    : NX.smtp.Smtp.ERROR.CONNECTIONAUTH,
                        message : "could not establish an ssl connection",
                        error   : err
                    });

                } else {

                    self._secure = true;

                }

            }

        } else {

            me.close(true);
            fn({
                code:NX.smtp.Smtp.ERROR.COULDNOTCONNECT,
                error:err
            });

        }
    };

    var response = function(err, msg) {

        if(err) {

            fn(err);

        } else if(msg.code == '220') {

            // log(msg.data);

            self.state = NX.smtp.Smtp.CONNECTED;
            fn(null, msg.data);

        } else {

            // log("response (data): " + msg.data);
            me.quit();
            fn({
                code    : NX.smtp.Smtp.ERROR.BADRESPONSE,
                message : "bad response on connection",
                smtp    : msg.data,
                error   : err
            });

        }
    };

    me.state = NX.smtp.Smtp.CONNECTING;

    if(ssl) {

        me.sock = tls.connect(port, host, ssl, connected);

    } else {

        me.sock = new net.Socket();
        me.sock.connect(port, host, connected);

    }

    new NX.smtp.Response({
        stream: me.sock,
        timeout: function() {
            console.log("kitaka?");
            me.close(true);
        }
    });

    me.sock.once('response', response);


    /*

    var me = this,
        timer;

    var callback = function(err) {

        // タイムアウトクリア
        clearTimeout(timer);

        if(!err) {

            // SSL処理
            if(me.ssl && !me.tls) {

                if(typeof(me.ssl) != 'boolean' && !me.sock.authorized) {

                    me.close(true);
                    fn({code:SMTPError.CONNECTIONAUTH, message:"could not establish an ssl connection", error:err});
                    return;

                } else {

                    me._secure = true;

                }
            }

        } else {

            me.close(true);

        }

    };

    me.sock = NX.Net.Socket();

    try {

        me.state = NX.smtp.Smtp.CONNECTING;

        me.sock.connect(me.port, me.host, callback);

    } catch(e) {

        console.log(e);

    }

    timer = setTimeout(function() {

        if(me.state !== NX.smtp.Smtp.CONNECTED) {

            me.close(true);

        }

    }, me.timeout);

    NX.smtp.Response.watch(me.sock);

    me.sock.setTimeout(me.timeout);

    me.sock.once('response', function(err, data) {

        var msg = NX.smtp.Response.parse(data);

        if(!err && msg.code == '220') {

            me.state = NX.smtp.Smtp.CONNECTED;

            fn(err, data);

        } else {

            console.log("are");
            if(err)
            {
                log("response (error): " + err);
                self.close(true);

                caller(callback, {code:err.code, error:err.error, message:err.message});
            }
            else
            {
                log("response (data): " + data);
                self.quit();

                caller(callback, {code:SMTPError.BADRESPONSE, message:"bad response on connection", smtp:data, error:err});
            }

            console.log("error");

        }

    });
    */







   /*
      self._state = SMTPState.CONNECTING;
   
      if(self.ssl)
      {
         self.sock = tls.connect(self.port, self.host, self.ssl, connected);
      }
      else
      {
         self.sock = new net.Socket();
         self.sock.connect(self.port, self.host, connected);
      }

      SMTPResponse.monitor(self.sock, self.timeout, function() { self.close(true); });
      self.sock.once('response', response);
   },

      options = options || {};
   
      var self     = this;
   
      self.host    = host || self.host;
      self.port    = port || self.port;
      self.ssl     = options.ssl || self.ssl;
   
      if(self._state != SMTPState.NOTCONNECTED)
         self.quit();

      var connected = function(err) 
      {
         if(!err) 
         {
            log("connected: " + self.host + ":" + self.port);

            if(self.ssl && !self.tls)
            {
               // if key/ca/cert was passed in, check if connection is authorized
               if(typeof(self.ssl) != 'boolean' && !self.sock.authorized)
               {
                  self.close(true);
                  caller(callback, {code:SMTPError.CONNECTIONAUTH, message:"could not establish an ssl connection", error:err});
               }
               else
                  self._secure = true;
            }
         }
         else
         {
            self.close(true);
            caller(callback, {code:SMTPError.COULDNOTCONNECT, error:err});
         }
      };
   
      var response = function(err, msg)
      {
         if(err)
         {
            caller(callback, err);
         }
         else if(msg.code == '220')
         {
            log(msg.data);
   
            // might happen first, so no need to wait on connected()
            self._state = SMTPState.CONNECTED;
            caller(callback, null, msg.data);
         }
         else
         {
            log("response (data): " + msg.data);
            self.quit();
            caller(callback, {code:SMTPError.BADRESPONSE, message:"bad response on connection", smtp:msg.data, error:err});
         }
      };

   },
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
