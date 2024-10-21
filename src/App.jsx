import filter from "./Problems/Easy/2634.FilteElementsFromArrayr";
import "./App.css";

function App() {
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
    <>
      <h1>Testing</h1>
      {console.log("newArray:", newArray)}
      {console.log("newArray2:", newArray2)}
      {console.log("newArray3:", newArray3)}
    </>
  );
}

export default App;
