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

exports.addUser = function(user) {
	var userId = generateUserId();
	exports.users.push();
};

exports.addChirp = function(user, chirp) {
	var chirpId = generateChirpId(),
		date = new Date();

	exports.chiprs.push({
		id: chirpId,
		userId: user.id,
		text: chirp.text,
		time: date
	});
}

exports.getAllChirps = function() {
	return exports.chiprs;
};