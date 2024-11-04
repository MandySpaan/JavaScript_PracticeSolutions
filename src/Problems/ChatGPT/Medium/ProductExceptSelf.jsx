const ProductExceptSelf = () => {
  const productExceptSelf = function (nums) {
    const result = Array(nums.length).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
      result[i] = leftProduct;
      leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= rightProduct;
      rightProduct *= nums[i];
    }

    return result;
  };

  return <div>{console.log(productExceptSelf([1, 2, 3, 4]))}</div>;
};

export default ProductExceptSelf;
