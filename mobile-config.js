App.info({
  id: 'com.jolicode.jolisnap',
  name: 'JoliSnap',
  description: 'Add your photo to the wall',
  author: 'Thibault Lenclos',
  version: '0.0.1',
  website: 'http://jolisnap.meteor.com'
});

App.setPreference('StatusBarStyle', 'lightcontent'); // TODO Does not work

App.icons({
  'iphone': 'resources/icons/iphone.png',
  'iphone_2x': 'resources/icons/iphone_2x.png',
  'iphone_3x': 'resources/icons/iphone_3x.png',
  'ipad': 'resources/icons/ipad.png',
  'ipad_2x': 'resources/icons/ipad_2x.png',
  'android_ldpi': 'resources/icons/android_ldpi.png',
  'android_mdpi': 'resources/icons/android_mdpi.png',
  'android_hdpi': 'resources/icons/android_hdpi.png',
  'android_xhdpi': 'resources/icons/android_xhdpi.png'
});

App.launchScreens({
  'iphone': 'resources/splash/iphone.png',
  'iphone_2x': 'resources/splash/iphone_2x.png',
  'iphone5': 'resources/splash/iphone5.png',
  'iphone6': 'resources/splash/iphone6.png',
  'ipad_portrait': 'resources/splash/ipad_portrait.png',
  'ipad_portrait_2x': 'resources/splash/ipad_portrait_2x.png',
  'android_ldpi_portrait': 'resources/splash/android_ldpi_portrait.png',
  'android_mdpi_portrait': 'resources/splash/android_mdpi_portrait.png',
  'android_hdpi_portrait': 'resources/splash/android_hdpi_portrait.png',
  'android_xhdpi_portrait': 'resources/splash/android_xhdpi_portrait.png'
});
