const parseArgs = () => {
  const value = process.argv[3];
  const value2 = process.argv[5];
  const value3 = process.argv[7];
  console.log(
    `propName is ${value}, prop2Name is ${value2}, prop3Name is ${value3}`
  );
};

parseArgs();
