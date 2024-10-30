const PalindromeChecker = () => {
  const isPalindrome = function (str) {
    let onlyCharacters = str.toLowerCase().replace(/[^a-z]/g, "");
    let onlyCharactersReversed = onlyCharacters.split("").reverse().join("");

    if (onlyCharacters === onlyCharactersReversed) {
      return true;
    }
    return false;
  };

  return (
    <div>
      {console.log(isPalindrome("Just checking"))}
      {console.log(isPalindrome("A man, a plan, a canal, Panama"))}
    </div>
  );
};

export default PalindromeChecker;
