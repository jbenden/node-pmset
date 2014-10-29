process.env.NODE_ENV = "test";
var pmset = require('./pmset');
var exec = require('child_process').exec;

function ok(expr, msg) {
      if (!expr) throw new Error(msg);
}

describe("Power Management functions for OS X", function(done) {
    it("noDisplaySleep should return an integer value greater than 0.", function (done) {
        id = pmset.noDisplaySleep("Testing Node.js");
        ok(id > 0);
        var found = false;
        exec('pmset -g assertions', function (error, stdout, stderr) {
            var regex = /NoDisplaySleepAssertion named: .Testing Node\.js./g;
            while (match = regex.exec(stdout)) {
                found = true;
            }
            ok(found == true);
            pmset.release(id);
            done();
        });
    });
    it("noIdleSleep should return an integer value greater than 0.", function (done) {
        id = pmset.noIdleSleep("Testing Node.js");
        ok(id > 0);
        var found = false;
        exec('pmset -g assertions', function (error, stdout, stderr) {
            var regex = /NoIdleSleepAssertion named: .Testing Node\.js./g;
            while (match = regex.exec(stdout)) {
                found = true;
            }
            ok(found == true);
            pmset.release(id);
            done();
        });
    });
    it("noSystemSleep should return an integer value greater than 0.", function (done) {
        id = pmset.noSystemSleep("Testing Node.js");
        ok(id > 0);
        var found = false;
        exec('pmset -g assertions', function (error, stdout, stderr) {
            var regex = /PreventSystemSleep named: .Testing Node\.js./g;
            while (match = regex.exec(stdout)) {
                found = true;
            }
            ok(found == true);
            pmset.release(id);
            done();
        });
    });
    it("fails with nothing passed to noSystemSleep.", function(done) {
        var isOk = 0;
        try{
            pmset.noSystemSleep();
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
    it("fails with a number passed to noSystemSleep.", function(done) {
        var isOk = 0;
        try{
            pmset.noSystemSleep(123);
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
    it("fails with nothing passed to noIdleSleep.", function(done) {
        var isOk = 0;
        try{
            pmset.noIdleSleep();
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
    it("fails with a number passed to noIdleSleep.", function(done) {
        var isOk = 0;
        try{
            pmset.noIdleSleep(123);
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
    it("fails with nothing passed to noDisplaySleep.", function(done) {
        var isOk = 0;
        try{
            pmset.noDisplaySleep();
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
    it("fails with a number passed to noDisplaySleep.", function(done) {
        var isOk = 0;
        try{
            pmset.noDisplaySleep(123);
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
    it("fails with a null passed to noDisplaySleep.", function(done) {
        var isOk = 0;
        try{
            pmset.noDisplaySleep(null);
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
    it("fails with an undefined passed to noDisplaySleep.", function(done) {
        var isOk = 0;
        try{
            pmset.noDisplaySleep(undefined);
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
    it("fails with improper release value.", function (done) {
        var isOk = 0;
        try {
            pmset.release("joe");
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
    it("fails with no release value.", function (done) {
        var isOk = 0;
        try {
            pmset.release();
        } catch (ex) {
            isOk = 1;
        }
        ok(isOk == 1);
        done();
    });
});
