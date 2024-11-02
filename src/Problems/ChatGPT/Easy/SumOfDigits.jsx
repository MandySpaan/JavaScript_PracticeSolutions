const SumOfDigits = () => {
  const sumOfDigits = function (number) {
    let arrayOfNumbers = number.toString().split("").map(Number);
    return arrayOfNumbers.reduce((accum, curr) => accum + curr, 0);
  };
  return (
    <div>
      {sumOfDigits(123)}
      <br />
      {sumOfDigits(4567)}
      <br />
      {sumOfDigits(908)}
      <br />
    </div>
  );
};

export default SumOfDigits;
