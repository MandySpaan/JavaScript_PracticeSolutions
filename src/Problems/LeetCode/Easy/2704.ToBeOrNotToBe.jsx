const ToBeOrNotToBe = () => {
  const expect = function (val) {
    return {
      toBe: function (val2) {
        if (val !== val2) {
          throw new Error("Not Equal");
        }
        return true;
      },
      notToBe: function (val2) {
        if (val === val2) {
          throw new Error("Equal");
        }
        return true;
      },
    };
  };
  return (
    <div>
      {console.log("toBe: 5, 5", expect(5).toBe(5))}
      {/* {console.log("notToBe: 5, 5", expect(5).notToBe(5))} */}
      {/* {console.log("toBe: 4, 6", expect(4).toBe(6))} */}
      {console.log("notToBe: 4, 6", expect(4).notToBe(6))}
    </div>
  );
};

export default ToBeOrNotToBe;
