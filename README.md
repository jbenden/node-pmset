[![Build Status](https://travis-ci.org/jbenden/node-pmset.svg?style=flat&branch=master)](https://travis-ci.org/jbenden/node-pmset)
[![Dependency Status](https://gemnasium.com/jbenden/node-pmset.png)](https://gemnasium.com/jbenden/node-pmset)
[![NPM version](https://badge.fury.io/js/pmset.png)](http://badge.fury.io/js/pmset)
[![Code Climate](https://codeclimate.com/github/jbenden/node-pmset/badges/gpa.svg)](https://codeclimate.com/github/jbenden/node-pmset)
[![Coverage Status](https://coveralls.io/repos/jbenden/node-pmset/badge.png)](https://coveralls.io/r/jbenden/node-pmset)
node-pmset
==========

OS X Power Management for Node.js

This module enables the control over power management functionality
within Mac OS X 10.6 or newer. For additional information regarding
this functionality, please see my blog post about this topic at:

[http://www.benden.us/](http://www.benden.us/journal/2014/OS-X-Power-Management-No-Sleep-Howto/)

Installation
------------

    $ npm install pmset

Installation via source
-----------------------

    $ git clone https://github.com/jbenden/node-pmset.git node-pmset.git
    $ cd node-pmset.git
    $ npm install

Example Usage
-------------

    > pmset = require("pmset");
    { noIdleSleep: [Function],
    noDisplaySleep: [Function],
    release: [Function] }
    > a = pmset.noDisplaySleep("Node.js testing");
    1248
    > pmset.release(a);
    0
    >
    (^C again to quit)
    >

Notes
-----

If you are unable to install the module, due to errors about missing
Xcode header files or related, then follow the source installation
instructions and change the include path in `binding.gyp`.

Methods Available
-----------------

The module supports the following methods:

* (int) noIdleSleep(string)
* (int) noDisplaySleep(string)
* (int) noSystemSleep(string)
* (int) noUserIdleSystemSleep(string)
* (int) noUserIdleDisplaySleep(string)
* (int) noDiskIdle(string)
* release(int)

To get a better understanding of what these different options mean, see
the Apple header file `pwr_mgt/IOPMLib.h` inside of the platform SDK
folder. Additionally, check out the local unit-tests for more information
about the correct usage of these functions.
 
