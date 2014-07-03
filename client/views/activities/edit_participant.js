
Template.editParticipant.events({
	'click .deleteParticipant': function(e) {
		var activity = this.parent;
		Activities.update(
			{_id: activity._id},
			{$set: {participants:_.without(activity.participants, this.name)}});
	}
})