// Quick Question #1
new Set([1, 1, 2, 2, 3, 4]); // return new set with duplicates removed, Set({1, 2, 3 ,4})

// Quick Question #2
[...new Set("referee")].join(""); // "ref"

// Quick Question #3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

// m = Map(2) {
//    [ 1, 2, 3 ] => true,
//    [ 1, 2, 3 ] => false,
// }

// hasDuplicate
const hasDuplicate = (arr) => arr.length !== new Set(arr).size;

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

// vowelCount
const vowelCount = (str) =>
  str.split("").reduce((newMap, char) => {
    if ("aeuio".includes(char))
      newMap.set(char, newMap.has(char) ? newMap.get(char) + 1 : 1);

    return newMap;
  }, new Map());

vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount("Colt"); // Map { 'o' => 1 }
