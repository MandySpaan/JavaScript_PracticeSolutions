const FindShortestWord = () => {
  const findShortestWord = function (arr) {
    let arrayOfWords = arr.split(" ");
    let shortestWord = arrayOfWords[0];
    for (let i = 1; i < arrayOfWords.length; i++) {
      if (arrayOfWords[i].length < shortestWord.length) {
        shortestWord = arrayOfWords[i];
      }
    }
    return shortestWord;
  };
  return (
    <div>
      {findShortestWord("I love programming")}
      <br />
      {findShortestWord("JavaScript is fun")}
      <br />
      {findShortestWord("That brown fox was quick")}
      <br />
      {findShortestWord("Look at it, it's a tiny ant")}
    </div>
  );
};

export default FindShortestWord;
