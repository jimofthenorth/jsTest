var ANCESTRY = require('./ancestry.js');

var ancestry = JSON.parse(ANCESTRY);


// Function to calculate the average of the given array.
function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

// A work in progress to abstract the grouping operation.
// Not yet in use.
function groupBy(array, groupFilter) {
	var newArray = [];
	for(var i = 0; i < array.length; i++)
		if(groupFilter(array[i])) {
			newArray.push(groupFilter(array[i]));
		}
	return newArray;
}

// Array to hold the century objects. Each object has a
// name or number called 'centuryName' and an array within
// the object that holds the ages of all the people determined
// to have died in that century.
// The function 'createCenturies' will fill this array with the
// appropriate values.
var centuries = [];

// Fills array 'centuries' with objects to denote century
// number/name and an array that holds the ages of people in
// that century.
function createCenturies(ancestryFile) {
	function centuryTest(person) {
		var found = false;
		for(var i = 0; i < centuries.length; i++) {
			if(Math.ceil(person.died / 100) == centuries[i].centuryName) {
				centuries[i].ages.push(person.died - person.born);
				found = true;
			}
		}
		if(found != true) {
			centuries.push({
				centuryName: Math.ceil(person.died / 100),
				ages: [person.died - person.born]
			});
		}
	}

	for(var i = 0; i < ancestryFile.length; i++) {
		centuryTest(ancestryFile[i]);
	}
}

// Function to print the century and average age
function printAverages(centuriesArray) {
    for(var century in centuriesArray) {
	var resultString = average(centuriesArray[century].ages);
	console.log(centuriesArray[century].centuryName + ": " + parseFloat(resultString).toFixed(1));
    }
}

createCenturies(ancestry);
printAverages(centuries);
// console.log(centuries);

// another comment