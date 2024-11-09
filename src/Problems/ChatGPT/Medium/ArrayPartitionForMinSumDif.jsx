const ArrayPartitionForMinSumDif = () => {
  const minSumDif = function (arr) {
    let totalSum = arr.reduce((acc, cur) => acc + cur, 0);
    let halfOfTotal = Math.floor(totalSum / 2);

    let dp = new Array(halfOfTotal + 1).fill(false);
    dp[0] = true;

    for (let num of arr) {
      for (let sum = halfOfTotal; sum >= num; sum--) {
        if (dp[sum - num]) {
          dp[sum] = true;
        }
      }
    }

    let closestSum = 0;
    for (let i = halfOfTotal; i >= 0; i--) {
      if (dp[i]) {
        closestSum = i;
        break;
      }
    }

    return Math.abs(totalSum - closestSum - closestSum);
  };

  return (
    <div>
      {minSumDif([1, 6, 11, 5])} {/* Expected Output: 1 */}
      <br />
      {minSumDif([3, 9, 7, 3])} {/* Expected Output: 2 */}
      <br />
      {minSumDif([10, 20, 30, 40, 50])} {/* Expected Output: 10 */}
      <br />
      {minSumDif([2, 4, 6, 8, 10])} {/* Expected Output: 2 */}
    </div>
  );
};

export default ArrayPartitionForMinSumDif;
