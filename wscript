import Options
import os
from os import unlink, symlink
from os.path import exists

srcdir = "."
blddir = "build"
VERSION = "1.0.0"

def make(ctx, rule):
  os.system('make %s NODE_INCLUDE_PATH="%s"' % (rule, ctx.env['CPPPATH_NODE']))

def set_options(opt):
  opt.tool_options("compiler_cxx")

def configure(conf):
  conf.check_tool("compiler_cxx")
  conf.check_tool("node_addon")

def build(bld):
  obj = bld.new_task_gen("cxx", "shlib", "node_addon")
  obj.target = "nxd"
  obj.source = bld.glob("src/nxd.cc")
  make(bld, 'iconv')

