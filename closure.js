const fetch = require('node-fetch');

function makeAdder(x) {
  function add(y) {
    return y + x;
  }

  return add;
}
var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

plusOne(3);
plusOne(41);

plusTen(13);

// In JavaScript, closures are the primary mechanism used to enable data privacy.
// When you use closures for data privacy, the enclosed variables are only in scope
// within the containing (outer) function. You can’t get at the data from an outside
// scope except through the object’s privileged methods. In JavaScript, any exposed
// method defined within the closure scope is privileged. For example:

const getSecret = (secret) => {
  return {
    get: () => secret,
  };
};

// test('Closure for object privacy.', (assert) => {
//   const msg = '.get() should have access to the closure.';
//   const expected = 1;
//   const obj = getSecret(1);

//   const actual = obj.get();

//   try {
//     assert.ok(secret, 'This throws an error.');
//   } catch (e) {
//     assert.ok(
//       true,
//       `The secret var is only available
//       to privileged methods.`
//     );
//   }

//   assert.equal(actual, expected, msg);
//   assert.end();
// });

// In the example above, the `.get()` method is defined inside the scope
// of `getSecret()`, which gives it access to any variables from `getSecret()`,
// and makes it a privileged method. In this case, the parameter, `secret`.

// Objects are not the only way to produce data privacy. Closures can also be used to
// create stateful functions whose return values may be influenced by their internal state, e.g.:

const secret = (msg) => () => msg;

// More Closure stuffs
// Closure is when a function remembers and continues to access variables from
// outside its scope, even when the function is executed in a different scope.

// We see two definitional characteristics here. First, closure is part of the
// nature of a function. Objects don't get closures, functions do. Second,
// to observe a closure, you must execute a function in a different scope
// than where that function was originally defined.

function greeting(msg) {
  return function who(name) {
    console.log(`${msg}, ${name}!`);
  };
}

let hello = greeting('Hello');
let howdy = greeting('Howdy');
hello('Will');

hello('Meagan');

howdy('Nick');

function counter(step = 1) {
  let count = 0;
  return function increaseCount() {
    count = count + step;
    return count;
  };
}

let incBy1 = counter(1);
let incBy3 = counter(3);

console.log(incBy1());
console.log(incBy1());

incBy3();
incBy3();
incBy3();

// Closure is most common when working with
// asynchronous code, such as with callbacks. Consider:

function getSomeData(url) {
  fetch(url, function onResponse(resp) {
    console.log(`Response (from ${ url }): ${ resp }`);
  })
}

console.log(getSomeData('https://jsonplaceholder.typicode.com/todos/1'));

// Closure is one of the most prevalent and important programming patterns in
// any language. But that's especially true of JS; it's hard to imagine doing
// anything useful without leveraging closure in one way or another.