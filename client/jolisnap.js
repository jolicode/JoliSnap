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
