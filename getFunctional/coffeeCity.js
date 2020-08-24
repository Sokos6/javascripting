// Returns a string of our favorite coffee
const prepareCoffee = () => 'Cafe Bustelo';

const getCoffee = (numberCups) => {
  const coffeeCups = [];

  for(let cups = 1; cups <= numberCups; cups += 1) {
    const coffeeCup = prepareCoffee();
    coffeeCups.push(coffeeCup);
  }
  return coffeeCups;
};

const ourCoffee = getCoffee(40);
console.log(ourCoffee);
