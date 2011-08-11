#
# Next JS Makefile
# Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
# http://www.xenophy.com
#

# ---
# Enviroment
# ---

UNAME := $(shell uname)

ifeq ($(NODE_PATH),)
	NODE_PATH = /usr/local
endif

ifeq ($(NODE_INCLUDE_PATH),)
	NODE_INCLUDE_PATH = $(NODE_PATH)/include/node
endif

LIBICONV_DIR	=deps/libiconv-1.13.1
LIBICONV	=$(LIBICONV_DIR)/lib/.libs/libiconv.a

CXXFLAGS	=-I$(LIBICONV_DIR)/include -I$(LIBICONV_DIR)/lib -I$(NODE_INCLUDE_PATH) -D_FORTIFY_SOURCE=2 -DEV_MULTIPLICITY=0 -fPIC -Wall -Wextra -ansi
CXXFLAGS_DEBUG	=-O0 -g
CXXFLAGS_RELEASE=-O2

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
		test/server/static.test.js \
		test/smtp/Smtp.test.js

PREFIX = /usr/local
LIB_PREFIX = $(HOME)/.node_libraries

# ---
# test
# ---

test:
	@rm -Rf node_modules
	@mkdir node_modules
	@mkdir node_modules/nx
	@cp -Rf ./lib/nx node_modules
	@NODE_ENV=test $(TEST) \
		-I lib -q \
		$(TEST_FLAGS) $(TESTS)
	@rm -Rf node_modules

# ---
# test-cov
# ---

test-cov:
	@rm -Rf node_modules
	@mkdir node_modules
	@jscoverage ./lib ./node_modules
	@NODE_ENV=test $(TEST) \
		-I lib -q \
		$(TEST_FLAGS) $(TESTS)
	@rm -Rf node_modules

.PHONY: test test-cov

# ---
# iconv
# ---

iconv:	iconv-release

iconv-debug:	CXXFLAGS += $(CXXFLAGS_DEBUG)
iconv-debug:	iconv-build

iconv-release:	CXXFLAGS += $(CXXFLAGS_RELEASE)
iconv-release:	iconv-build

iconv-build:	$(LIBICONV) iconv.o
ifeq ($(UNAME),Darwin)
	$(CXX) -flat_namespace -undefined suppress -shared -o iconv-jp.node iconv.o $(LIBICONV)
else
	$(CXX) -shared -o iconv-jp.node iconv.o $(LIBICONV)
endif


# eof
