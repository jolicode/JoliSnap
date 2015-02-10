/*
TODO
- Add admin
- Find a better way to hide field
 */

// Common
Photos = new Mongo.Collection("photos");
Photos.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email"
  },
  url: {
    type: 'hidden',
    label: "Photo"
  },
  createdAt: {
    type: Date
  }
}));

// Allow only insert on client
Photos.allow({
  insert: function(photo) {
    return true;
  }
});

// Client
if (Meteor.isClient) {
  Meteor.subscribe("photos");

  localMediaStream = null;

  Template.photos.helpers({
    photos: function () {
      return Photos.find({}, {sort: {'createdAt': -1}});
    }
  });

  Template.photos.rendered = function() {
    var video = document.querySelector('video');

    navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getUserMedia(
        {
          video: true
        },
        function(stream) {
          video.src = window.URL.createObjectURL(stream);
          localMediaStream = stream;
        },
        function() {
          console.log("error getting image");
        }
    );
  };

  Template.form.rendered = function() {
    $($('.form-group').get(2)).hide(); // Autoform does not support hidden field in schema ?
    $($('.form-group').get(3)).hide();
  };

  AutoForm.hooks({
    photoForm: {
      before: {
        insert: function (doc, template) {
          if (!localMediaStream) {
            alert('You have to allow the use of your camera to insert a photo');
          } else {
            var video = document.querySelector('video');
            var canvas = document.querySelector('canvas');
            var ctx = canvas.getContext('2d');

            ctx.drawImage(video, 0, 0, 300, 150);
            doc.url = canvas.toDataURL('image/png');
            doc.createdAt = new Date();

            return doc;
          }

          return false;
        }
      }
    }
  });
}

// Server
if (Meteor.isServer) {
  Meteor.publish("photos", function () {
    return Photos.find({}, {fields: {email: 0}});
  });
}
