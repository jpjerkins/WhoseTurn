
Activities = new Meteor.Collection('activities');

Activities.allow({
	insert: function(userId, activity) {
		return (activity.owner == userId);
	},
	remove: function(userId, activity) {
		return (activity.owner == userId);
	},
	update: function(userId, activity) {
		return (activity.owner == userId);
	}
});
