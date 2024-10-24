const AllowOneFunctionCall = () => {
  const once = function (fn) {
    let called = false;
    let result;
    return function (...arg) {
      if (!called) {
        called = true;
        result = fn(...arg);
        return result;
      } else {
        return undefined;
      }
    };
  };
  const fn = (a, b, c) => a + b + c;
  const onceFn = once(fn);
  return (
    <>
      {console.log(onceFn(1, 2, 3))}
      {console.log(onceFn(2, 3, 6))}
      {console.log(onceFn(1, 2, 3))}
    </>
  );
};

export default AllowOneFunctionCall;
