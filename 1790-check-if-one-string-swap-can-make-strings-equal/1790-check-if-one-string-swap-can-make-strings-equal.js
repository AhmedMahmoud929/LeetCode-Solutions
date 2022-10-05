var areAlmostEqual = function (s1 = "", s2 = "") {
  let counter = 0;
  let s3 = s1.split("").sort().join("");
  let s4 = s2.split("").sort().join("");
  if (s3 != s4) return false;
  else {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) counter++;
    }
    return counter == 2 || counter == 0 ? true : false;
  }
};