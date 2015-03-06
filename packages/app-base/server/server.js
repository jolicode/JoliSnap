Meteor.publish("photos", function () {
  return Photos.find({}, {fields: {email: 0}});
});
