Package.describe({
  name: 'app-mobile',
  version: '0.0.1',
  summary: 'JoliSnap mobile files'
});

Package.onUse(function(api) {
  api.use([
    'meteor-platform',
    'iron:router',
    'aldeed:autoform',
    'fourseven:scss',
    'meteoric:ionic',
    'meteoric:ionic-sass',
    'meteoric:ionicons-sass',
    'meteoric:autoform-ionic'
  ],['web.cordova']);

  api.addFiles([
    'views/mobile.html',
    'router.js',
    'jolisnap.js',
    'stylesheet/mobile.scss'
  ],['web.cordova']);
});

Cordova.depends({
  "org.apache.cordova.statusbar": "0.1.10"
});
