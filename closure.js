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

test('Closure for object privacy.', (assert) => {
  const msg = '.get() should have access to the closure.';
  const expected = 1;
  const obj = getSecret(1);

  const actual = obj.get();

  try {
    assert.ok(secret, 'This throws an error.');
  } catch (e) {
    assert.ok(
      true,
      `The secret var is only available
      to privileged methods.`
    );
  }

  assert.equal(actual, expected, msg);
  assert.end();
});

// In the example above, the `.get()` method is defined inside the scope
// of `getSecret()`, which gives it access to any variables from `getSecret()`,
// and makes it a privileged method. In this case, the parameter, `secret`.

// Objects are not the only way to produce data privacy. Closures can also be used to
// create stateful functions whose return values may be influenced by their internal state, e.g.:

const secret = msg => () => msg;
