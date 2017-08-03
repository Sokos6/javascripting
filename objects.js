var Person = function(living, age, gender) {
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function() {
		return this.gender;
	};
};

var will = new Person(true, 37, 'male');
console.log(will);