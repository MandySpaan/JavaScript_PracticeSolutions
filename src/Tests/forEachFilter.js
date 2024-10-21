function filter(arr, fn) {
  var result = [];
  arr.forEach((n, i) => {
    if (fn(n, i)) {
      result.push(n);
    }
  });
  return result;
}

export default filter;
