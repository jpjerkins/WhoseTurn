rotateActivity = function(activity) {
	activity.participants.push(activity.participants.shift());
	Activities.update({_id:activity._id},{$set:{
		participants:activity.participants,
		lastRotated: new Date().getTime()
	}});
}
