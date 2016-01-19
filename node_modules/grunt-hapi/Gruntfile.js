'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    watch: {
      hapi: {
        files: ['test/fixtures/*.js'],
        tasks: ['hapi:custom_options'],
        options: {
          spawn: false
        }
      }
    },

    // Configuration to be run (and then tested).
    hapi: {
      custom_options: {
        options: {
          server: path.resolve('./test/fixtures/index'),
          bases: {
            '/': path.resolve('./test/fixtures/public/'),
            '/public': path.resolve('./test/fixtures/public/')
          }          
        }
      },
      server_options: {
        options: {
          server: path.resolve('./test/fixtures/create_server'),
          port: 3001,
          bases: {
            '/': path.resolve('./test/fixtures/public/'),
            '/public': path.resolve('./test/fixtures/public/')
          }
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'hapi', 'nodeunit']);

  grunt .registerTask('test_watch', ['hapi', 'watch']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
