var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

export default compose;

// import compose from "./Problems/Easy/2629.FunctionComposition.js";
// import "./App.css";

// function App() {
//   const myFunctions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
//   const composedFunction = compose(myFunctions);
//   const result4 = composedFunction(4);
//   const result5 = composedFunction(5);
//   return (
//     <>
//       <h1>Testing</h1>
//       {console.log(result4)}
//       {console.log(result5)}
//     </>
//   );
// }

// export default App;
