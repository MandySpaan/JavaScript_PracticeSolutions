const FlattenNestedArray = () => {
  const flattenArray = function (arr) {
    let result = [];
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        result.push(...flattenArray(element));
      } else {
        result.push(element);
      }
    });
    return result;
  };
  const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

  return <div>{console.log(flattenArray(nestedArray))} </div>;
};

export default FlattenNestedArray;
