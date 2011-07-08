/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Form.handlePart

module.exports = function(part) {

    var me = this;

    if(!part.filename) {

        var value = '',
            StringDecoder = require('string_decoder').StringDecoder,
            decoder = new StringDecoder(me.encoding);

        part.on('data', function(buffer) {

            me.$fieldsSize += buffer.length;

            if(me.$fieldsSize > me.maxFieldsSize) {

                me.$error(new Error('maxFieldsSize exceeded, received ' + me.$fieldsSize + ' bytes of field data'));
                return;
            }

            value += decoder.write(buffer);

        });

        part.on('end', function() {
            me.emit('field', part.name, value);
        });

        return;
    }

    me.$flushing++;

    var file = NX.create('NX.server.multipart.File', {
        path: me.$uploadPath(part.filename),
        name: part.filename,
        type: part.mime,
    });

    me.emit('fileBegin', part.name, file);

    file.open();

    part.on('data', function(buffer) {

        me.pause();

        file.write(buffer, function() {

            me.resume();

        });

    });

    part.on('end', function() {

        file.end(function() {

            me.$flushing--;
            me.emit('file', part.name, file);
            me.$maybeEnd();

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
