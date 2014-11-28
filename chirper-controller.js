var memory = require('./inmemory.js');

var dateConverter = function(date) {
	return date.getDay() + '-' + date.getMonth() + '-' + date.getYear() + ' ' + date.toTimeString().substr(0, 5);
}

exports.getAllChirps = function() {
	var sortedChirps = memory.getAllChirps().sort(function(chirp, chirpNext) {
			return chirp.date >= chirpNext.date;
		}),
		chirps = [];

	sortedChirps.forEach(function(chirp) {
		chirps.push({
			userId: chirp.userId,
			chirpId: chirp.id,
			chirpText: chirp.text,
			chirpTime: dateConverter(chirp.date)
		});
	})

	return JSON.stringify(chirps);
};

exports.createChirp = function(userId, chirpText) {
	var chirpId = memory.addChirp(userId, chirpText);

	return JSON.stringify({
		chirpId: chirpId
	});
};

exports.getAllUsers = function() {
	var memoryUsers = memory.getAllUsers(),
		users = [];

	memoryUsers.forEach(function(user) {
		users.push({
			user: user.user,
			userId: user.id,
			chirps: memory.getChirpByUserId(user.id).length
		});
	});

	return JSON.stringify(users);
};

exports.registerUser = function(userName) {
	var nameUnique = true,
		userId = -1;

	memory.getAllUsers().forEach(function(memUser) {
		if (memUser.name === userName) {
			break;
			nameUnique = false;
		}
	})

	if (nameUnique) {
		userId = memory.addUser(userName);

		return userId;
	}

	throw "User with name: " + user.name + " already exist";
};

exports.getUserChirps = function(id) {
	memory.getChirpByUserId(id);
};

exports.deleteChirp = function(chirpId, userId) {
	memory.removeChirp(chirpId, userId);
};

exports.getChirps = function(chirpId, userId) {
	if (userId === undefined) {
		return JSON.stringify(memory.getChirp(chirpId));
	} else {
		return JSON.stringify(memory.getChirpByUserId(userId));
	}
};