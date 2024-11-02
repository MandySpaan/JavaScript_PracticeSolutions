const CountVowels = () => {
  const countVowels = function (string) {
    const vowels = "aeiouAEIOU";
    const stringArray = string.split("");
    let result = 0;
    stringArray.forEach((letter) => {
      if (vowels.includes(letter)) {
        result = result + 1;
      }
    });
    return result;
  };

  //This does the same as the code above
  const countVowels2 = function (string) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let result = 0;

    for (let letter of string) {
      if (vowels.has(letter)) {
        result++;
      }
    }

    return result;
  };

  return (
    <div>
      {console.log(countVowels("Hello World!"))} {/* Output: 3 (e, o, o) */}
      {console.log(countVowels2("Hello World!"))} {/* Output: 3 (e, o, o) */}
      {console.log(countVowels("Programming"))} {/* Output: 3 (o, a, i) */}
      {console.log(countVowels2("Programming"))} {/* Output: 3 (o, a, i) */}
      {console.log(countVowels("AEIOU"))} {/* Output: 5 (All vowels) */}
      {console.log(countVowels2("AEIOU"))} {/* Output: 5 (All vowels) */}
      {console.log(countVowels("xyz"))} {/* Output: 0 (No vowels) */}
      {console.log(countVowels2("xyz"))} {/* Output: 0 (No vowels) */}
    </div>
  );
};

export default CountVowels;
