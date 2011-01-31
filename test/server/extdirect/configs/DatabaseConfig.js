/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ DatabaseConfig

module.exports = {

    // {{{ connections

    connections : {
        default: {
            name: 'default',
            adapter: 'mysql',
            charset: 'UTF8',
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'nextjs',
            prefix: '',
            port: '',
            socket: ''
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
