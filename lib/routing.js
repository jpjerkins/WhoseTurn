
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'/*,
	waitOn: function() {
		return Meteor.subscribe('activities');
	}*/
});

Router.map(function() {
	this.route('useActivities', {
		path: '/'
	});
	this.route('editActivity', {
		path: '/activities/:_id/edit',
		data: function() { return Activities.findOne(this.params._id); }
	});
	this.route('newActivity', {
		path: '/newActivity/',
		data: function() { return Activities.findOne(this.params._id); }
	});
});

var requireLogin = function(pause) {
	if (! Meteor.user()) {
		if (Meteor.loggingIn())
			this.render(this.loadingTemplate);
		else
			this.render('accessDenied');
		pause();
	}
}
Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'editActivity'});
