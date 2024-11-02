const RemoveVowelsFromString = () => {
  const removeVowels = function (string) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    return string
      .split("")
      .filter((letter) => !vowels.has(letter))
      .join("");
  };
  return (
    <div>
      {removeVowels("hello world")}
      <br />
      {removeVowels("OpenAI is amazing")}
      <br />
      {removeVowels("Let's test one more")}
      <br />
    </div>
  );
};

export default RemoveVowelsFromString;
