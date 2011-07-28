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
    // {{{ test create#pattern5

    'test create#pattern5': function() {

        var test, test2, test3;
        NX.ClassManager.registerPostprocessor('NXTest.ClassManager.create.p5', function() {
            test = 'trace';
        }, true);

        NX.ClassManager.create('NXTest.ClassManager.create.p5cls', {
            postprocessors: ['NXTest.ClassManager.create.p5', function() {
                test2 = 'trace';
            }]
        }, function() {
            test3 = 'trace';
        });

        test.should.equal('trace');
        test2.should.equal('trace');
        test3.should.equal('trace');

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
    // {{{ test getNamesByExpression#pattern6

    'test getNamesByExpression#pattern6': function() {

        try{
            var ret = NX.ClassManager.getNamesByExpression({});
        } catch(e) {
            e.message.should.equal('Expression [object Object] is invalid, must be a non-empty string');
        }

    },

    // }}}
    // {{{ test dynInstantiate#pattern1

    'test dynInstantiate#pattern1': function() {

        var test, test2;
        NX.ClassManager.create('ClassManagerTest.dynInstantiate.p1.cls1', {
            constructor: function(arg1, arg2) {
                test = arg1;
                test2 = arg2;
            }
        });

        var x = NX.ClassManager.dynInstantiate('ClassManagerTest.dynInstantiate.p1.cls1', [100, 200]);

        test.should.equal(100);
        test2.should.equal(200);

    },

    // }}}
    // {{{ test instantiate#pattern1

    'test instantiate#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls1', {
            test: function() {
                return 'pattern1';
            }
        });

        var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls1');
        cls.test().should.equal('pattern1');

    },

    // }}}
    // {{{ test instantiate#pattern2

    'test instantiate#pattern2': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls2', {
            alias: 'ClassManagerTest.instantiate.cls3',
            test: function() {
                return 'pattern2';
            }
        });

        var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls3');
        cls.test().should.equal('pattern2');

    },

    // }}}
    // {{{ test instantiateByAlias#pattern3

    'test instantiateByAlias#pattern3': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls4', {
            alternateClassName: 'ClassManagerTest.instantiate.cls5',
            test: function() {
                return 'pattern3';
            }
        });

        var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls5');
        cls.test().should.equal('pattern3');

    },

    // }}}
    // {{{ test instantiate#pattern4

    'test instantiate#pattern4': function() {

        try {
            var cls = NX.ClassManager.instantiate({});
        } catch(e) {
            e.message.should.equal('Invalid class name or alias \'[object Object]\' specified, must be a non-empty string');
        }

    },

    // }}}
    // {{{ test instantiate#pattern5

    'test instantiate#pattern5': function() {

        /*
        try {
            var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls99');
        } catch(e) {
            e.message.should.equal('Cannot find module \'.ClassManagerTest/instantiate/cls99.js\'');
        }
        */

    },

    // }}}
    // {{{ test instantiate#pattern6

    'test instantiate#pattern6': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls6', {
            singleton: true,
            test: function() {
                return 'pattern4';
            }
        });

        try {
            var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls6');
        } catch(e) {
            e.message.should.equal('\'ClassManagerTest.instantiate.cls6\' is a singleton and cannot be instantiated');
        }

    },

    // }}}
    // {{{ test instantiate#pattern7

    'test instantiate#pattern7': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls7', {
            constructor: function(config) {
                NX.apply(this, config);
                return this;
            },
            test: function() {
                return this.foo;
            }
        });

        var cls7 = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls7', {foo: 'bar'});
        cls7.test().should.equal('bar');

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
    // {{{ test instantiateByAlias#pattern1

    'test instantiateByAlias#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.instantiateByAlias.cls1', {
            test: function() {
                return 'test';
            }
        });

        NX.ClassManager.setAlias(
            'ClassManagerTest.instantiateByAlias.cls1',
            'ClassManagerTest.instantiateByAlias.cls2'
        );

        var cls2 = NX.ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls2');
        cls2.test().should.equal('test');

    },

    // }}}
    // {{{ test instantiateByAlias#pattern2

    'test instantiateByAlias#pattern2': function() {

        NX.ClassManager.create('ClassManagerTest.instantiateByAlias.cls3', {
            constructor: function(config) {
                NX.apply(this, config);
                return this;
            },
            test: function() {
                return this.foo;
            }
        });

        NX.ClassManager.setAlias('ClassManagerTest.instantiateByAlias.cls3', 'ClassManagerTest.instantiateByAlias.cls4');

        var cls4 = NX.ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls4', {foo: 'bar'});
        cls4.test().should.equal('bar');

    },

    // }}}
    // {{{ test instantiateByAlias#pattern3

    'test instantiateByAlias#pattern3': function() {

        NX.ClassManager.create('ClassManagerTest.instantiateByAlias.cls5', {
            singleton: true,
            alias: 'ClassManagerTest.instantiateByAlias.cls6',
            test: function() {
                return 'pattern3';
            }
        });

        try {
            var cls = NX.ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls6');
        } catch(e) {
            e.message.should.equal('\'ClassManagerTest.instantiateByAlias.cls5\' is a singleton and cannot be instantiated');
        }

    },

    // }}}
    // {{{ test instantiateByAlias#pattern4

    'test instantiateByAlias#pattern4': function() {

        try {
            var cls = NX.ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls99', {foo: 'bar'});
        } catch(e) {
            e.message.should.equal('Cannot create an instance of unrecognized alias: ClassManagerTest.instantiateByAlias.cls99');
        }

    },

    // }}}
    // {{{ test isCreated#pattern1

    'test isCreated#pattern1': function() {

        var ret = NX.ClassManager.isCreated('NXTest.ClassManager.isCreated.p1cls');
        ret.should.equal(false);

    },

    // }}}
    // {{{ test isCreated#pattern2

    'test isCreated#pattern2': function() {

        try {
        var ret = NX.ClassManager.isCreated({});
        } catch(e) {
            e.message.should.equal('Invalid classname, must be a string and must not be empty');
        }

    },

    // }}}
    // {{{ test isCreated#pattern3

    'test isCreated#pattern3': function() {

        NX.ClassManager.create('NXTest.ClassManager.isCreated.p3cls', {});
        var ret = NX.ClassManager.isCreated('NXTest.ClassManager.isCreated.p3cls');
        ret.should.equal(true);
    },

    // }}}
    // {{{ test isCreated#pattern4

    'test isCreated#pattern4': function() {

        NXTest.ClassManager.isCreated.p4cls = function() {};
        var ret = NX.ClassManager.isCreated('NXTest.ClassManager.isCreated.p4cls');
        ret.should.equal(true);
    },

    // }}}
    // {{{ test setAlias#pattern1

    'test setAlias#pattern1': function() {

        var f1 = function() {
            return 'f1';
        };

        NX.ClassManager.set('ClassManagerTest.setAlias.cls1', f1);
        NX.ClassManager.setAlias('ClassManagerTest.setAlias.cls1', 'ClassManagerTest.setAlias.cls2');

        var ret = NX.ClassManager.getNameByAlias('ClassManagerTest.setAlias.cls2');
        ret.should.equal('ClassManagerTest.setAlias.cls1');

        var ret = NX.ClassManager.getAliasesByName('ClassManagerTest.setAlias.cls1');

        NX.Array.contains(ret, 'ClassManagerTest.setAlias.cls2').should.equal(true);

        var cls = NX.ClassManager.getByAlias('ClassManagerTest.setAlias.cls2');
        cls().should.equal('f1');

    },

    // }}}
    // {{{ test setAlias#pattern2

    'test setAlias#pattern2': function() {

        var f1 = function() {
            return 'f1';
        };

        var f2 = function() {
            return 'f2';
        };


        NX.ClassManager.set('ClassManagerTest.setAlias.cls3', f1);
        NX.ClassManager.set('ClassManagerTest.setAlias.cls4', f2);
        NX.ClassManager.setAlias('ClassManagerTest.setAlias.cls3', 'ClassManagerTest.setAlias.cls5');

        try {
            NX.ClassManager.setAlias('ClassManagerTest.setAlias.cls4', 'ClassManagerTest.setAlias.cls5');
        } catch(e) {
            e.message.should.equal('[NX.ClassManager] Overriding already existed alias: \'ClassManagerTest.setAlias.cls5\' of: \'ClassManagerTest.setAlias.cls3\' with: \'ClassManagerTest.setAlias.cls4\'. Be sure it\'s intentional.');
        }

    },

    // }}}
    // {{{ test setAlias#pattern3

    'test setAlias#pattern3': function() {

        NX.ClassManager.create('ClassManagerTest.setAlias.cls6', {
            f3: function(){
                return 'f3';
            }
        });

        NX.ClassManager.setAlias(ClassManagerTest.setAlias.cls6, 'ClassManagerTest.setAlias.cls7');

        var ret = NX.ClassManager.getNameByAlias('ClassManagerTest.setAlias.cls7');
        ret.should.equal('ClassManagerTest.setAlias.cls6');

        var ret = NX.ClassManager.getAliasesByName('ClassManagerTest.setAlias.cls6');
        NX.Array.contains(ret, 'ClassManagerTest.setAlias.cls7').should.equal(true);

        var cls = NX.ClassManager.instantiateByAlias('ClassManagerTest.setAlias.cls7');

        cls.f3().should.equal('f3');

    },

    // }}}
    // {{{ test setDefaultPostprocessors#pattern1

    'test setDefaultPostprocessors#pattern1': function() {

        NX.ClassManager.setDefaultPostprocessors([
            'processor1',
            'processor2',
            'processor3'
        ]);

        NX.ClassManager.defaultPostprocessors[0].should.equal('processor1');
        NX.ClassManager.defaultPostprocessors[1].should.equal('processor2');
        NX.ClassManager.defaultPostprocessors[2].should.equal('processor3');

        NX.ClassManager.setDefaultPostprocessorPosition('processor0', 'first');

        NX.ClassManager.defaultPostprocessors[0].should.equal('processor0');
        NX.ClassManager.defaultPostprocessors[1].should.equal('processor1');
        NX.ClassManager.defaultPostprocessors[2].should.equal('processor2');
        NX.ClassManager.defaultPostprocessors[3].should.equal('processor3');

        NX.ClassManager.setDefaultPostprocessorPosition('processor4', 'last');

        NX.ClassManager.defaultPostprocessors[0].should.equal('processor0');
        NX.ClassManager.defaultPostprocessors[1].should.equal('processor1');
        NX.ClassManager.defaultPostprocessors[2].should.equal('processor2');
        NX.ClassManager.defaultPostprocessors[3].should.equal('processor3');
        NX.ClassManager.defaultPostprocessors[4].should.equal('processor4');

        NX.ClassManager.setDefaultPostprocessorPosition('processor11', 'after', 'processor1');

        NX.ClassManager.defaultPostprocessors[0].should.equal('processor0');
        NX.ClassManager.defaultPostprocessors[1].should.equal('processor1');
        NX.ClassManager.defaultPostprocessors[2].should.equal('processor11');
        NX.ClassManager.defaultPostprocessors[3].should.equal('processor2');
        NX.ClassManager.defaultPostprocessors[4].should.equal('processor3');
        NX.ClassManager.defaultPostprocessors[5].should.equal('processor4');

        NX.ClassManager.setDefaultPostprocessors([
            'alias',
            'singleton',
            'alternateClassName'
        ]);

    },

    // }}}
    // {{{ test getDisplayName#pattern1

    'test getDisplayName#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getDisplayName.p1cls', {});

        var x = new ClassManagerTest.getDisplayName.p1cls();

        NX.getDisplayName(x).should.equal('ClassManagerTest.getDisplayName.p1cls');
        NX.getDisplayName(NX).should.equal('Anonymous');
    },

    // }}}
    // {{{ test getDisplayName#pattern2

    'test getDisplayName#pattern2': function() {

        NX.ClassManager.create('ClassManagerTest.getDisplayName.p2cls', {
        });
        var ret = NX.getDisplayName({
            $name: 'foo',
            $class: ClassManagerTest.getDisplayName.p2cls
        });

        ret.should.equal('ClassManagerTest.getDisplayName.p2cls#foo');

    },

    // }}}
    // {{{ test getDisplayName#pattern3

    'test getDisplayName#pattern3': function() {

        var ret = NX.getDisplayName({
            displayName: 'hoge'
        });

        ret.should.equal('hoge');

    },

    // }}}
    // {{{ test factory#pattern1

    'test factory#pattern1': function() {

        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls', {
            hoge: function() {
                return 'bar1';
            }
        });
        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls2', {
            hoge: function() {
                return 'bar2';
            }
        });
        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls3', {
            hoge: function() {
                return 'bar3';
            }
        });

        var clses = NX.factory(['p1cls', 'p1cls2', 'p1cls3'], 'NXTest.ClassManager.NX.factory');

        clses[0].hoge().should.equal('bar1');
        clses[1].hoge().should.equal('bar2');
        clses[2].hoge().should.equal('bar3');

        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls4', {
            hoge: function() {
                return 'bar4';
            }
        });

        var cls = NX.factory({
            className: 'p1cls4'
        }, 'NXTest.ClassManager.NX.factory');
        cls.hoge().should.equal('bar4');

        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls5', {
            hoge: function() {
                return 'bar5';
            }
        });

        NXTest.ClassManager.NX.factory.P1cls5.name = 'NXTest.ClassManager.NX.factory.P1cls5';

        var cls = NX.factory(NXTest.ClassManager.NX.factory.P1cls5, 'NXTest.ClassManager.NX.factory');
        cls.hoge().should.equal('bar5');

        var cls = NX.factory(true, 'NXTest.ClassManager.NX.factory');
        cls.should.equal(true);

    }


    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
