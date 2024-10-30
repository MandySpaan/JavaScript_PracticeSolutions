const ReturnLengthOfArgumentsPassed = () => {
  const argumentsLength = function (...arg) {
    return arg.length;
  };
  return (
    <div>
      {argumentsLength(5)} <br />
      {argumentsLength(1, 2, 3)} <br />
      {argumentsLength({}, null, "heya", 4)}
    </div>
  );
};

export default ReturnLengthOfArgumentsPassed;
