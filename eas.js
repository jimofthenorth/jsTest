/* Takes a function and an array as arguments.
 * Every returns true is every element in the array
 * passes the test function test and false on the first
 * occurence of an element that does not pass.
 * Some returns true as soon as an element is found
 * that does not pass the test function and false
 * if every element in the array does not pass.
 */

function every(array, test) {
	for(var i = 0; i < array.length; i++) {
		if(!test(array[i]))
			return false;
	}
	return true;
}

function some(array, test) {
	for(var i = 0; i < array.length; i++) {
		if(test(array[i]))
			return true;
	}
	return false;
}

var stuff = [1, 2, 3, 4, 5, 6];
var same = [1, 1, 1, 1, 1, 1];


// Tests

// Should return false
console.log(every(stuff, function (element) {
	if(element == 1)
		return true;
}));


// Should return true
console.log(every(same, function (element) {
	if(element == 1)
		return true;
}));


// Should return false
console.log(some(same, function (element) {
	if(element == 7)
		return true;
}));

// Should return true
console.log(some(same, function (element) {
	if(element == 1)
		return true;
}));

// Should return false
console.log(some(stuff, function (element) {
	if(element == 7)
		return true;
}));

// Should return true
console.log(some(stuff, function (element) {
	if(element == 6)
		return true;
}));