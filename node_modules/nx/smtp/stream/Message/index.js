/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.stream.Message

NX.define('NX.smtp.stream.Message', {

    // {{{ extend

    extend: NX.Stream.Stream,

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ destroy

    destroy: require('./destroy'),

    // }}}
    // {{{ destroySoon

    destroySoon: require('./destroySoon'),

    // }}}
    // {{{ pause

    pause: require('./pause'),

    // }}}
    // {{{ resume

    resume: require('./resume')

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
