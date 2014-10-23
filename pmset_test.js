process.env.NODE_ENV = "test";
var pmset = require('./pmset');
var exec = require('child_process').exec;

function ok(expr, msg) {
      if (!expr) throw new Error(msg);
}

describe("Power Management functions for OS X", function(done) {
    it("Should be an integer value greater than 0. #1", function (done) {
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
    it("Should be an integer value greater than 0. #2", function (done) {
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
});

