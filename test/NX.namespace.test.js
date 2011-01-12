/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX Class Tests

module.exports = {

    // {{{ test namespace#standard

    'test namespace#standard': function() {

        NX.namespace(
            'App',
            'App.app',
            'App.form',
            'App.grid',
            'App.tree'
        );

        assert.ok(App, 'Test create Namespace "App"');
        assert.ok(App.app, 'Test create Namespace "App.app"');
        assert.ok(App.form, 'Test create Namespace "App.form"');
        assert.ok(App.grid, 'Test create Namespace "App.grid"');
        assert.ok(App.tree, 'Test create Namespace "App.tree"');

    },

    // }}}
    // {{{ test namespace#shorthand

    'test namespace#shorthand': function() {

        NX.ns(
            'App',
            'App.app',
            'App.form',
            'App.grid',
            'App.tree'
        );

        assert.ok(App, 'Test create Namespace "App" with shorthand');
        assert.ok(App.app, 'Test create Namespace "App.app" with shorthand');
        assert.ok(App.form, 'Test create Namespace "App.form" with shorthand');
        assert.ok(App.grid, 'Test create Namespace "App.grid" with shorthand');
        assert.ok(App.tree, 'Test create Namespace "App.tree" with shorthand');

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
