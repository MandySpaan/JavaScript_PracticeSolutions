var map = function (arr, fn) {
  const transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr[i] = fn(arr[i], i);
  }
  return transformedArr;
};

// //This does the same as above
// var map = function (arr, fn) {
//   let newArray = [];
//   arr.forEach((n, i) => {
//     newArray.push(fn(n, i));
//   });
//   return newArray;
// };

// //This also does the same
// var map = function(arr, fn) {
//     return arr.map((element, index) => fn(element, index));
// };

export default map;

// import map from "./Tests/transformArray";
// import "./App.css";

// function App() {
//   let arr = [1, 2, 3];
//   let fn = function plusone(n) {
//     return n + 1;
//   };
//   const newArray = map(arr, fn);

//   let fn2 = function plusI(n, i) {
//     return n + i;
//   };
//   const newArray2 = map(arr, fn2);

//   let arr3 = [10, 20, 30];
//   let fn3 = function constant() {
//     return 42;
//   };
//   const newArray3 = map(arr3, fn3);

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
