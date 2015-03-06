Router.configure({
  layoutTemplate: Meteor.isCordova ? 'layout-mobile' : 'layout-desktop'
});

if (Meteor.isCordova) {
  Router.map(function() {
    this.route('mobile', {
      path: '/'
    });

    this.route('mobile.photos.show', {
      path: '/photos/:_id'
    });
  });
} else {
  Router.route('/', function () {
    this.render('desktop', {
    });
  });
}
