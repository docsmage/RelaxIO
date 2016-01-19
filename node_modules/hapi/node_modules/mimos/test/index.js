// Load modules

var Code = require('code');
var Lab = require('lab');
var Mimos = require('..');


// Declare internals

var internals = {};


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('path()', function () {

    it('returns the mime type from a file path', function (done) {

        expect(Mimos.path('/static/javascript/app.js')).deep.equal({
            source: 'iana',
            charset: 'UTF-8',
            compressible: true,
            extensions: ['js'],
            type: 'application/javascript'
        });
        done();
    });

    it('returns empty object if a match can not be found', function (done) {

        expect(Mimos.path('/static/javascript')).to.deep.equal({});
        done();
    });

    it('ignores extension upper case', function (done) {

        var lower = '/static/image/image.jpg';
        var upper = '/static/image/image.JPG';

        expect(Mimos.path(lower).type).to.equal(Mimos.path(upper).type);

        done();
    });
});

describe('type()', function () {

    it('returns a found type', function (done) {

        expect(Mimos.type('text/plain')).to.deep.equal({
            source: 'iana',
            compressible: true,
            extensions: ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
            type: 'text/plain'
        });
        done();
    });

    it('returns a missing type', function (done) {

        expect(Mimos.type('hapi/test')).to.deep.equal({
            source: 'hapi',
            compressible: false,
            extensions: [],
            type: 'hapi/test'
        });
        done();
    });
});
