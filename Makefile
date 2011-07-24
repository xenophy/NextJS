# Makefile

NODE = node
TEST = expresso
TESTS = test/Array.test.js \
		test/Base.test.js \
		test/Class.test.js \
		test/ClassManager.test.js \
		test/Date.test.js \
		test/Number.test.js \
		test/Error.test.js \
		test/Function.test.js \
		test/Loader.test.js \
		test/NX.test.js \
		test/Object.test.js \
		test/String.test.js \
		test/data/Store.test.js \
		test/data/FileStore.test.js \
		test/data/MemoryStore.test.js \
		test/util/Template.test.js \
		test/util/Format.test.js \
		test/server/action.test.js \
		test/server/module.test.js \
		test/server/static.test.js

PREFIX = /usr/local
LIB_PREFIX = $(HOME)/.node_libraries

test:
	@rm -Rf node_modules
	@mkdir node_modules
	@mkdir node_modules/NX
	@cp -Rf ./lib/NX node_modules
	@NODE_ENV=test $(TEST) \
		-I lib -q \
		$(TEST_FLAGS) $(TESTS)
	@rm -Rf node_modules

test-cov:
	@rm -Rf node_modules
	@mkdir node_modules
	@node-jscoverage ./lib ./node_modules
	@NODE_ENV=test $(TEST) \
		-I lib -q \
		$(TEST_FLAGS) $(TESTS)
	@rm -Rf node_modules

test-cov2:
	@rm -Rf lib-cov
	@$(MAKE) test TEST_FLAGS="--cov -j ./node-jscoverage.json"
	@rm -Rf lib-cov
	@rm -Rf ./ut-result.js
	@touch ./ut-result.js
	@echo "window.node_jscoverage_result = " > ut-result.js
	@cat node-jscoverage.json >> ut-result.js;
	@echo ";" >> ut-result.js
	@rm -Rf ./node-jscoverage.json;
	@mv ut-result.js ./test/node-jscoverage.js;

.PHONY: test test-cov test-cov2

# eof

