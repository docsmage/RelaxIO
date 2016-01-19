'use strict';

var Utils = require('./utils');

process.on('message', function(options) {  
  if (options.server) {
    try {
      var server = require(options.server);
      var http;
      if (typeof(server) == 'function') {
        http = server(options.host, options.port, options.create_options);
      } else {
        http = server;
      }

      if (options.bases) {
        for (var key in options.bases) {
          http.route({
            method: 'GET', path: Utils.cleanPath(key) + '{path*}',
            handler: {
              directory: {
                path: options.bases[key], listing: true, showHidden: true
              }
            }
          });
        }
      }

      http.start();

      if (!options.noasync) {
        process.send(null);
      }
    } catch (e) {
      process.send('Hapi ["' + options.server + '"] -  ' + e);
    }
  } else {
    process.send('Hapi should provide an Hapi server instance or a server create function.');
  }
});

process.on('disconnect', function() {
  process.exit();
});
