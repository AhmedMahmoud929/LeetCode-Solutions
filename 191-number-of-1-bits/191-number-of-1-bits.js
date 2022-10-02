var hammingWeight = function (n) {
  let counter = 0;
  n.toString(2).split("").forEach((char) => {
    if (char == "1") counter++;
  });
  return counter;
};