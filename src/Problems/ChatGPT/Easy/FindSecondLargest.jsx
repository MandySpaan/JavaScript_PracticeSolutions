const FindSecondLargest = () => {
  const findSecondLargest = function (arr) {
    let sortedUniqueArray = [...new Set(arr)].sort((a, b) => a - b);
    return sortedUniqueArray[sortedUniqueArray.length - 2];
  };
  return (
    <div>
      {findSecondLargest([10, 5, 20, 15])}
      <br />
      {findSecondLargest([100, 200, 50, 300, 150, 300])}
      <br />
      {findSecondLargest([3, 8, 1, 7, 5])}
    </div>
  );
};

export default FindSecondLargest;
