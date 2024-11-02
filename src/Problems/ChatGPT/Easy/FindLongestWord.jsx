const FindLongestWord = () => {
  const findLongestWord = function (str) {
    let arrayOfWords = str.split(" ");
    let longestWord = arrayOfWords[0];
    arrayOfWords.forEach((word) => {
      if (longestWord.length < word.length) {
        longestWord = word;
      }
    });
    return longestWord;
  };
  return (
    <div>
      {findLongestWord("Just checking this")}
      <br />
      {findLongestWord("The quick brown fox jumped over the lazy dog")}
      <br />
      {findLongestWord("This not that")}
    </div>
  );
};

export default FindLongestWord;
