Package.describe({
  name: 'app-mobile',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: ''
});

Package.onUse(function(api) {
  api.use([
    'meteor-platform',
    'iron:router',
    'fourseven:scss',
    'meteoric:ionic-sass',
    'meteoric:ionicons-sass',
    'meteoric:ionic',
    'meteoric:autoform-ionic'
  ],['web.cordova']);

  api.addFiles([
    'views/mobile.html',
    'router.js',
    'jolisnap.js',
    'stylesheet/mobile.scss'
  ],['web.cordova']);
});
