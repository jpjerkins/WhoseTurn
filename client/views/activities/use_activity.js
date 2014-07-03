
Template.useActivity.helpers({
	showLastRotated: function() {
		return moment(this.lastRotated).format("ddd, M/DD @ hA");
	},
	currentRotation: function() {
		var rotation = [];
		for (i=0; i<this.tasks.length; i++) {
			rotation.push(this.tasks[i] + ": " + this.participants[i]);
		}
		return rotation;
	}
});

Template.useActivity.events({
	'click .rotate': function(e) {
		e.preventDefault();
		this.participants.push(this.participants.shift());
		Activities.update({_id:this._id},{$set:{participants:this.participants}});
	},
	'click .edit': function(e) {
		e.preventDefault();
		Router.go('editActivity', {_id: this._id});
	},
});
