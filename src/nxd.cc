/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Daemon
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ includes

#include <errno.h>
#include <fcntl.h>
#include <node.h>
#include <pwd.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <unistd.h>
#include <v8.h>

// }}}
// {{{ defines

#define PID_MAX 10

// }}}
// {{{ uses

using namespace v8;
using namespace node;

// }}}
// {{{ Start

static Handle<Value> Start(const Arguments& args) {

    HandleScope scope;

    pid_t sid;
    pid_t pid = fork();

    int i, new_fd;

    if(pid < 0) {
        exit(1);
    } else if(pid > 0) {
        exit(0);
    }

    if(pid == 0) {

        ev_default_fork();
        sid = setsid();

        if(sid < 0) {
            exit(1);
        }

        freopen("/dev/null", "r", stdin);

        if(args.Length() > 0 && args[0]->IsInt32()) {

            new_fd = args[0]->Int32Value();
            dup2(new_fd, STDOUT_FILENO);
            dup2(new_fd, STDERR_FILENO);

        } else {
            freopen("/dev/null", "w", stderr);
            freopen("/dev/null", "w", stdout);
        }
    }

    return scope.Close(Number::New(getpid()));
}

// }}}
// {{{ LockFile

Handle<Value> LockFile(const Arguments& args) {

    if(!args[0]->IsString()) {
        return Boolean::New(false);
    }

    String::Utf8Value data(args[0]->ToString());
    char pid_str[PID_MAX+1];

    int lfp = open(*data, O_RDWR | O_CREAT | O_TRUNC, 0640);

    if(lfp < 0) {
        exit(1);
    }

    if(lockf(lfp, F_TLOCK, 0) < 0) {
        exit(0);
    }

    int len = snprintf(pid_str, PID_MAX, "%d", getpid());

    write(lfp, pid_str, len);

    return Boolean::New(true);
}

// }}}
// {{{ Add-On Config

extern "C" void init(Handle<Object> target) {

  HandleScope scope;

  NODE_SET_METHOD(target, "start", Start);
  NODE_SET_METHOD(target, "lock", LockFile);
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
