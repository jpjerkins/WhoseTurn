
Activities = new Meteor.Collection('activities');

Activities.allow({
	remove: ownsDocument,
	update: ownsDocument,
	insert: function(userId, activity) {
		return true;
	}
});
