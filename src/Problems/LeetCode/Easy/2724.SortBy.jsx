const SortBy = () => {
  const sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
  };
  let arr = [5, 4, 1, 2, 3];
  let fn = (x) => x;
  let arr2 = [{ x: 1 }, { x: 0 }, { x: -1 }];
  let fn2 = (d) => d.x;
  let arr3 = [
    [3, 4],
    [5, 2],
    [10, 1],
  ];
  let fn3 = (x) => x[1];
  return (
    <div>
      {console.log(sortBy(arr, fn))}
      <br />
      {console.log(sortBy(arr2, fn2))}
      <br />
      {console.log(sortBy(arr3, fn3))}
      <br />
    </div>
  );
};

export default SortBy;
