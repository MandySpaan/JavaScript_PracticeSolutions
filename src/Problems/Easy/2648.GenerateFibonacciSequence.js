var fibGenerator = function* () {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

export default fibGenerator;

// import fibGenerator from "./Problems/Easy/2648.GenerateFibonacciSequence";
// import "./App.css";

// function App() {
//   const gen = fibGenerator();
//   return (
//     <>
//       <h1>Testing</h1>
//       {gen.next().value}
//       {gen.next().value}
//       {gen.next().value}
//       {gen.next().value}
//       {gen.next().value}
//     </>
//   );
// }

// export default App;
