function doubler(num) {
  return num * 2;
}

function map(array, func) {
  const mappedArray = [];
  array.forEach(elem => {
    mappedArray.push(func(elem));
  });
  return mappedArray;
}

function filter(array, func) {
  const filteredArray = [];
  array.forEach(elem => {
    if (func(elem)) {
      filteredArray.push(elem);
    }
  });
  return filteredArray;
}

function includes(obj, target) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (obj[i] === target) {
        return true;
      }
    }
  } else {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === target) {
        return true;
      }
    }
  }
  return false;
}

function countWords(num, string) {
  return num + string.split(' ').length;
}

function reduce(array, accumulator, func) {
  array.forEach(elem => {
    accumulator = func(accumulator, elem);
  });
  return accumulator;
}

function sum(array) {
  return array.reduce((a, b) => a + b);
}

function every(array, func) {
  let allAreTrue = true;
  array.map(elem => {
    if (!func(elem)) {
      allAreTrue = false;
    }
  });
  return allAreTrue;
}

function any(array, func) {
  return !every(array, elem => !func(elem));
}
