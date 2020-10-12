console.log(typeof 42);
console.log(typeof 'abc');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // oops bug!
console.log(typeof { a: 1 });
console.log(typeof [1, 2, 3]);
console.log(typeof function hello() {});

var ourName = 'Sokolowski';
// var age;

//

var adult = true;

if (adult) {
  var myName = 'Will';
  // let age = 39;
  console.log('this is a secret');
}

console.log(myName);
// console.log(age);

const myBirthday = true;
let age = 39;

if (myBirthday) {
  age = age + 1;
  // myBirthday = false; can't do this!
}

console.log(myBirthday);

const actors = ['jason vorhees', 'fred krueger'];

actors[2] = 'Burt Reynolds';
// actors = [];  can't do this!

function hello(myName) {
  console.log(`Hello, ${myName}.`);
}

hello('Will');

// function declaration
function codeFrequency(learnJS) {
  return console.log('Keep up the great work!');
}

// function expression
let codeToday = function (learnJS) {
  return console.log('Keep going!');
};
codeFrequency();
codeToday();

// functions can receive paramater input
function greeting(kidsName) {
  console.log(`Hello, ${kidsName}`);
}
greeting('Gracie');

// Functions also can return values using the return keyword:
function otherGreeting(myName) {
  return `Hello, ${myName}`;
}

let msg = otherGreeting('Bella');
console.log(msg);

// You can only return a single value, but
// if you have more values to return, you can wrap
// them up into a single object/array.

// Since functions are values, they can be assigned
// as properties on objects:

let whatToSay = {
  greeting() {
    console.log('Howdy');
  },
  question() {
    console.log('What it be?');
  },
  answer() {
    console.log('it be all gooood');
  },
};

whatToSay.greeting();
whatToSay.question();
whatToSay.answer();

var x = [1, 2, 3];

// assignment is by reference-copy, so
// y references the *same* array as x,
// not another copy of it.

var y = x;

x.push(1);
console.log(y);
console.log(y === x);
console.log(y === [1, 2, 3, 1]);
console.log(x === [1, 2, 3, 1]);
// In this snippet, y === x is true
// because both variables hold a reference
// to the same initial array. But the === [1,2,3]
// comparisons both fail because y and x,
// respectively, are being compared to new different
// arrays [1,2,3]. The array structure and contents
// don't matter in this comparison, only the reference identity.

var arr = ['1', '10', '100', '1000'];

for (var value of arr) {
  console.log(value);
}

for (let i = 0; i < arr.length && arr[i] < 500; i++) {
  console.log(arr[i]);
}
