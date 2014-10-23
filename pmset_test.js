process.env.NODE_ENV = "test";
pmset = require('./pmset');

function ok(expr, msg) {
      if (!expr) throw new Error(msg);
}

describe("Power Management functions for OS X", function() {
    it("Should be an integer value 1", function (done) {
        this.id = pmset.noDisplaySleep("Testing Node.js");
        ok(this.id > 0);
        pmset.release(this.id);
    });
    it("Should be an integer value 2", function (done) {
        this.id = pmset.noIdleSleep("Testing Node.js");
        ok(this.id > 0);
        pmset.release(this.id);
    });
});

