const ArrayReduceTransformation = () => {
  var reduce = function (nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
      result = fn(result, nums[i]);
    }
    return result;
  };

  // //This does the same
  // var reduce = function (nums, fn, init) {
  //   return nums.reduce((acc, cur) => {
  //     return fn(acc, cur);
  //   }, init);
  // };

  let arr = [1, 2, 3, 4];
  let fn = function sum(accum, curr) {
    return accum + curr;
  };
  let init = 0;

  const reduced = reduce(arr, fn, init);

  let fn2 = function sum(accum, curr) {
    return accum + curr * curr;
  };
  let init2 = 100;
  const reduced2 = reduce(arr, fn2, init2);

  let arr3 = [];
  let fn3 = function sum(accum, curr) {
    return 0;
  };
  let init3 = 25;
  const reduced3 = reduce(arr3, fn3, init3);

  return (
    <>
      {console.log("reduced:", reduced)}
      {console.log("reduced2:", reduced2)}
      {console.log("reduced3:", reduced3)}
    </>
  );
};

export default ArrayReduceTransformation;
