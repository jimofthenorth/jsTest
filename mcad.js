var ANCESTRY = require('./ancestry.js');

var ancestry = JSON.parse(ANCESTRY);

function average(array) {
	function plus(a, b) { return a + b }
	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
})

var hasMother = ancestry.filter(function(person) {
	if(person.mother && byName[person.mother]) {
		return person;
	}
});

console.log(average(hasMother.map(function(person) {
	var mom = byName[person.mother];
	return person.born - mom.born;
})));