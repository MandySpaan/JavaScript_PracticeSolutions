const SumOfPositives = () => {
  const sumOfPositives = function (arr) {
    return arr.filter((n) => n > 0).reduce((acc, nr) => nr + acc, 0);
  };
  return (
    <div>
      {sumOfPositives([1, -2, 3, 4, -5])} {/* Output: 8 (1 + 3 + 4) */}
      {sumOfPositives([-1, -2, -3])} {/* Output: 0 (No positive numbers) */}
      {sumOfPositives([10, 20, 30])} {/* Output: 60 (10 + 20 + 30) */}
      {sumOfPositives([])} {/* Output: 0 (Empty array) */}
    </div>
  );
};

export default SumOfPositives;
