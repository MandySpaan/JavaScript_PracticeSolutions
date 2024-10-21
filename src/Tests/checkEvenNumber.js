function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    // Simulate some asynchronous operation using setTimeout
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve(`The number ${number} is even.`); // Success: Promise is resolved
      } else {
        reject(`The number ${number} is odd.`); // Failure: Promise is rejected
      }
    }, 1000); // 1 second delay
  });
}

export default checkEvenNumber;

// import "./App.css";
// import checkEvenNumber from "./Tests/checkEvenNumber";

// function App() {
//   checkEvenNumber(4)
//     .then((message) => {
//       console.log("Resolved:", message); // Will print: Resolved: The number 4 is even.
//     })
//     .catch((error) => {
//       console.log("Rejected:", error);
//     });

//   checkEvenNumber(5)
//     .then((message) => {
//       console.log("Resolved:", message);
//     })
//     .catch((error) => {
//       console.log("Rejected:", error); // Will print: Rejected: The number 5 is odd.
//     });
//   return (
//     <>
//       <h1>Testing</h1>
//     </>
//   );
// }

// export default App;
