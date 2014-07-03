
// Fixture data 
if (Activities.find().count() === 0) {
	var now = new Date().getTime();

	// create two users
	var philId = Meteor.users.insert({
		profile: { name: 'Phil Jerkins' },
		username: 'phil'
	});

	Activities.insert({
		name: 'Do cat chores',
		tasks: ['Scoop poop', 'Hold bag', 'Dishes/vacuum'],
		participants: ['Mara', 'Emily', 'Becca', 'Sam'],
		lastRotated: now,
		owner: philId
	});

	Activities.insert({
		name: 'Ride with Nana & Papa',
		tasks: ['Seat 1', 'Seat 2'],
		participants: ['Mara', 'Emily', 'Becca', 'Sam', 'Ruthie'],
		lastRotated: now,
		owner: philId
	});
}
