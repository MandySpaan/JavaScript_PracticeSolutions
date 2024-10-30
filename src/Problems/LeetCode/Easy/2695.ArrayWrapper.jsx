const ArrayWrapperComponent = () => {
  const ArrayWrapper = function (nums) {
    this.nums = nums;
  };

  ArrayWrapper.prototype.valueOf = function () {
    return this.nums.reduce((sum, num) => sum + num, 0);
  };

  ArrayWrapper.prototype.toString = function () {
    return `[${this.nums.join(",")}]`;
  };

  const obj1 = new ArrayWrapper([1, 2]);
  const obj2 = new ArrayWrapper([3, 4]);
  const obj3 = [[23, 98, 42, 70]];

  return (
    <div>
      {obj1 + obj2}
      <br />
      {String(obj3)}
    </div>
  );
};

export default ArrayWrapperComponent;
