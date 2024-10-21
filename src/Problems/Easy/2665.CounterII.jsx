const CounterII = () => {
  const createCounter = function (init) {
    const initialValue = init;
    function increment() {
      init++;
      return init;
    }
    function decrement() {
      init--;
      return init;
    }
    function reset() {
      init = initialValue;
      return init;
    }
    return {
      increment,
      decrement,
      reset,
    };
  };

  const counter = createCounter(5);
  const counter2 = createCounter(0);
  return (
    <>
      {counter.increment()}
      {counter.increment()}
      {counter.reset()}
      {counter.decrement()}
      <br />
      {counter2.increment()}
      {counter2.increment()}
      {counter2.increment()}
      {counter2.decrement()}
      {counter2.reset()}
    </>
  );
};

export default CounterII;
