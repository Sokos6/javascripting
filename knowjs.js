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
whatToSay.question()
whatToSay.answer();