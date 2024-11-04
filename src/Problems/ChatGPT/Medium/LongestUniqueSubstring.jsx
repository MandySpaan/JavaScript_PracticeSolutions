const LongestUniqueSubstring = () => {
  const longestUniqueSubstring = function (string) {
    let uniqueCharacters = new Set();
    let result = 0;
    let i = 0;
    for (let j = 0; j < string.length; j++) {
      while (uniqueCharacters.has(string[j])) {
        uniqueCharacters.delete(string[i]);
        i++;
      }
      uniqueCharacters.add(string[j]);
      result = Math.max(result, j - i + 1);
    }
    return result;
  };
  return (
    <div>
      {console.log(longestUniqueSubstring("abcadbcbb"))}
      <br />
      {console.log(longestUniqueSubstring("bbbbb"))}
      <br />
      {console.log(longestUniqueSubstring("pwwkew"))}
      <br />
      {console.log(longestUniqueSubstring(""))}
      <br />
    </div>
  );
};

export default LongestUniqueSubstring;
