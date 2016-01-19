
'use strict';

module.exports = function(grunt) {

  var all_running = {};

  grunt.registerMultiTask('hapi', 'Start an Hapi web server.', function() {
    var done = this.async();

    var running;

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      server: null,
      port: null,
      create_options: null,
      bases: {'/': '.'},
      noasync: false
    });

    if (all_running[this.target]) {
      all_running[this.target].disconnect();
    }
 
    // Starting a child process to launch the server in
    running = require('child_process').fork(__dirname + '/../lib/forkme');
    all_running[this.target] = running;

    running.send(options);

    // Handle errors or success happening in the child process
    running.on('message', function(error) {
      if (error) {
        grunt.fatal(error);
      }

      done();
    });

    process.on('exit', function() {
      for (var target in all_running) {
        if(all_running.hasOwnProperty(target) && all_running[target].connected) {

          all_running[target].disconnect();
        }
      }
    });
  });
};
