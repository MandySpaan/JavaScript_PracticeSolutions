const AreAnagrams = () => {
  const areAnagrams = function (string1, string2) {
    let cleanString1 = string1.toLowerCase().replace(/\s+/g, "");
    let cleanString2 = string2.toLowerCase().replace(/\s+/g, "");

    let sortedString1 = cleanString1.split("").sort().join("");
    let sortedString2 = cleanString2.split("").sort().join("");

    return sortedString1 === sortedString2;
  };
  return (
    <div>
      {console.log(areAnagrams("listen", "silent"))}
      {console.log(areAnagrams("triangle", "integral"))}
      {console.log(areAnagrams("apple", "pale"))}
      {console.log(areAnagrams("Dormitory", "Dirty room"))}
    </div>
  );
};

export default AreAnagrams;
