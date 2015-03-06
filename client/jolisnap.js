/*
TODO
- Add a config to force mobile on desktop (easy debug)
- Find a better way to hide field
- https://github.com/jolicode/JoliSnap/issues/1
- https://www.npmjs.com/package/meteor-db-utils
Mobile
- Better css
- Image / logo for the app
 */

Meteor.subscribe("photos");

var photosHelpers = {
  photos: function () {
    return Photos.find({}, {sort: {'createdAt': -1}});
  }
};
Template.photos.helpers(photosHelpers);

Template.form.rendered = function() {
  $($('.form-group').get(2)).hide(); // Autoform does not support hidden field in schema ?
  $($('.form-group').get(3)).hide();
};

Template.form.events({
  'click #takePhoto': function (event, context) {
    event.preventDefault();

    MeteorCamera.getPicture({}, function (error, data) {
      Session.set('photo', data);
      $(event.currentTarget).css('background-image',  'url('+data+')');
      $('#takePhoto').removeClass('ion-camera');
    });
  }
});

AutoForm.hooks({
  photoForm: {
    before: {
      insert: function (doc, template) {
        var photo = Session.get('photo');
        if (!photo) {
          if (Meteor.isCordova) {
            MeteorCamera.getPicture({}, function (error, data) {
              Session.set('photo', data);
            });
          } else {
            alert('Please add your photo');
          }
        } else {
          doc.url = photo;
          doc.createdAt = new Date();

          return doc;
        }

        return false;
      }
    }
  }
});

UI.registerHelper('formatTime', function(context, options) {
  if(context)
    return moment(context).format('DD/MM/YYYY, HH:mm');
});


// Cordova
if (Meteor.isCordova) {
  Meteor.startup(function () {
    AutoForm.setDefaultTemplate('ionic');
  });
  Template.mobilePhotosShow.helpers({
    photo: function () {
      return Photos.findOne({_id: Router.current().params._id});
    }
  });

  Template.mobilePhotos.helpers(photosHelpers);
  AutoForm.hooks({
    'photoForm': {
      onSuccess: function (operation, result, template) {
        IonModal.close();
        Router.go('mobile.photos.show', {_id: result});
      },
      onError: function(operation, error, template) {
        alert(error);
      }
    }
  });
}
