Package.describe({
  name: 'mkarliner:mosca',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Mosca is a node.js MQTT broker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mkarliner/meteor-mosca',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
	"zmq": "2.10.0",
	"uglify-js": "2.4.16",
	"mosca": "0.28.0"
})

Package.onUse(function(api) {
  api.export("mosca");
  api.versionsFrom('1.0.3.1');
  api.addFiles('mkarliner:mosca.js', "server");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mkarliner:mosca');
  api.addFiles('mkarliner:mosca-tests.js');
});
