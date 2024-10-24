const FunctionComposition = () => {
  var compose = function (functions) {
    return function (x) {
      return functions.reduceRight((acc, fn) => fn(acc), x);
    };
  };

  const myFunctions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
  const composedFunction = compose(myFunctions);
  const result4 = composedFunction(4);
  const result5 = composedFunction(5);
  return (
    <div>
      {console.log(result4)}
      {console.log(result5)}
    </div>
  );
};

export default FunctionComposition;
