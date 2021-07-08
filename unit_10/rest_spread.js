// Original function
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// Refactor using rest operator and arrow function
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// findMin function
const findMin = (...nums) => nums.reduce((min, num) => (min > num ? num : min));

findMin(1, 4, 12, -3); // -3
findMin(1, -1); // -1
findMin(3, 1); // 1

// mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // {a:1, b:2, c:3, d:4}

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...nums) => [
  ...arr,
  ...nums.map((num) => num * 2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4); // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]

// Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
  const rand = Math.floor(Math.random() * items.length);
  return [...items.slice(0, rand), ...items.slice(rand + 1)];
};

removeRandom([2, 3, 4, 5, 6]);

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

/** Return a new object with a key removed. */
const removeKey = (obj, key) => ({ ...obj, [key]: undefined }); // OR

const removeKey = (obj, key) =>
  Object.keys(obj).reduce((newObj, k) => {
    if (key !== k) newObj[k] = obj[k];
    return newObj;
  }, {});

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({ ...obj, [key]: val });
