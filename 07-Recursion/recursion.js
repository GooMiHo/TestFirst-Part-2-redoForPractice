function factorialIterative(num) {
  let solution = 1;
  for (let i = num; i > 0; i--) {
    solution *= i;
  }
  return solution;
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function fib(n) {
  if (n < 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function type(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function stringify(obj) {
  if (type(obj) === 'String') {
    return `"${obj}"`;
  }
  if (type(obj) === 'Object') {
    let objs = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        objs.push(`"${key}":${stringify(obj[key])}`);
      }
    }
    return `{${objs.join()}}`;
  }
  if (type(obj) === 'Array') {
    let arrays = [];
    obj.forEach(elem => {
      arrays.push(stringify(elem));
    });
    return `[${arrays.join()}]`;
  }
  return obj + '';
}
