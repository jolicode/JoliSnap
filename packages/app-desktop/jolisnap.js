Template.photos.helpers({
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
