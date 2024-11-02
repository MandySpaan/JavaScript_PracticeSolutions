const MostFrequentElement = () => {
  const mostFrequentElement = function (arr) {
    if (arr.length === 0) {
      return null;
    }

    const frequencyMap = {};
    for (let element of arr) {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }
    let mostFrequent = arr[0];
    let maxCount = frequencyMap[mostFrequent];

    for (let element in frequencyMap) {
      if (frequencyMap[element] > maxCount) {
        mostFrequent = element;
        maxCount = frequencyMap[element];
      }
    }

    return mostFrequent;
  };
  return (
    <div>
      {console.log(mostFrequentElement([1, 3, 2, 3, 4, 1, 3]))}
      {console.log(
        mostFrequentElement([
          "apple",
          "banana",
          "apple",
          "orange",
          "banana",
          "apple",
        ])
      )}
      {console.log(mostFrequentElement([true, false, true, true, false]))}
      {console.log(mostFrequentElement([7, 7, 7, 7]))}
      {console.log(mostFrequentElement([]))}
    </div>
  );
};

export default MostFrequentElement;
