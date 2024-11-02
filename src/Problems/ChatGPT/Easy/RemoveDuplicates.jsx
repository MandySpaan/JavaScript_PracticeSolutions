const RemoveDuplicates = () => {
  const removeDuplicates = function (arr) {
    return [...new Set(arr)];
  };

  const arr1 = [1, 2, 2, 3, 4, 4, 5];
  const arr2 = [5, 5, 5, 5, 5];

  // // This does the same as the code above
  //   const removeDuplicates = function(arr) {
  //     const newArray = [];
  //     for (let i = 0; i < arr.length; i++) {
  //       if (!newArray.includes(arr[i])) {
  //         newArray.push(arr[i]);
  //       }
  //     }
  //     return newArray;
  //   }

  return (
    <>
      {console.log(removeDuplicates(arr1))}
      {console.log(removeDuplicates(arr2))}
    </>
  );
};

export default RemoveDuplicates;
