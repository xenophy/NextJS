/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Parser.write

module.exports = function(buffer) {

    var me = this,
        self = NX.server.multipart.Parser,
        i = 0,
        len = buffer.length,
        prevIndex = me.index,
        index = me.index,
        state = me.state,
        flags = me.flags,
        lookbehind = me.lookbehind,
        boundary = me.boundary,
        boundaryChars = me.boundaryChars,
        boundaryLength = me.boundary.length,
        boundaryEnd = boundaryLength - 1,
        bufferLength = buffer.length,
        c,
        cl,
        mark = function(name) {
            me[name+'Mark'] = i;
        },
        clear = function(name) {
            delete me[name+'Mark'];
        },
        callback = function(name, buffer, start, end) {

            if(start !== undefined && start === end) {
                return;
            }

            var callbackSymbol = 'on' + name.substr(0, 1).toUpperCase() + name.substr(1);

            if(callbackSymbol in me) {
                me[callbackSymbol](buffer, start, end);
            }
        },
        dataCallback = function(name, clear) {

            var markSymbol = name + 'Mark';

            if(!(markSymbol in me)) {
                return;
            }

            if(!clear) {

                callback(name, buffer, me[markSymbol], buffer.length);
                me[markSymbol] = 0;

            } else {

                callback(name, buffer, me[markSymbol], i);
                delete me[markSymbol];

            }
        };

    for(i = 0; i < len; i++) {

        c = buffer[i];

        switch(state) {

            case self.PARSER_UNINITIALIZED:
                return i;

            case self.START:
                index = 0;
                state = self.START_BOUNDARY;

            case self.START_BOUNDARY:

                if(index == boundary.length - 2) {

                    if(c != self.CR) {
                        return i;
                    }

                    index++;

                    break;

                } else if(index - 1 == boundary.length - 2) {

                    if(c != self.LF) {
                        return i;
                    }
                    index = 0;

                    callback('partBegin');

                    state = self.HEADER_FIELD_START;

                    break;

                }

                if(c != boundary[index + 2]) {
                    return i;
                }

                index++;

                break;

            case self.HEADER_FIELD_START:

                state = self.HEADER_FIELD;

                mark('headerField');

                index = 0;

            case self.HEADER_FIELD:

                if(c == self.CR) {

                    clear('headerField');
                    state = self.HEADERS_ALMOST_DONE;

                    break;

                }

                index++;

                if(c == self.HYPHEN) {
                    break;
                }

                if(c == self.COLON) {

                    if(index == 1) {
                        return i;
                    }

                    dataCallback('headerField', true);

                    state = self.HEADER_VALUE_START;

                    break;

                }

                cl = self.lower(c);

                if(cl < self.A || cl > self.Z) {
                    return i;
                }

                break;

            case self.HEADER_VALUE_START:

                if (c == self.SPACE) {
                    break;
                }

                mark('headerValue');

                state = self.HEADER_VALUE;

            case self.HEADER_VALUE:

                if(c == self.CR) {
                    dataCallback('headerValue', true);
                    callback('headerEnd');
                    state = self.HEADER_VALUE_ALMOST_DONE;
                }

                break;

            case self.HEADER_VALUE_ALMOST_DONE:

                if(c != self.LF) {
                    return i;
                }

                state = self.HEADER_FIELD_START;

                break;

            case self.HEADERS_ALMOST_DONE:

                if(c != self.LF) {
                    return i;
                }

                callback('headersEnd');

                state = self.PART_DATA_START;

                break;

            case self.PART_DATA_START:

                state = self.PART_DATA

                mark('partData');

            case self.PART_DATA:

                prevIndex = index;

                if(index == 0) {

                    i += boundaryEnd;

                    while(i < bufferLength && !(buffer[i] in boundaryChars)) {
                        i += boundaryLength;
                    }

                    i -= boundaryEnd;
                    c = buffer[i];
                }

                if(index < boundary.length) {

                    if(boundary[index] == c) {

                        if(index == 0) {
                            dataCallback('partData', true);
                        }

                        index++;

                    } else {

                        index = 0;
                    }

                } else if(index == boundary.length) {

                    index++;

                    if(c == self.CR) {

                        flags |= self.PART_BOUNDARY;

                    } else if(c == self.HYPHEN) {

                        flags |= self.LAST_BOUNDARY;

                    } else {

                        index = 0;

                    }

                } else if(index - 1 == boundary.length) {

                    if(flags & self.PART_BOUNDARY) {

                        index = 0;

                        if(c == self.LF) {

                            flags &= ~self.PART_BOUNDARY;
                            callback('partEnd');
                            callback('partBegin');
                            state = self.HEADER_FIELD_START;
                            break;
                        }

                    } else if(flags & self.LAST_BOUNDARY) {

                        if(c == self.HYPHEN) {

                            callback('partEnd');
                            callback('end');
                            state = self.END;

                        } else {

                            index = 0;

                        }
                    } else {
                        index = 0;
                    }
                }

                if(index > 0) {

                    lookbehind[index-1] = c;

                } else if(prevIndex > 0) {

                    callback('partData', lookbehind, 0, prevIndex);
                    prevIndex = 0;
                    mark('partData');

                    i--;
                }
                break;

            case self.END:
                break;

            default:
                return i;

        }
    }

    dataCallback('headerField');
    dataCallback('headerValue');
    dataCallback('partData');

    me.index = index;
    me.state = state;
    me.flags = flags;

    return len;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
