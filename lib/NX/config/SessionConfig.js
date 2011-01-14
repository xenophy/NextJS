/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.config.SessionConfig

NX.config['session'] = {

    // {{{ key

    key: 'nextjs.sid',

    // }}}
    // {{{ secret

    secret : require('crypto').createHash('md5').update(Math.random()).digest('hex'),

    // }}}
    // {{{ memory

    memory : {

        reapInterval : -1,

        // maxAge: 600000

        cookie : {
            persistent : false
        }

    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
