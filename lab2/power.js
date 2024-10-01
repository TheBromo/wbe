
const power = function(b, n) {
	assert(Number.isInteger(b) || typeof b === "bigint", "b is not an integer");
	assert(Number.isInteger(n) || typeof n === "bigint", "n is not an integer");

	let two = 2;
	let one = 1;
	let zero = 0;
	if (typeof b === "bigint" || typeof n === "bigint") {
		n = BigInt(n);
		b = BigInt(b);
		two = 2n;
		one = 1n;
		zero = 0n;
	}

	if (n == zero) {
		return one;
	} else {
		if (n % two == zero) {
			let temp = power(b, n / two);
			return temp * temp;
		} else {
			return b * power(b, n - one);
		}
	}
};

function assert(condition, message) {
	if (!condition) throw new Error(message || "Assertion failed");
}

module.exports = { power } 
