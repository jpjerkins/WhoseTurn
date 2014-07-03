// CodePen experiment: http://codepen.io/anon/pen/lvDCe?editors=101
Template.editActivity.events({
	'submit form': function(e) {
		e.preventDefault();

		Activities.update(
			{_id:this._id},
			{$set:{
				name: $(e.target).find('[name=name]').val()
			}},
			function(err, id) {
				if (err) alert(err);
				else Router.go('useActivities');
			}
		);
	},
	'click #addTask': function(e) {
		e.preventDefault();

		var newTask = $("#newTask");
		Activities.update(
			{_id:this._id},
			{$push:{tasks:newTask.val()}},
			function(err, id) {
				if (err) alert(err);
				else newTask.val('');
			}
		);
	},
	'click #addParticipant': function(e) {
		e.preventDefault();

		var newParticipant = $("#newParticipant");
		Activities.update(
			{_id:this._id},
			{$push:{participants:newParticipant.val()}},
			function(err, id) {
				if (err) alert(err);
				else newParticipant.val('');
			}
		);
	}
});
