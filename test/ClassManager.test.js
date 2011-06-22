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
// {{{ NX.ClassManager Class Tests

module.exports = {

    // {{{ test create#pattern1

    'test create#pattern1': function() {

        NX.ClassManager.create('My.Class1', {
            config: {
                name: 'Awesome',
                isAwesome: true
            },
            constructor: function(config) {
                this.initConfig(config);
                return this;
            }
        });

        var cls = new My.Class1();

        cls.getName().should.equal('Awesome');
        cls.getIsAwesome().should.equal(true);

        cls.setName('Next JS');
        cls.getName().should.equal('Next JS');

    },

    // }}}
    // {{{ test create#pattern2

    'test create#pattern2': function() {

        try {
            NX.ClassManager.create({}, {});
        } catch(e) {
            e.message.should.equal('Invalid class name \'[object Object]\' specified, must be a non-empty string');
        }

    },

    // }}}
    // {{{ test create#pattern3

    'test create#pattern3': function() {

        try {
            NX.ClassManager.create('My.Class11', {
                alias: {},
            });
        } catch(e) {
            e.message.should.equal('Invalid alias of: \'[object Object]\' for class: \'My.Class11\'; must be a valid string');
        }

    },

    // }}}
    // {{{ test create#pattern4

    'test create#pattern4': function() {

        try {
            NX.ClassManager.create('My.Class21', {
                alternateClassName: {},
            });
        } catch(e) {
            e.message.should.equal('Invalid alternate of: \'[object Object]\' for class: \'My.Class21\'; must be a valid string');
        }

    },

    // }}}
    // {{{ test parseNamespace#pattern1

    'test parseNamespace#pattern1': function() {

        try {
            NX.ClassManager.createNamespaces({});
        } catch(e) {
            e.sourceClass.should.equal('NX.ClassManager');
            e.sourceMethod.should.equal('parseNamespace');
            e.msg.should.equal('Invalid namespace, must be a string');
            e.message.should.equal('Invalid namespace, must be a string');
        }

    },

    // }}}
    // {{{ test parseNamespace#pattern2

    'test parseNamespace#pattern2': function() {

        NX.ClassManager.createNamespaces('NX.unittest_dummy');
        assert.ok(NX.unittest_dummy);

        NX.ClassManager.createNamespaces('NX.unittest.dummy');
        assert.ok(NX.unittest.dummy);

    },

    // }}}
    // {{{ test get#pattern1

    'test get#pattern1': function() {

        var f1 = function() {
            return 'f1';
        };

        var f2 = function() {
            return 'f2';
        };

        NX.ClassManager.set('My.cls1', f1);
        NX.ClassManager.set('My.app.cls1', f2);

        assert.equal(NX.ClassManager.get('My.cls1'), f1);
        assert.equal(NX.ClassManager.get('My.app.cls1'), f2);
    },

    // }}}
    // {{{ test get#pattern2

    'test get#pattern2': function() {

        NX.ns('ClassManagerTest', 'ClassManagerTest.get', 'ClassManagerTest.get.app');

        ClassManagerTest.get.cls1 = function() {
            return 'f1';
        };

        ClassManagerTest.get.app.cls1 = function() {
            return 'f2';
        };

        assert.equal(NX.ClassManager.get('ClassManagerTest.get.cls1'), ClassManagerTest.get.cls1);
        assert.equal(NX.ClassManager.get('ClassManagerTest.get.app.cls1'), ClassManagerTest.get.app.cls1);
    },

    // }}}
    // {{{ test get#pattern3

    'test get#pattern3': function() {

        NX.ns('ClassManagerTest', 'ClassManagerTest.get', 'ClassManagerTest.get.app');

        ClassManagerTest.get.cls1 = function() {
            return 'f1';
        };

        assert.equal(NX.ClassManager.get('ClassManagerTest.get.cls2'), null);
    },

    // }}}
    // {{{ test getAliasesByName#pattern1

    'test getAliasesByName#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getAliasesByName.cls1', {
            alias: 'ClassManagerTest.getAliasesByName.cls2'
        });

        var ret = NX.ClassManager.getAliasesByName('ClassManagerTest.getAliasesByName.cls1');
        ret.length.should.equal(1);
        NX.Array.contains(ret, 'ClassManagerTest.getAliasesByName.cls2').should.equal(true);

        NX.ClassManager.setAlias('ClassManagerTest.getAliasesByName.cls1', 'ClassManagerTest.getAliasesByName.cls3');

        var ret = NX.ClassManager.getAliasesByName('ClassManagerTest.getAliasesByName.cls1');
        ret.length.should.equal(2);
        NX.Array.contains(ret, 'ClassManagerTest.getAliasesByName.cls3').should.equal(true);

    },

    // }}}
    // {{{ test getByAlias#pattern1

    'test getByAlias#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getByAlias.cls1', {
            alias: 'ClassManagerTest.getByAlias.cls2'
        });

        var ret = NX.ClassManager.getByAlias('ClassManagerTest.getByAlias.cls2');
        assert.equal(NX.ClassManager.get('ClassManagerTest.getByAlias.cls1'), ret);

    },

    // }}}
    // {{{ test getByAlias#pattern2

    'test getByAlias#pattern2': function() {

        var f1 = function() {
            return 'f1';
        };

        NX.ClassManager.create('ClassManagerTest.getByAlias.cls3', {
            alias: 'ClassManagerTest.getByAlias.cls4'
        });

        NX.ClassManager.set('ClassManagerTest.getByAlias.cls3.test', f1);

        var ret = NX.ClassManager.getByAlias('ClassManagerTest.getByAlias.cls4');
        assert.equal(NX.ClassManager.get('ClassManagerTest.getByAlias.cls3.test'), f1);

    },

    // }}}
    // {{{ test getClass#pattern1

    'test getClass#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getClass.cls1', {
            test: function() {
                return 'test';
            }
        });

        var cls = new ClassManagerTest.getClass.cls1();
        var ret = NX.ClassManager.getClass(cls);

        ret.should.equal(ClassManagerTest.getClass.cls1);

    },

    // }}}
    // {{{ test getClass#pattern2

    'test getClass#pattern2': function() {

        NX.ns('ClassManagerTest', 'ClassManagerTest.getClass', 'ClassManagerTest.getClass.app');

        ClassManagerTest.getClass.cls1 = function() {
            return 'f1';
        };

        var cls = new ClassManagerTest.getClass.cls1();
        var ret = NX.ClassManager.getClass(cls);

        assert.equal(ret, null);

    },

    // }}}
    // {{{ test getName#pattern1

    'test getName#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getName.cls1', {
        });

        NX.ClassManager.getName(ClassManagerTest.getName.cls1).should.equal('ClassManagerTest.getName.cls1');
    },

    // }}}
    // {{{ test getNameByAlias#pattern1

    'test getNameByAlias#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getNameByAlias.cls1', {
            alias: 'ClassManagerTest.getNameByAlias.cls2'
        });

        var ret = NX.ClassManager.getNameByAlias('ClassManagerTest.getNameByAlias.cls2');
        ret.should.equal('ClassManagerTest.getNameByAlias.cls1');

    },

    // }}}
    // {{{ test getNameByAlternate#pattern1

    'test getNameByAlternate#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getNameByAlternate.cls1', {
            alternateClassName: 'ClassManagerTest.getNameByAlternate.cls2'
        });

        var ret = NX.ClassManager.getNameByAlternate('ClassManagerTest.getNameByAlternate.cls2');
        ret.should.equal('ClassManagerTest.getNameByAlternate.cls1');

    },

    // }}}
    // {{{ test getNamesByExpression#pattern1

    'test getNamesByExpression#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.cls1');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.cls2');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls2');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.cls3');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpressoin#pattern2

    'test getNamesByExpression#pattern2': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.cls1');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.cls2');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls2');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.cls3');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpression#pattern3

    'test getNamesByExpression#pattern3': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls1');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls2');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls2');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls3');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpression#pattern4

    'test getNamesByExpression#pattern4': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.*');
        ret.length.should.equal(3);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');
        ret[1].should.equal('ClassManagerTest.getNamesByExpression.cls2');
        ret[2].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpression#pattern5

    'test getNamesByExpression#pattern5': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.p5.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.p5.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.p5.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.p5.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.p5.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.p5.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.p5.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.p5.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.p5.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.p5.*');
        ret.length.should.equal(3);

        ret[0].should.equal('ClassManagerTest.getNamesByExpression.p5.cls1');
        ret[1].should.equal('ClassManagerTest.getNamesByExpression.p5.cls2');
        ret[2].should.equal('ClassManagerTest.getNamesByExpression.p5.cls3');

    },

    // }}}
    /*
    // {{{ test getNamesByExpression#pattern6

    'test getNamesByExpression#pattern6': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.*');
        ret.length.should.equal(0);

    },

    // }}}
    // {{{ test getNamesByExpression#pattern7

    'test getNamesByExpression#pattern7': function() {

        try {
            NX.ClassManager.getNamesByExpression({});
        } catch(e) {
            e.message.should.equal('Expression [object Object] is invalid, must be a non-empty string');
        }

    },

    // }}}

    */

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
