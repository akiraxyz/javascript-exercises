const sumAll = function (min, max) {
	if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
	if (min < 0 || max < 0) return "ERROR";
	if (min > max) {
		const temp = min;
		min = max;
		max = temp;
	}
	let sum = 0;
	for (let i = min; i < max + 1; i++) {
		sum += i;
	}
	return sum;
};

module.exports = sumAll;

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
