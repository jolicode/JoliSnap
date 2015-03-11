Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('mobile', {
    path: '/'
  });

  this.route('mobile.photos.show', {
    path: '/photos/:_id'
  });
});
