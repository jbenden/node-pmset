[![NPM version](https://badge.fury.io/js/pmset.png)](http://badge.fury.io/js/pmset)
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

