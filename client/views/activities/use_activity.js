
Template.useActivity.helpers({
	showLastRotated: function() {
		return moment(this.lastRotated).format("ddd, M/DD @ h:mm A");
	},
	showLastRotatedDate: function() {
		return moment(this.lastRotated).format("ddd, M/DD");
	},
	showLastRotatedTime: function() {
		return moment(this.lastRotated).format("h:mm A");
	},
	currentRotation: function() {
		var rotation = [];
		var numParticipants = this.participants.length;
		for (i=0; i<this.tasks.length; i++) {
			rotation.push(this.tasks[i] + ": " + this.participants[i % numParticipants]);
		}
		return rotation;
	}
});

Template.useActivity.events({
	'click .rotate': function(e) {
		e.preventDefault();
		rotateActivity(this);
	},
	'click .edit': function(e) {
		e.preventDefault();
		Router.go('editActivity', {_id: this._id});
	},
});
