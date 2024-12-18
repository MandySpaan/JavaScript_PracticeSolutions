const FilterElementsFromArray = () => {
  function filter(arr, fn) {
    var result = [];
    arr.forEach((n, i) => {
      if (fn(n, i)) {
        result.push(n);
      }
    });
    return result;
  }

  let arr = [0, 10, 20, 30];
  let fn = function greaterThan10(n) {
    return n > 10;
  };
  const newArray = filter(arr, fn);

  let arr2 = [1, 2, 3];
  let fn2 = function firstIndex(n, i) {
    return i === 0;
  };
  const newArray2 = filter(arr2, fn2);

  let arr3 = [-2, -1, 0, 1, 2];
  let fn3 = function plusOne(n) {
    return n + 1;
  };
  const newArray3 = filter(arr3, fn3);

  return (
    <div>
      {console.log("newArray:", newArray)}
      {console.log("newArray2:", newArray2)}
      {console.log("newArray3:", newArray3)}
    </div>
  );
};

export default FilterElementsFromArray;
