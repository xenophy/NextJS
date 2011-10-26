/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.message.Stream.constructor

module.exports = function(message) {

   var self         = this;

   stream.Stream.call(self);

   self.message   = message;
   self.readable    = true;
   self.resume      = null;
   self.paused      = false;
   self.stopped   = false;
   self.stream      = null;

   var output_process = function(next)
   {
      var check = function()
      {
         if(self.stopped)
            return;

         else if(self.paused)
            self.resume = next;

         else
            next();
      };

      process.nextTick(check);
   };

   var output_mixed = function()
   {
      var data       = [];
      var boundary   = generate_boundary();

      self.emit('data', ["Content-Type: multipart/mixed; boundary=\"", boundary, "\"", CRLF, CRLF].join(""));
      output_process(function() { output_message(-1, boundary); });
   };

   var output_message = function(index, boundary)
   {
      var next = function()
      {
         output_process(function() { output_message(index + 1, boundary); });
      };

      if(index < 0)
      {
         self.emit('data', ["--", boundary, CRLF].join(""));

         if(self.message.html)
         {
            output_process(function() { output_alternatives(next); });
         }
         else
         {
            output_text(next);
         }
      }
      else if(index < self.message.attachments.length)
      {
         self.emit('data', ["--", boundary, CRLF].join(""));
         output_process(function() { output_attachment(self.message.attachments[index], next); });
      }
      else
      {
         self.emit('data', ["--", boundary, "--", CRLF, CRLF].join(""));
         self.emit('end');
      }
   };

   var output_alternatives = function(next)
   {
      var boundary   = generate_boundary();

      self.emit('data', ["Content-Type: multipart/alternative; boundary=\"", boundary, "\"", CRLF, CRLF].join(""));
      self.emit('data', ["--", boundary, CRLF].join(""));

      output_text(function(){});

      var data = ["--", boundary, CRLF];

      data = data.concat(["Content-Type:text/html; charset=", self.message.html.charset, CRLF, "Content-Transfer-Encoding: base64", CRLF]);
      data = data.concat(["Content-Disposition: inline", CRLF, CRLF]);
      data = data.concat([(new Buffer(self.message.html.message)).toString("base64"), CRLF, CRLF]);
      data = data.concat(["--", boundary, "--", CRLF, CRLF]);

      self.emit('data', data.join(""));
      next();
   };

   var output_attachment = function(attachment, next)
   {
      var data = ["Content-Type: ", attachment.type, CRLF, "Content-Transfer-Encoding: base64", CRLF];
      data      = data.concat(["Content-Disposition: attachment; filename=\"", attachment.name, "\"", CRLF, CRLF]);

      self.emit('data', data.join(""));
      
      var mimechunk    = 76; // MIME standard wants 76 char chunks when sending out
      var chunk      = mimechunk*25*3; // 5700
      var buffer       = new Buffer(chunk);
      var opened       = function(err, fd)
      {
         if(!err)
         {
            var read = function(err, bytes)
            {
               if(self.paused)
               {
                  self.resume = function() { read(err, bytes); };
               }
               else if(self.stopped)
               {
                  fs.close(fd);
               }
               else if(!err)
               {
                  var info      = buffer.toString("base64", 0, bytes);
                  var leftover= info.length % mimechunk;
                  var loops   = Math.round(info.length / mimechunk);

                  for(var step = 0; step < loops; step++)
                  {
                     self.emit('data', info.substring(step*mimechunk, mimechunk*(step + 1)) + CRLF);
                  }

                  if(bytes == chunk) // gauranteed no leftovers
                  {
                     fs.read(fd, buffer, 0, chunk, null, read);
                  }
                  else
                  {
                     self.emit('data', leftover ? info.substr(-leftover) + CRLF + CRLF : CRLF); // important!
                     fs.close(fd, next);
                  }
               }
               else
               {
                  fs.close(fd);
                  self.emit('error', err);
               }
            };

            fs.read(fd, buffer, 0, chunk, null, read);
         }
         else
            self.emit('error', err);
      };

      fs.open(attachment.path, 'r+', opened);
   };

   var output_text = function(next)
   {
      var data = ["Content-Type:", self.message.content, CRLF, "Content-Transfer-Encoding: 7bit", CRLF];
      data = data.concat(["Content-Disposition: inline", CRLF, CRLF]);
      data = data.concat([self.message.text || "", CRLF, CRLF]);

      self.emit('data', data.join(""));
      next();
   };

   var output_data = function()
   {
      // are there attachments or alternatives?
      if(self.message.attachments.length || self.message.html)
      {
         self.emit('data', "MIME-Version: 1.0" + CRLF);
         output_process(output_mixed);
      }

      // otherwise, you only have a text message
      else
      {
         output_text(function() { self.emit('end'); });
      }
   };

   var output_header = function()
   {
      var data = [];

      for(var header in self.message.header)
      {
         // do not output BCC in the headers...
         if(!(/bcc/i.test(header)))
            data = data.concat([header, ": ", self.message.header[header], CRLF]);
      }

      self.emit('data', data.join(''));
      output_process(output_data);
   };

   output_process(output_header);
   return;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
