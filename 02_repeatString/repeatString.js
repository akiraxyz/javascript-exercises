const repeatString = function (word, times) {
	if (times < 0) return "ERROR";
	let string = "";
	for (let i = 0; i < times; i++) {
		string += word;
	}
	return string;
};

module.exports = repeatString;

repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
repeatString("hey", Math.floor(Math.random() * 20));
repeatString("", 10);
