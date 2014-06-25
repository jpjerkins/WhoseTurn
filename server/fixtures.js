
// Fixture data 
if (Activities.find().count() === 0) {
	var now = new Date().getTime();

	Activities.insert({
		name: 'Do cat chores',
		tasks: ['Scoop poop', 'Hold bag', 'Dishes/vacuum'],
		participants: ['Mara', 'Emily', 'Becca', 'Sam'],
		lastRotated: now
	});

	Activities.insert({
		name: 'Ride with Nana & Papa',
		tasks: ['Seat 1', 'Seat 2'],
		participants: ['Mara', 'Emily', 'Becca', 'Sam', 'Ruthie'],
		lastRotated: now
	});
}
