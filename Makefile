# Makefile

NODE = node
TEST = expresso
TESTS = test/util/Template.test.js \
		test/data/Store.test.js \
		test/data/FileStore.test.js \
		test/data/MemoryStore.test.js \
		test/util/Template.test.js \
		test/server/action.test.js \
		test/server/cookie.test.js \
		test/server/get.test.js \
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
	@jscoverage ./lib ./node_modules
	@NODE_ENV=test $(TEST) \
		-I lib -q \
		$(TEST_FLAGS) $(TESTS)
	@rm -Rf node_modules

.PHONY: test test-cov

# eof

