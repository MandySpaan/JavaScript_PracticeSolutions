const ChunkArray = () => {
  const chunkArray = function (arr, size) {
    let chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      let chunk = arr.slice(i, i + size);
      chunkedArray.push(chunk);
    }
    return chunkedArray;
  };
  return (
    <div>
      {console.log(chunkArray([1, 2, 3, 4, 5], 2))}
      {console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))}
      {console.log(chunkArray([1, 2, 3], 5))}
    </div>
  );
};

export default ChunkArray;
