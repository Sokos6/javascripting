// Coding challenge #1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Coding challenge #2: Print the odd numbers less than 100

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

// Coding challenge #3: Print the multiplication table with 7

for (let i = 1; i <= 10; i++) {
  let row = '7 * ' + i + ' = ' + 7 * i;
  console.log(row);
}

for (let i = 1; i <= 10; i++) {
  printTable(i);
  console.log('');
}

function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    let row = n + ' * ' + i + ' = ' + n * i;
    console.log(row);
  }
}
