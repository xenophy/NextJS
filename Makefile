# Makefile

NODE = node
TEST = /usr/local/bin/expresso
TESTS = test/*.test.js test/*/*.test.js
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
