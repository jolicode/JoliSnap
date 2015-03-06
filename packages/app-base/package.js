Package.describe({
  name: 'app-base',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: ''
});

Package.onUse(function(api) {
  /* Add our packages that we depend on on both mobile/desktop sides */
  api.use([
    'meteor-platform',
    'aldeed:autoform',
    'aldeed:collection2',
    'mdg:camera',
    'iron:router',
    'mrt:moment',
  ],['client','server']);

  /* Add each of our files that are a part of this package */
  api.addFiles([
    'lib/photos.js',
  ],['web.browser','web.cordova','server']);

  api.addFiles([
    'server/server.js',
  ],['server']);

  api.export('Photos');
});
