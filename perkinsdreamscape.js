const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,

    //return character
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    }
}

console.log(aurora.describe());

const glacius = {
	name: "Glacius",
	health: 175,
	strength: 35,
	xp: 0,

	//return character
	describe() {
		 return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
	}
}

// USE OOP to share what is common in the characters

class Character {
	constructor(name, health, strength) {
		this. name = name;
		this.health = health;
		this.strength = strength;
		this.xp = 0;
	}

	// return character description
	describe() {
		return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points`;
	}
}

//use the new class to create objects

const perkins = new Character("Perkins", 200, 40);
const babyblue = new Character("BabyBlue", 120, 20);

perkins.health = perkins.health - 20; //after taking damage
babyblue.strength = babyblue.strength + 20 // drinking potion

console.log(perkins.describe());
console.log(babyblue.describe());