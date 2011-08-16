/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Daemon
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ includes

#include <v8.h>
#include <node.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <errno.h>
#include <pwd.h>
#include <string.h>

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
// {{{ SetSid

Handle<Value> SetSid(const Arguments& args) {
    pid_t sid;
    sid = setsid();
    return Integer::New(sid);
}

// }}}
// {{{ ToCString

const char* ToCString(const v8::String::Utf8Value& value) {
    return *value ? *value : "<string conversion failed>";
}

// }}}
// {{{ Chroot

Handle<Value> Chroot(const Arguments& args) {

    if(args.Length() < 1) {
        return ThrowException(Exception::TypeError(
                    String::New("Must have one argument; a string of the folder to chroot to.")
               ));
    }

    uid_t uid;
    int rv;

    String::Utf8Value folderUtf8(args[0]->ToString());

    const char *folder = ToCString(folderUtf8);

    rv = chroot(folder);

    if(rv != 0) {
        return ThrowException(ErrnoException(errno, "chroot"));
    }

    chdir("/");

    return Boolean::New(true);
}

// }}}
// {{{ SetReuid

Handle<Value> SetReuid(const Arguments& args) {

    if(args.Length() == 0 || (!args[0]->IsString() && !args[0]->IsInt32())) {
        return ThrowException(Exception::Error(
                    String::New("Must give a uid or username to become")
                ));
    }

    if(args[0]->IsString()) {

        String::AsciiValue username(args[0]);

        struct passwd* pwd_entry = getpwnam(*username);

        if(pwd_entry) {

            setreuid(pwd_entry->pw_uid, pwd_entry->pw_uid);

            return Boolean::New(true);

        } else {

            return ThrowException(Exception::Error(
                        String::New("User not found")
                   ));

        }

    } else if(args[0]->IsInt32()) {

        uid_t uid;
        uid = args[0]->Int32Value();

        setreuid(uid, uid);

        return Boolean::New(true);

    }

}

// }}}
// {{{ ExecVP

Handle<Value> ExecVP(const Arguments& args) {

    if(args.Length() < 2 || !args[0]->IsString() || !args[1]->IsArray()) {
        return ThrowException(Exception::Error(String::New("Bad argument.")));
    }

    String::Utf8Value fileutf8(args[0]->ToString());

    char *file = strdup(*fileutf8);

    Local<Array> argv_handle = Local<Array>::Cast(args[1]);

    int i;
    int argc = argv_handle->Length();
    int argv_length = argc + 1 + 1;
    char **argv = new char*[argv_length];

    argv[0] = strdup(*fileutf8);
    argv[argv_length-1] = NULL;

    for(i = 0; i < argc; i++) {
        String::Utf8Value arg(argv_handle->Get(Integer::New(i))->ToString());
        argv[i+1] = strdup(*arg);
    }

    execvp(file, argv);
}

// }}}
// {{{ CloseStdin

Handle<Value> CloseStdin(const Arguments& args) {
    freopen("/dev/null", "r", stdin);
}

// }}}
// {{{ CloseStderr

Handle<Value> CloseStderr(const Arguments& args) {
    freopen("/dev/null", "w", stderr);
}

// }}}
// {{{ CloseStdout

Handle<Value> CloseStdout(const Arguments& args) {
    freopen("/dev/null", "w", stdout);
}

// }}}
// {{{ CloseStdio

Handle<Value> CloseStdio(const Arguments& args) {
    freopen("/dev/null", "r", stdin);
    freopen("/dev/null", "w", stderr);
    freopen("/dev/null", "w", stdout);
}

// }}}
// {{{ Add-On Config

extern "C" void init(Handle<Object> target) {

  HandleScope scope;

  NODE_SET_METHOD(target, "start", Start);
  NODE_SET_METHOD(target, "lock", LockFile);
  NODE_SET_METHOD(target, "setsid", SetSid);
  NODE_SET_METHOD(target, "chroot", Chroot);
  NODE_SET_METHOD(target, "setreuid", SetReuid);
  NODE_SET_METHOD(target, "execvp", ExecVP);
  NODE_SET_METHOD(target, "closeStderr", CloseStderr);
  NODE_SET_METHOD(target, "closeStdout", CloseStdout);
  NODE_SET_METHOD(target, "closeStdin", CloseStdin);
  NODE_SET_METHOD(target, "closeStdio", CloseStdio);

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
