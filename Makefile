# Makefile

NODE = node
TEST = expresso
TESTS = test/NX.test.js

PREFIX = /usr/local
LIB_PREFIX = $(HOME)/.node_libraries

test:
	@NODE_ENV=test $(TEST) \
		-I lib \
		$(TEST_FLAGS) $(TESTS)

test-cov:
	@rm -Rf lib-cov
	@$(MAKE) test TEST_FLAGS="--cov"
	@rm -Rf lib-cov

.PHONY: test test-cov

# eof

