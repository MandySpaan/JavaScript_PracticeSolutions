const ArrayPrototypeLast = () => {
  Array.prototype.last = function () {
    if (this.length === 0) {
      return -1;
    }
    return this[this.length - 1];
  };

  const fruit = ["apple", "orange", "lemon", "peach"];

  return <>{fruit.last()}</>;
};

export default ArrayPrototypeLast;
