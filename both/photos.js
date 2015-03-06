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
