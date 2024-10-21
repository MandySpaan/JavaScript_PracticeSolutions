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

export default reduce;

// import "./App.css";
// import reduce from "./Problems/Easy/2626.ArrayReduceTransformation";

// function App() {
//   let arr = [1, 2, 3, 4];
//   let fn = function sum(accum, curr) {
//     return accum + curr;
//   };
//   let init = 0;

//   const newArray = reduce(arr, fn, init);

//   let fn2 = function sum(accum, curr) {
//     return accum + curr * curr;
//   };
//   let init2 = 100;
//   const newArray2 = reduce(arr, fn2, init2);

//   let arr3 = [];
//   let fn3 = function sum(accum, curr) {
//     return 0;
//   };
//   let init3 = 25;
//   const newArray3 = reduce(arr3, fn3, init3);

//   return (
//     <>
//       <h1>Testing</h1>
//       {console.log("newArray:", newArray)}
//       {console.log("newArray2:", newArray2)}
//       {console.log("newArray3:", newArray3)}
//     </>
//   );
// }

// export default App;
