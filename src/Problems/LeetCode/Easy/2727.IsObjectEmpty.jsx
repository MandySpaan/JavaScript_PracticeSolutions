const IsObjectEmpty = () => {
  const isObjectEmpty = function (obj) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    }
    if (obj !== null && typeof obj === "object") {
      return Object.keys(obj).length === 0;
    }
  };
  let obj1 = { x: 5, y: 42 };
  let obj2 = {};
  let obj3 = [null, false, 0];
  let obj4 = [];
  return (
    <div>
      {console.log(isObjectEmpty(obj1))}
      <br />
      {console.log(isObjectEmpty(obj2))}
      <br />
      {console.log(isObjectEmpty(obj3))}
      <br />
      {console.log(isObjectEmpty(obj4))}
      <br />
    </div>
  );
};

export default IsObjectEmpty;
