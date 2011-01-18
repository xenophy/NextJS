/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX.util.Deferred Class Tests

module.exports = {

    // {{{ test next#standard

    'test next#standard': function() {

        /*
        NX.fs
        .rename('/Users/kotsutsumikazuhiro/test.txt', '/Users/kotsutsumikazuhiro/test2.txt').next(function() {
        })
        .rename('/Users/kotsutsumikazuhiro/test2.txt', '/Users/kotsutsumikazuhiro/test.txt').next(function() {
        })
        .error(function() {
            console.log(arguments);
        });
        */

        /*
        .next(function() {

            console.log("owatta/");
        
        });
        /*
        var d = new NX.util.Deferred();

        var called = {
            func1: false,
            func2: false,
            func3: false
        };

        d
        .next(function() {
            called.func1 = true;
        })
        .next(function() {
            called.func2 = true;
        })
        .next(function() {
            called.func3 = true;
        });

        d.call();

        assert.equal(called.func1, true);
        assert.equal(called.func2, true);
        assert.equal(called.func3, true);

        /*
        console.log(
        NX.fs
        .rename('test.txt', 'test2.txt')
        );
        /*
        .rename('/Users/kotsutsumikazuhiro/UserDir/xFrameworkNX/test.txt', '/Users/kotsutsumikazuhiro/UserDir/xFrameworkNX/test2.txt')
        .rename('/Users/kotsutsumikazuhiro/UserDir/xFrameworkNX/test2.txt', '/Users/kotsutsumikazuhiro/UserDir/xFrameworkNX/test3.txt')
        .rename('/Users/kotsutsumikazuhiro/UserDir/xFrameworkNX/test3.txt', '/Users/kotsutsumikazuhiro/UserDir/xFrameworkNX/test.txt')
        .error(function() {
            console.log("koko?");
        });
        */

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
