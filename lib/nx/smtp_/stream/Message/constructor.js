/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.stream.Message.constructor

module.exports = function(config) {

    var me = this;

    NX.apply(me, config);

    NX.Stream.Stream.call(me);

    NX.applyIf(me, {
        readable    : true,
        resume      : null,
        paused      : false,
        stopped     : false,
        stream      : null
    });

    var CRLF = NX.smtp.Smtp.CRLF;

    var generateBoundary = function() {

        var text        = "";
        var possible    = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'()+_,-./:=?";

        for(var i=0; i < 69; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    };

    var outputProcess = function(next) {

        var check = function() {

            if(me.stopped) {

                return;

            } else if(me.paused) {

                me.resume = next;

            } else {

                next();

            }

        };

        process.nextTick(check);
    };

    var outputMixed = function() {

        var data        = [];
        var boundary    = generateBoundary();

        me.emit('data', ["Content-Type: multipart/mixed; boundary=\"", boundary, "\"", CRLF, CRLF].join(""));

        outputProcess(function() {
            outputMessage(-1, boundary);
        });

    };

    var outputMessage = function(index, boundary) {

        var next = function() {
            outputProcess(function() {
                outputMessage(index + 1, boundary);
            });
        };

        if(index < 0) {

            me.emit('data', ["--", boundary, CRLF].join(""));

            if(me.message.html) {

                outputProcess(function() {
                    outputAlternatives(next);
                });

            } else {

                outputText(next);

            }

        } else if(index < me.message.attachments.length) {

            me.emit('data', ["--", boundary, CRLF].join(""));

            outputProcess(function() {
                outputAttachment(me.message.attachments[index], next);
            });

        } else {

            me.emit('data', ["--", boundary, "--", CRLF, CRLF].join(""));
            me.emit('end');

        }

    };

    var outputAlternatives = function(next) {

        var boundary = generateBoundary();

        me.emit('data', ["Content-Type: multipart/alternative; boundary=\"", boundary, "\"", CRLF, CRLF].join(""));
        me.emit('data', ["--", boundary, CRLF].join(""));

        outputText(NX.emptyFn);

        var data = ["--", boundary, CRLF];

        data = data.concat(["Content-Type:text/html; charset=", me.message.html.charset, CRLF, "Content-Transfer-Encoding: base64", CRLF]);
        data = data.concat(["Content-Disposition: inline", CRLF, CRLF]);
        data = data.concat([(new Buffer(me.message.html.message)).toString("base64"), CRLF, CRLF]);
        data = data.concat(["--", boundary, "--", CRLF, CRLF]);

        me.emit('data', data.join(""));

        next();

    };

    var outputAttachment = function(attachment, next) {

        if(!attachment.type) {

            (function() {

                var name = attachment.name;
                var ext = name.substr(name.indexOf('.') + 1);

                if(NX.Mime.types[ext]) {

                    attachment.type = NX.Mime.types[ext];

                } else {

                    // TODO: Error handling
                    NX.log("file ext error");

                }

            })();

        }

        var data = ["Content-Type: ", attachment.type, CRLF, "Content-Transfer-Encoding: base64", CRLF];

        data = data.concat(["Content-Disposition: attachment; filename=\"", attachment.name, "\"", CRLF, CRLF]);

        me.emit('data', data.join(""));

        var mimechunk   = 76;
        var chunk       = mimechunk * 25 *3;
        var buffer      = new Buffer(chunk);
        var opened      = function(err, fd) {

            if(!err) {

                var read = function(err, bytes) {

                    if(me.paused) {
                        me.resume = function() {
                            read(err, bytes);
                        };

                    } else if(me.stopped) {

                        NX.Fs.close(fd);

                    } else if(!err) {

                        var info = buffer.toString("base64", 0, bytes);
                        var leftover= info.length % mimechunk;
                        var loops = info.length / mimechunk;

                        for(var step = 0; step < loops; step++) {

                            me.emit('data', info.substring(step*mimechunk, mimechunk*(step + 1)) + CRLF);

                        }

                        if(bytes == chunk) {

                            NX.Fs.read(fd, buffer, 0, chunk, null, read);

                        } else {

                            me.emit('data', leftover ? info.substr(-leftover) + CRLF + CRLF : CRLF);
                            NX.Fs.close(fd, next);

                        }

                    } else {

                        NX.Fs.close(fd);
                        self.emit('error', err);

                    }

                };

                NX.Fs.read(fd, buffer, 0, chunk, null, read);

            } else {

                me.emit('error', err);

            };

        };

        NX.Fs.open(attachment.path, 'r+', opened);
    };

    var outputText = function(next) {

        var data = ["Content-Type:", me.message.content, CRLF, "Content-Transfer-Encoding: 7bit", CRLF];

        data = data.concat(["Content-Disposition: inline", CRLF, CRLF]);
        data = data.concat([me.message.text || "", CRLF, CRLF]);

        me.emit('data', data.join(""));
        next();
    };

    var outputData = function() {

        if(me.message.attachments.length || me.message.html) {

            me.emit('data', "MIME-Version: 1.0" + CRLF);
            outputProcess(outputMixed);

        } else {

            outputText(function() {
                me.emit('end');
            });

        }
    };

    var outputHeader = function() {

        var data = [];

        for(var header in me.message.header) {

            if(!(/bcc/i.test(header))) {
                data = data.concat([header, ": ", me.message.header[header], CRLF]);
            }
        }

        me.emit('data', data.join(''));

        outputProcess(outputData);

    };

    outputProcess(outputHeader);

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
