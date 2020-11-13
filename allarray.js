let numbers = [1, 3, 5, 12, 232, 3, 42]
const mapResults = numbers.map(number => number * 2);
console.log(mapResults);

const names = ['Tom', 'James', 'Eric', 'Matthew'];
const result = names.filter(name => name.length < 6);
console.log(result);

let thesenumbers = [12, 23, 12, 34, 12, 3, 3];
const found = thesenumbers.find(thisnumber => thisnumber > 10);
console.log(found);

const fruits = ['apple', 'orange', 'strawberry'];
console.log(fruits.indexOf('orange'));

const sour =['lemon', 'lime', 'lemonhead'];
console.log(sour.join('+'));

const animals = ['tiger', 'lion', 'tiger', 'penguin'];
animals.pop();
console.log(animals);

animals.push('cheetah');
console.log(animals);

console.log(fruits.shift());
console.log(animals.unshift('cow'));
console.log(fruits.reverse());