var createCounter = function (n) {
  return function () {
    return n++;
  };
};

// //This does the same as the code above
// const createCounter = (n) => () => n++

export default createCounter;

// import createCounter from "./Problems/Easy/2620.Counter";
// import "./App.css";

// function App() {
//   var counter = createCounter(5);
//   return (
//     <>
//       <h1>Testing</h1>
//       {counter()}
//       {counter()}
//       {counter()}
//     </>
//   );
// }

// export default App;
