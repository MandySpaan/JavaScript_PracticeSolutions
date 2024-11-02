const CountUniqueValues = () => {
  const countUniqueValues = function (arr) {
    let uniqueValues = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        uniqueValues++;
      }
    }
    return uniqueValues;
  };
  return (
    <div>
      {countUniqueValues([1, 1, 2, 3, 3, 4, 5])}
      <br />
      {countUniqueValues([-2, -1, -1, 0, 1, 1, 2, 2, 3])}
      <br />
      {countUniqueValues([])}
      <br />
      {countUniqueValues([3])}
    </div>
  );
};

export default CountUniqueValues;
