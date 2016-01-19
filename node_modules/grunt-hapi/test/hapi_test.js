'use strict';

var grunt = require('grunt');
var http = require('http');
var httpFollow = require('follow-redirects').http;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function req(url, done, protocol) {
  protocol.get(url, function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk;
    }).on('end', function() {
      done(res, body);
    });
  });
}
function getRedirect(url, done) {
  req(url, done, httpFollow);
}
function get(url, done) {
  req(url, done, http);
}

exports.hapi = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  custom_options: function(test) {
    test.expect(8);

    var count = 5;
    function done() {
      if (count === 0) {
        test.done();
      }
    }

    get('http://localhost:3000/', function(res, body) {
      test.equal(res.statusCode, 200, 'should return 200');
      count--;
      done();
    });

    get('http://localhost:3000/hello.txt', function(res, body) {
      test.equal(res.statusCode, 200, 'should return 200');
      test.equal(body, 'Testing\n', 'should return static files');
      count--;
      done();
    });

    get('http://localhost:3000/public/hello.txt', function(res, body) {
      test.equal(res.statusCode, 200, 'should return 200');
      test.equal(body, 'Testing\n', 'should return static files');
      count--;
      done();
    });

    get('http://localhost:3000/.hidden', function(res, body) {
      test.equal(res.statusCode, 302, 'should return 200');
      count--;
      done();
    });

    getRedirect('http://localhost:3000/.hidden', function(res, body) {
      test.equal(res.statusCode, 200, 'should return 200');
      test.equal(body, 'Testing\n', 'should return static files');
      count--;
      done();
    });
  },
  server_options: function(test) {
    test.expect(1);

    var count = 1;
    function done() {
      if (count === 0) {
        test.done();
      }
    }

    get('http://localhost:3000/', function(res, body) {
      test.equal(res.statusCode, 200, 'should return 200');
      count--;
      done();
    });
  },
};
