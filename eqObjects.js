const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: + ${actual} !== ${expected}`);
  }
};

const eqArrays = function (A, B) {
  if (!Array.isArray(A) || !Array.isArray(B)) return false
  if (A.length !== B.length) {
    return false
  }
  for (let i = 0; i < B.length; i++) {
    if (A[i] !== B[i]) {
      return false
    }
  }
  return true
}

const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  } else {
    for (let value of key1) {
      if (Array.isArray(object1[value])) {
        if (!eqArrays(object1[value], object2[value])) {
          return false;
        }
      }
      else if (object1[value] !== object2[value]) {
        return false;
      }
    }
    return true;
  }
};

assertEqual(eqObjects({ one: [2, 3], two: 12}),
{ one: [2, 3], two: 12});