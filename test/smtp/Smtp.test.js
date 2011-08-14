/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('should');
assert = require('assert');

// }}}
// {{{ NX.smtp.Smtp Class Tests

module.exports = {

    // {{{ 'test connect#pattern1'

    'test connect#pattern1': function(beforeExit) {

        var host = process.env.NX_TEST_MAIL_SERVER;
        var to = '小堤 一弘 <' + process.env.NX_TEST_MAIL_TO + '>';
        var from = 'ねくすとじぇーえす <' + process.env.NX_TEST_MAIL_FROM + '>';

        if(host) {

            var mail = NX.create('NX.smtp.Client', {
                host: host
            });

            mail.send({
                to: to,
                from: from,
                subject: 'てすとんタイトル',
                text: 'てすとん'
            });

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
