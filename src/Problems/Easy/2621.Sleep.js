function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

//// This does exactly the same as the function above
// const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));

export default sleep;

// import sleep from "./Problems/Easy/2621.Sleep";
// import "./App.css";

// function App() {
//   let t = Date.now();
//   sleep(100).then(() => {
//     console.log("Date1:", t, "Date2:", Date.now());
//     console.log(Date.now() - t); // Should be around 100
//   });
//   return (
//     <>
//       <h1>Testing</h1>
//     </>
//   );
// }

// export default App;
