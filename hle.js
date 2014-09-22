function average(array) {
	function plus(a, b) { a + b }
	return array.reduce(plus) / array.length;
}