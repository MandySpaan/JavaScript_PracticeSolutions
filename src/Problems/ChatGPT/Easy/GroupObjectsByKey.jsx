const GroupObjectsByKey = () => {
  const groupBy = function (arr, key) {
    const grouped = {};
    arr.forEach((obj) => {
      const keyValue = obj[key];
      if (!grouped[keyValue]) {
        grouped[keyValue] = [];
      }
      grouped[keyValue].push(obj);
    });
    return grouped;
  };
  const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
    { name: "Eve", age: 35 },
  ];
  return <div>{console.log(groupBy(data, "age"))}</div>;
};

export default GroupObjectsByKey;
