Package.describe({
  name: 'app-desktop',
  version: '0.0.1',
  summary: 'JoliSnap desktop files'
});

Package.onUse(function(api) {
  api.use([
    'meteor-platform',
    'aldeed:autoform',
    'aldeed:collection2',
    'mdg:camera',
    'iron:router',
    'fortawesome:fontawesome'
  ],['client']);

  api.addFiles([
    'views/jolisnap.html',
    'router.js',
    'jolisnap.js',
    'stylesheet/desktop.css',
    'public/joliSnap.png',
    'public/mountains-yellow.gif',
  ],['web.browser']);
});
