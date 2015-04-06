var Builder = require('systemjs-builder');
var builder = new Builder();

var config = {
  config: 'system.config.js',
  baseURL: 'test/fixtures',
  main: 'app/app'
};

var build = function(config) {

  return builder.loadConfig(config.config).then(function() {
    console.log("loaded config, baseURL: " + config.baseURL);
    builder.config({baseURL: config.baseURL});

    return builder.trace(config.main).then(function(trees) {
      console.log(trees);
      return trees;
    }, function(error) {
      console.log('error 2');
      console.log(error);
    });

  });

};

describe('builder', function() {
  it('can do a build', function() {

    return build(config).then(function(output) {
      console.log('output');
      console.log(output);
    }, function(error) {
      console.log('error 1');
      console.log(error);
    });

  });
});