// Subscriptions
Template.photos.created = function () {
  var self = this;
  this.ready = new ReactiveVar(false);

  this.autorun(function () {
    self.subscription = Meteor.subscribe('photos');
    if (self.subscription.ready()) {
      self.ready.set(true);
    } else {
      self.ready.set(false);
    }
  }.bind(this));
};

// Helpers
Template.photos.helpers({
  isReady: function () {
    return Template.instance().ready.get();
  },
  photos: function () {
    return Photos.find({}, {sort: {'createdAt': -1}});
  }
});

Template.form.events({
  'click #takePhoto': function (event, context) {
    event.preventDefault();

    MeteorCamera.getPicture({}, function (error, data) {
      Session.set('photo', data);
      $(event.currentTarget).css('background-image',  'url('+data+')');
      $('#takePhoto').empty();
    });
  }
});
