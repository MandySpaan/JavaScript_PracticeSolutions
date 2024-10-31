import { useEffect } from "react";
import { useState } from "react";

const AddTwoPromises = () => {
  const [result, setResult] = useState(null);

  const addTwoPromises = async function (promise1, promise2) {
    return (await promise1) + (await promise2);
  };

  useEffect(() => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

    const calculateResult = async () => {
      setResult(await addTwoPromises(promise1, promise2));
    };

    calculateResult();
  });

  return <div>{result !== null ? result : "Loading..."}</div>;
};

export default AddTwoPromises;
