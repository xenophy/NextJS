/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.MultipartForm.$parseContentType

module.exports = function() {

    var me = this,
        m;

    if(m = me.headers['content-type'].match(/boundary=([^;]+)/i)) {

        var boundary = m[1],
            parser = NX.create('NX.server.multipart.Parser'),
            headerField,
            headerValue,
            part;

        parser.initWithBoundary(boundary);

        parser.onPartBegin = function() {
            part = new EventEmitter();
            part.headers = {};
            part.name = null;
            part.filename = null;
            part.mime = null;
            headerField = '';
            headerValue = '';
        };

        parser.onHeaderField = function(b, start, end) {
            headerField += b.toString(me.encoding, start, end);
        };

        parser.onHeaderValue = function(b, start, end) {
            headerValue += b.toString(me.encoding, start, end);
        };

        parser.onHeaderEnd = function() {

            headerField = headerField.toLowerCase();
            part.headers[headerField] = headerValue;

            var m;

            if(headerField == 'content-disposition') {

                if(m = headerValue.match(/name="([^"]+)"/i)) {
                    part.name = m[1];
                }

                if(m = headerValue.match(/filename="([^;]+)"/i)) {
                    part.filename = m[1].substr(m[1].lastIndexOf('\\') + 1);
                }

            } else if (headerField == 'content-type') {
                part.mime = headerValue;
            }

            headerField = '';
            headerValue = '';
        };

        parser.onHeadersEnd = function() {
            me.onPart(part);
        };

        parser.onPartData = function(b, start, end) {
            part.emit('data', b.slice(start, end));
        };

        parser.onPartEnd = function() {
            part.emit('end');
        };

        parser.onEnd = function() {
            me.ended = true;
            me._maybeEnd();
        };

        this._parser = parser;

    } else {

        me.$error(new Error('bad content-type header, no multipart boundary'));

    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
