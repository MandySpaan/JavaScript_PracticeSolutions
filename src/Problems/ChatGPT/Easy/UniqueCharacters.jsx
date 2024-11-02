const UniqueCharacters = () => {
  const uniqueCharacters = function (string) {
    let arrayOfString = string.split("");
    let letterSet = new Set();
    for (let letter of arrayOfString) {
      if (letterSet.has(letter)) {
        return false;
      }
      letterSet.add(letter);
    }
    return true;
  };

  return (
    <div>
      {console.log(uniqueCharacters("This"))}
      {console.log(uniqueCharacters("Elephant"))}
      {console.log(uniqueCharacters("Unicorn"))}
      {console.log(uniqueCharacters("Sockman"))}
    </div>
  );
};

export default UniqueCharacters;
