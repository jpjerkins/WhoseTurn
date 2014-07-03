
Template.newActivity.events({
	'submit form' : function(evt) {
		evt.preventDefault();

		var newActivity = {
			name: $(evt.target).find('[name=name]').val(),
			tasks: [],
			participants: [],
			lastRotated: new Date().getTime()
		};

		Activities.insert(newActivity, function(err, id) {
			if (err) {
				alert(err);
			} else {
				Router.go('editActivity', {_id: id});
			}
		});
	}
})