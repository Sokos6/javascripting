// const censor = words => {
//   const filtered = [];
//   for (let i = 0, { length } = words; i < length; i++) {
//     const word = words[i];
//     if (word.length !== 4) filtered.push(word);
//   }
//   return filtered;
// };
// // censor(['oops', 'gasp', 'shout', 'sun']);
// console.log(censor(['oops', 'gasp', 'shout', 'sun']));

const startsWithS = words => {
  const filtered = [];
  // console.log(filtered);
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    // console.log(word);
    if (word.startsWith('s')) filtered.push(word);
  }
  return filtered;
};
console.log(startsWithS('gasp', 'green', 'sure', 'coil', 'soup'));

const reduce = (reducer, initial, arr) => {
  let acc = initial;
  for (let i = 0, { length } = arr; i < length; i++) {
    acc = reducer(acc, arr[i]);
  }
  return acc;
};

console.log(reduce((acc, curr) => acc + curr, 0, [1,2,3]));

const numbers = [3, 4, 10, 20];
const getLessThanFive = num => num < 5;
const getMoreThanTen = num => num > 5;

const lessThanFive = numbers.filter(getLessThanFive);
const moreThanTen = numbers.filter(getMoreThanTen);

const fruitBasket = ['banana', 'pear', 'guava'];
for (let fruit of fruitBasket) {
  console.log(fruit);
}

const numbersTwo = [23, 22, 24, 12, 34, 54, 25, 66];

let smallerThan20 = [];
for (let num of numbersTwo) {
  if (num < 40) {
    console.log(num);
  }
}