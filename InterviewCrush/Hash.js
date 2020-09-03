myDictionary = {
  dog: 'A loving animal',
  Amazon: 'A dream job',
  apples: 'Keeps the doctor away',
  cat: 'an interesting creature',
};

// Finding an entry in a hash of any size takes constant time!

// Create a large array, one large enough to hold several times the
// largest number of items we want to store in our hash

let makeHashTable = () => {
  let storage = [];
  let max = 1000;
};

// Second step is create a function the converts any key into a number
// that appears random
// this number is called a hashkey
// number output of this function should be no larger than your hash
// table's max size.

let getIndexBelowMaxForKey = (str, max) => {
  let hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash;
    hash = hash + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash & max);
};

let insert = (key, value) => {
  if (typeof key === 'undefined') {
    throw 'Cannot insert with undefined key';
  }
  hasher();
};

let retrieve = (key) => {
  hasher();
}

let hasher = () => {
  let hashIndex = getIndexBelowMaxForKey(key, max);
  storage[hashIndex] = value;
}

console.log(getIndexBelowMaxForKey('dog', 1000000000000)); // <- no matter how large the dictionary
// still takes same amount of runtime
// hash always resolves 1296
// here with bigger number 65536
