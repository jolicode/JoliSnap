Meteor.startup(function () {
  AutoForm.setDefaultTemplate('ionic');
});

// Template subscriptions
Meteor.subscribe('photos');

// Helpers
Template.mobilePhotos.helpers({
  photos: function () {
    return Photos.find({}, {sort: {'createdAt': -1}});
  }
});

Template.mobilePhotosShow.helpers({
  photo: function () {
    return Photos.findOne({_id: Router.current().params._id});
  }
});

// Forms
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
