exports.users = [{
	user: 'kkirilov',
	id: 1,
	chirps: [1, 2] //ID of chiprs
}], exports.chiprs = [{
	userId: 1,
	id: 1,
	text: "Търсим нов служител. Нужно е да е наполовина човеко-прасе, наполовина - мечка. Желание за работа с #WordPress е многу от съществено значка.",
	time: "10-10-2014 12:54"
}, {
	userId: 1,
	id: 2,
	text: "НЕ!Търсим нов служител. Нужно е да е наполовина човеко-прасе, наполовина - мечка. Желание за работа с #WordPress е многу от съществено значка.",
	time: "10-10-2014 12:54"
}];

var chirpId = 2,
	userId = 1;

var generateChirpId = function() {
	chirpId++;
	return chirpId;
};

var generateUserId = function() {
	userId++;
	return userId;
};

exports.addUser = function(name) {
	var userId = generateUserId();

	exports.users.push({
		user: name,
		id: userId,
	});

	return userId;
};

exports.getAllUsers = function() {
	return exports.users;
};

exports.addChirp = function(userId, chirpText) {
	var chirpId = generateChirpId(),
		date = new Date();

	exports.chiprs.push({
		id: chirpId,
		userId: userId,
		text: chirpText,
		time: date
	});

	return chirpId;
}

exports.getAllChirps = function() {
	return exports.chiprs;
};

exports.getChirp = function(id) {
	exports.chiprs.forEach(function(chirp) {
		if (chirp.id === id) {
			return chirp;
		}
	});

	throw 'Chirp with id: ' + id + ' not found';
};

exports.getChirpByUserId = function(userId) {
	return exports.chirps.filter(function(chirp) {
		return chirp.userId === userId;
	});
};

exrpots.removeChirp = function(id, userId) {
	var index = 0,
		found = false;
	exports.chirps.forEach(function(chirp) {
		index++;
		if (chirp.id === id && chirp.userId === userId) {
			found = true;
			break;
		}
	})

	if (found) {
		exports.chirps.splice(index, 1);
	} else {
		throw 'Chirp with id: ' + id + ' not found';
	}
}