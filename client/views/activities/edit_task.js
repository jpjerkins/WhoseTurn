
Template.editTask.events({
	'click .deleteTask': function(e) {
		var activity = this.parent;
		Activities.update(
			{_id: activity._id},
			{$set: {tasks:_.without(activity.tasks, this.name)}});
	}
})
