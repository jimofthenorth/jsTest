var ANCESTRY = require('./ancestry.js');

var ancestry = JSON.parse(ANCESTRY);

function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function groupBy(array, groupFilter) {
	var newArray = [];
	for(var i = 0; i < array.length; i++)
		if(groupFilter(array[i])) {
			newArray.push(groupFilter(array[i]));
		}
	return newArray;
}


function calcAge(person) {
	return person.died - person.born;
}

var centuries = [20];


var result = average(groupBy(ancestry, function(person) {
	for (var i = 0; i < centuries.length; i++) {
		if(Math.ceil(person.died / 100) == centuries[i])
			return person.died - person.born;
	}
}));

console.log(centuries[0] + ": " + parseFloat(result).toFixed(1));