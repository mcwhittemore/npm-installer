var should = require("should");

var npmInstall = require("../");

it("Should install local module and return a result object", function(done) {
    npmInstall("./test/test-valid/", function(err, data) {

        var result = {
            module_and_version: 'test-valid@0.0.0',
            module: 'test-valid',
            version: '0.0.0',
            location: 'node_modules/test-valid',
            parent: '',
            parentLocation: '',
            origin: './test/test-valid/',
            children: {}
        }

        data.should.have.property("module_and_version", result.module_and_version);
        data.should.have.property("module", result.module);
        data.should.have.property("version", result.version);
        data.should.have.property("location", result.location);
        done(err);
    });
});

it("Should fail to install an invalid module", function(done) {
    npmInstall("./test/not-here", function(err) {
        err.should.not.be.null;
        done();
    });
});