const ChunkArray = () => {
  var chunk = function (arr, size) {
    var arrayToSplice = arr;
    var chunkedArray = [];
    var chunkedPart;
    if (arr.length === 0) {
      return arr;
    }
    while (arrayToSplice.length > size) {
      chunkedPart = arrayToSplice.splice(0, size);
      chunkedArray.push(chunkedPart);
    }
    chunkedArray.push(arrayToSplice);
    return chunkedArray;
  };
  var arr = [1, 2, 3, 4, 5],
    size = 1;
  function customReduce(nums, fn, init) {
    // Use the built-in reduce function
    return nums.reduce((accum, curr) => fn(accum, curr), init);
  }

  var arr2 = [1, 9, 6, 3, 2],
    size2 = 3;
  return (
    <div>
      {console.log(chunk(arr, size))}
      {console.log(chunk(arr2, size2))}
    </div>
  );
};

export default ChunkArray;
