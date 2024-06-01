// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


const findMin = (...args) => Math.min(...args);

// Test cases
console.log(findMin(1, 4, 12, -3)); // Output: -3
console.log(findMin(1, -1));         // Output: -1
console.log(findMin(3, 1));          // Output: 1


const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Test case
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));
// Output: { a: 1, b: 2, c: 3, d: 4 }


const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map(arg => arg * 2)
];

// Test cases
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// Output: [1, 2, 3, 8, 8]

console.log(doubleAndReturnArgs([2], 10, 4));
// Output: [2, 20, 8]


// remove a random element in the items array and return a new array without that item
const removeRandom = items => {
  const indexToRemove = Math.floor(Math.random() * items.length);
  return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)];
};

// Return a new array with every item in array1 and array2
const extend = (array1, array2) => [...array1, ...array2];

// Return a new object with all the keys and values from obj and a new key/value pair
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

// Return a new object with a key removed
const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

// Combine two objects and return a new object
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Return a new object with a modified key and value
const update = (obj, key, val) => ({ ...obj, [key]: val });

// Testing the functions
console.log(removeRandom([1, 2, 3, 4])); // Example output: [1, 2, 4]
console.log(extend([1, 2], [3, 4])); // Example output: [1, 2, 3, 4]
console.log(addKeyVal({ a: 1, b: 2 }, 'c', 3)); // Example output: { a: 1, b: 2, c: 3 }
console.log(removeKey({ a: 1, b: 2, c: 3 }, 'b')); // Example output: { a: 1, c: 3 }
console.log(combine({ a: 1, b: 2 }, { c: 3, d: 4 })); // Example output: { a: 1, b: 2, c: 3, d: 4 }
console.log(update({ a: 1, b: 2 }, 'b', 3)); // Example output: { a: 1, b: 3 }


