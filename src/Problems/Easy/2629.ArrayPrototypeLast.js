Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};

// import "./Problems/Easy/2629.ArrayPrototypeLast.js";
// import "./App.css";

// function App() {
//   const fruit = ["apple", "orange", "lemon", "peach"];

//   return (
//     <>
//       <h1>Testing</h1>
//       {fruit.last()}
//     </>
//   );
// }

// export default App;