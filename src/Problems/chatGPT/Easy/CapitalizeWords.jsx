const CapitalizeWords = () => {
  const capitalizeWords = function (string) {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  //This does the same as the code above
  const capitalizeWords2 = function (string) {
    let arrayOfWords = string.split(" ");
    let arrayOfLetters;
    let firstLetter;
    let arrayOfLastLetters;
    let lastLetters;
    let newWord;
    let newArrayOfWords = [];

    arrayOfWords.forEach((word) => {
      arrayOfLetters = word.split("");
      firstLetter = arrayOfLetters[0].toUpperCase();
      arrayOfLastLetters = arrayOfLetters.slice(1, arrayOfLetters.length);
      lastLetters = arrayOfLastLetters.join("");
      newWord = firstLetter.concat(lastLetters);
      newArrayOfWords.push(newWord);
    });

    return newArrayOfWords.join(" ");
  };
  return (
    <div>
      {capitalizeWords("hello world")}
      <br />
      {capitalizeWords("just to check if this really works")}
      <br />
      {capitalizeWords("javascript is fun")}
    </div>
  );
};

export default CapitalizeWords;
