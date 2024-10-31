const FindMissingNumber = () => {
  const findMissingNumber = function (arr) {
    let missingNumber;
    for (let i = 0; i <= arr.length; i++) {
      if (arr.includes(i)) {
      } else {
        missingNumber = i;
        break;
      }
    }
    return missingNumber;
  };

  //This does the same as above
  const findMissingNumber2 = function (arr) {
    // Step 1: Calculate the expected sum for numbers from 0 to n
    const n = arr.length; // Since one number is missing, the range is from 0 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Step 2: Calculate the actual sum of elements in the array
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    // Step 3: The missing number is the difference between the expected sum and actual sum
    return expectedSum - actualSum;
  };

  return (
    <div>
      {findMissingNumber([3, 0, 1])}
      {findMissingNumber2([3, 0, 1])}
      {findMissingNumber([0, 1, 2, 4])}
      {findMissingNumber2([0, 1, 2, 4])}
      {findMissingNumber([5, 3, 0, 1, 2])}
      {findMissingNumber2([5, 3, 0, 1, 2])}
    </div>
  );
};

export default FindMissingNumber;
