const Sleep = () => {
  function sleep(millis) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, millis);
    });
  }

  //// This does exactly the same as the function above
  // const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));

  let t = Date.now();
  sleep(100).then(() => {
    console.log("Date1:", t, "Date2:", Date.now());
    console.log(Date.now() - t); // Should be around 100
  });

  return <>Sleep</>;
};

export default Sleep;
