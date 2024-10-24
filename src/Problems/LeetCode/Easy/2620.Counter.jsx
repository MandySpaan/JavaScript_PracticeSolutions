const Counter = () => {
  var createCounter = function (n) {
    return function () {
      return n++;
    };
  };

  // //This does the same as the code above
  // const createCounter = (n) => () => n++

  var counter = createCounter(5);

  return (
    <>
      {counter()}
      {counter()}
      {counter()}
    </>
  );
};

export default Counter;
