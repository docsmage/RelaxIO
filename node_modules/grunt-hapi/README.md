# grunt-hapi

> Start an Hapi web server using Grunt

## Getting Started
This plugin requires Grunt `~0.4.2`
And it is compatible with Hapi version 1.x and 2.x

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-hapi --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-hapi');
```

## The "hapi" task

### Overview
In your project's Gruntfile, add a section named `hapi` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  hapi: {
    custom_options: {
      options: {
        server: 'web',
        bases: {
          '/': '.'
        }
      }
    }
  }
})
```

### Options

#### options.server
Type: `String`
Default value: `null`

In case of string, a filepath that points to a module that exports an Hapi server object.

Or alternatively since v0.8.0, a filepath that points to a module that exports an Hapi server object constructor
function.
[`create_server.js`](test/fixtures/create_server.js) provides one example for such a constructor. The function signature of the exported function
has been kept consistent with Hapi's. This new method can come handy if you are wanting to override the construction attributes from 
your `Gruntfile`.

You may ask: but how would the caller of this constructor, namely `grunt-hapi` know about your desired `host`, `port` or `options`. See
the following additional `grunt-hapi` options for that: `host`, `port`, `create_options` respectively.

If you are wondering about why follow this obscure mechanism - read ahead, The `options.server` filepath is being `require`d by `grunt-hapi`, why cannot a user `require` it in the `Gruntfile` and 
have total power of construction in a straight-forward fashion? The answer to that is that I tried it but ran into
circular-reference issues in `grunt.initConfig`. Perhaps, the `Hapi` instance has some circular-references for convenience.

#### options.host
Type: `String`
Default value: `null`

The host value that would be used if `server` option provided to `grunt-hapi` is a module with exported constructor function.

#### options.port
Type: `Number`
Default value: `null`

The port value that would be used if `server` option provided to `grunt-hapi` is a module with exported constructor function.

#### options.create_options
Type: `Object`
Default value: `null`

The options object that would be used if `server` option provided to `grunt-hapi` is a module with exported constructor function.

#### options.bases
Type: `Object`
Default value: `{'/': '.'}`

Key/Value pair that associate a URI path from where you want to access static files with a FilePath that point to a directory where Hapi can find these static files.

#### options.noasync
Type: `Boolean`
Default value: `false`

By default, grunt-hapi is configured to be compatible with grunt-contrib-watch and launch the server as an asynchronous task.
If you just want to run `grunt hapi` and directly have access to your application, you can specify the `noasync` option at True. 

### Usage Examples

#### Yeoman.io friendly
In this example, the module `index.js` located in the `lib` directory will be use to start an instance of Hapi server. The files in the `public` directory will be available from `/public`

Also, thanks to [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch), the server will be restarted at every change.

Gruntfile.js:
```
...
grunt.initConfig({
  watch: {
    hapi: {
      files: ['lib/*.{js, coffee}'],
      tasks: ['hapi'],
      options: {
        spawn: false // Newer versions of grunt-contrib-watch might require this parameter.
      }
    }
  },
  hapi: {
    custom_options: {
      options: {
        server: require('path').resolve('./lib/index'),
        bases: {
          '/public': require('path').resolve('./public/')
        }
      }
    }
  }
});

grunt.registerTask('server', [
  'hapi',
  'watch'
]);
...
```

lib/index.js:
```
var Hapi = require('hapi');

var app = new Hapi.Server();

module.exports = app;
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Thanks
This project is highly inspired by [grunt-express](https://github.com/blai/grunt-express)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/athieriot/grunt-hapi/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

